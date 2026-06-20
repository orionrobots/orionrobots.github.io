import hashlib
import os
import sys
import requests
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

SCRIPT_DIR = Path(__file__).parent
REPO_ROOT = SCRIPT_DIR / ".." / ".." / ".." / ".."
GALLERIES_2026 = REPO_ROOT / "galleries" / "2026"

# Font: Oswald variable font, pinned to a specific upstream commit so outputs
# are reproducible. SHA256 is verified after download as a supply-chain guard.
_FONT_COMMIT = "b6f0fe1740573b70ee367fbaba04b7586be85af3"
FONT_URL = (
    f"https://raw.githubusercontent.com/google/fonts/{_FONT_COMMIT}"
    "/ofl/oswald/Oswald%5Bwght%5D.ttf"
)
FONT_SHA256 = "5b38c246e255a12f5712d640d56bcced0472466fc68983d2d0410ec0457c2817"
FONT_PATH = SCRIPT_DIR / "Oswald-Bold.ttf"

# Promo photo: pass as PROMO_PHOTO env var or as the first CLI argument.
_photo_arg = os.environ.get("PROMO_PHOTO") or (sys.argv[1] if len(sys.argv) > 1 else None)
if not _photo_arg:
    sys.exit(
        "Error: promo photo path not provided.\n"
        "Usage:  PROMO_PHOTO=/path/to/photo.jpg uv run make_banner.py\n"
        "    or: uv run make_banner.py /path/to/photo.jpg\n"
        "Default: /home/danny/nextcloud/0-Projects/2026-05-Book\\ promo\\ photos/"
        "26-06-10\\ 14-44-48\\ 0469.jpg"
    )
PROMO_PHOTO = Path(_photo_arg)

LRP3_COVER = (
    REPO_ROOT / "galleries"
    / "learn-robotics-programming-3rd-edition"
    / "learn-robotics-programming-3rd-cover.png"
)

OUT_FULL = GALLERIES_2026 / "Learn-robotics-programming-3rd-edition-banner-2835.png"
OUT_2048 = GALLERIES_2026 / "Learn-robotics-programming-3rd-edition-banner-2048.png"

# Canvas dimensions
W, H = 2835, 920

# Layout
BOOK_PANEL_W     = 530
TEXT_START_X     = 560   # left edge of title within the centre panel

# Photo crop fractions (proportion of image dimensions removed from each edge)
# left:   remove conservatory wall on Danny's left
# right:  clip the bin in the far-right corner while keeping the rightmost robot
# top:    reduce empty headspace
# bottom: keep all robots at the bottom (no crop)
PHOTO_CROP = dict(left=0.17, right=0.08, top=0.05, bottom=0.00)

CHEVRON_DEPTH    = 110   # px — how far the tip protrudes into the photo

BOOK_COVER_PADDING = 10  # px each side in the book-cover panel; smaller = bigger cover

# Colours
DARK_BG        = (61, 61, 61, 255)   # #3D3D3D
ORANGE         = "#F26522"
SUBTEXT_COLOUR = "#CCCCCC"           # readable light grey on dark background
CHEVRON_COLOUR = "#3D3D3D"

# Typography
TITLE_SIZE     = 115
TITLE_LINE_GAP = 25    # extra spacing between title lines so descenders don't crowd
SUBTEXT_SIZE   = 55
TITLE_LINES    = ["Learn Robotics", "Programming 3rd Edition"]
SUBTEXT        = "Available on Packt & Amazon"


# --- helpers ---

def ensure_font():
    if FONT_PATH.exists():
        digest = hashlib.sha256(FONT_PATH.read_bytes()).hexdigest()
        if digest == FONT_SHA256:
            return
        print("Cached font has unexpected SHA256; re-downloading …")
        FONT_PATH.unlink()

    print("Downloading Oswald-Bold.ttf …")
    r = requests.get(FONT_URL, timeout=30)
    r.raise_for_status()
    data = r.content
    digest = hashlib.sha256(data).hexdigest()
    if digest != FONT_SHA256:
        sys.exit(f"Font SHA256 mismatch!\n  expected: {FONT_SHA256}\n  got:      {digest}")
    FONT_PATH.write_bytes(data)


def load_font(size: int) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(FONT_PATH), size)
    try:
        font.set_variation_by_axes([700])   # Bold weight axis
    except (AttributeError, OSError):
        pass
    return font


def crop_by_fraction(img: Image.Image, *, left=0.0, right=0.0, top=0.0, bottom=0.0) -> Image.Image:
    """Crop image by a fraction of each dimension from the respective edge."""
    w, h = img.size
    return img.crop((
        round(w * left),
        round(h * top),
        round(w * (1 - right)),
        round(h * (1 - bottom)),
    ))


def scale_to_height(img: Image.Image, height: int) -> Image.Image:
    """Resize image to target height, preserving aspect ratio."""
    scale = height / img.height
    return img.resize((round(img.width * scale), height), Image.LANCZOS)


def fit_book_cover(
    cover_path: Path, panel_w: int, panel_h: int, padding: int = 10
) -> tuple[Image.Image, int, int]:
    """Load cover, thumbnail to fit within padded panel; return (image, paste_x, paste_y)."""
    cover = Image.open(cover_path).convert("RGBA")
    cover.thumbnail((panel_w - 2 * padding, panel_h - 2 * padding), Image.LANCZOS)
    paste_x = (panel_w - cover.width) // 2
    paste_y = (panel_h - cover.height) // 2
    return cover, paste_x, paste_y


def draw_chevron(
    draw: ImageDraw.ImageDraw, photo_x: int, canvas_h: int, depth: int, colour: str
):
    """Right-pointing chevron at the photo boundary."""
    pts = [(photo_x, 0), (photo_x + depth, canvas_h // 2), (photo_x, canvas_h)]
    draw.polygon(pts, fill=colour)


def draw_text_block(draw: ImageDraw.ImageDraw, canvas_h: int):
    """Render title lines and subtext, vertically centred in the text panel."""
    title_font   = load_font(TITLE_SIZE)
    subtext_font = load_font(SUBTEXT_SIZE)

    line_boxes   = [draw.textbbox((0, 0), line, font=title_font) for line in TITLE_LINES]
    line_heights = [b[3] - b[1] for b in line_boxes]
    sub_box      = draw.textbbox((0, 0), SUBTEXT, font=subtext_font)
    sub_h        = sub_box[3] - sub_box[1]

    inter_title_gap = TITLE_LINE_GAP * max(0, len(TITLE_LINES) - 1)
    gap_before_sub  = 20 * 2
    total_h = sum(line_heights) + inter_title_gap + gap_before_sub + sub_h
    y = (canvas_h - total_h) // 2

    for i, (line, lh) in enumerate(zip(TITLE_LINES, line_heights)):
        draw.text((TEXT_START_X, y), line, fill=ORANGE, font=title_font)
        y += lh
        if i < len(TITLE_LINES) - 1:
            y += TITLE_LINE_GAP

    y += gap_before_sub
    draw.text((TEXT_START_X, y), SUBTEXT, fill=SUBTEXT_COLOUR, font=subtext_font)


# --- main ---

def make_banner():
    ensure_font()

    photo         = Image.open(PROMO_PHOTO).convert("RGB")
    photo_cropped = crop_by_fraction(photo, **PHOTO_CROP)
    photo_scaled  = scale_to_height(photo_cropped, H)
    photo_x       = W - photo_scaled.width   # right-aligned

    cover, cover_px, cover_py = fit_book_cover(LRP3_COVER, BOOK_PANEL_W, H, BOOK_COVER_PADDING)

    canvas = Image.new("RGBA", (W, H), DARK_BG)
    canvas.paste(photo_scaled.convert("RGBA"), (photo_x, 0))
    canvas.paste(cover, (cover_px, cover_py), cover)

    draw = ImageDraw.Draw(canvas)
    draw_chevron(draw, photo_x, H, CHEVRON_DEPTH, CHEVRON_COLOUR)
    draw_text_block(draw, H)

    GALLERIES_2026.mkdir(parents=True, exist_ok=True)
    rgb = canvas.convert("RGB")

    rgb.save(str(OUT_FULL), "PNG", optimize=True)
    print(f"Saved {OUT_FULL}  {rgb.size}")

    scale_2048 = 2048 / W
    thumb = rgb.resize((2048, round(H * scale_2048)), Image.LANCZOS)
    thumb.save(str(OUT_2048), "PNG", optimize=True)
    print(f"Saved {OUT_2048}  {thumb.size}")


if __name__ == "__main__":
    make_banner()
