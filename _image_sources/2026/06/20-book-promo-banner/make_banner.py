# /// script
# requires-python = ">=3.11"
# dependencies = ["pillow", "requests"]
# ///

import requests
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

SCRIPT_DIR = Path(__file__).parent
REPO_ROOT = SCRIPT_DIR / ".." / ".." / ".." / ".."
GALLERIES_2026 = REPO_ROOT / "galleries" / "2026"

# Variable font; we select the Bold (700) axis in load_font()
FONT_URL = "https://raw.githubusercontent.com/google/fonts/main/ofl/oswald/Oswald%5Bwght%5D.ttf"
FONT_PATH = SCRIPT_DIR / "Oswald-Bold.ttf"

PROMO_PHOTO = Path("/home/danny/nextcloud/0-Projects/2026-05-Book promo photos/26-06-10 14-44-48 0469.jpg")
LRP3_COVER = REPO_ROOT / "galleries" / "learn-robotics-programming-3rd-edition" / "learn-robotics-programming-3rd-cover.png"

OUT_FULL = GALLERIES_2026 / "Learn-robotics-programming-3rd-edition-banner-2835.png"
OUT_2048 = GALLERIES_2026 / "Learn-robotics-programming-3rd-edition-banner-2048.png"

# Canvas dimensions
W, H = 2835, 920

# Layout (x positions)
BOOK_PANEL_W = 530
TEXT_START_X = 560   # left edge of text block within center panel

# Photo crop fractions (proportion of original image dimensions to remove from each edge)
# left:  remove conservatory wall on Danny's left
# right: clip the bin in the far-right corner while keeping the rightmost robot
# top:   reduce empty headspace
# bottom: keep full bottom so all robots remain visible
PHOTO_CROP = dict(left=0.17, right=0.08, top=0.05, bottom=0.00)

# Chevron (right-pointing triangle at the photo boundary)
CHEVRON_DEPTH = 110   # px — how far the tip protrudes into the photo

# Colours
DARK_BG        = (61, 61, 61, 255)    # #3D3D3D
ORANGE         = "#F26522"
SUBTEXT_COLOUR = "#CCCCCC"
CHEVRON_COLOUR = "#3D3D3D"

# Typography
TITLE_SIZE   = 115
SUBTEXT_SIZE = 55
TITLE_LINES  = ["Learn Robotics", "Programming 3rd Edition"]
SUBTEXT      = "Available on Packt & Amazon"


# --- helpers ---

def ensure_font():
    if FONT_PATH.exists():
        return
    print(f"Downloading Oswald-Bold.ttf ...")
    r = requests.get(FONT_URL, timeout=30)
    r.raise_for_status()
    FONT_PATH.write_bytes(r.content)


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


def fit_book_cover(cover_path: Path, panel_w: int, panel_h: int, padding: int = 30) -> tuple[Image.Image, int, int]:
    """Load cover, thumbnail to fit within padded panel, return (image, paste_x, paste_y)."""
    cover = Image.open(cover_path).convert("RGBA")
    cover.thumbnail((panel_w - 2 * padding, panel_h - 2 * padding), Image.LANCZOS)
    paste_x = (panel_w - cover.width) // 2
    paste_y = (panel_h - cover.height) // 2
    return cover, paste_x, paste_y


def draw_chevron(draw: ImageDraw.ImageDraw, photo_x: int, canvas_h: int, depth: int, colour: str):
    """Right-pointing chevron at photo boundary; left edge at photo_x, tip depth px into photo."""
    pts = [(photo_x, 0), (photo_x + depth, canvas_h // 2), (photo_x, canvas_h)]
    draw.polygon(pts, fill=colour)


def draw_text_block(draw: ImageDraw.ImageDraw, canvas_h: int):
    """Render title and subtext centred vertically in the text panel."""
    title_font   = load_font(TITLE_SIZE)
    subtext_font = load_font(SUBTEXT_SIZE)

    line_boxes = [draw.textbbox((0, 0), line, font=title_font) for line in TITLE_LINES]
    line_heights = [b[3] - b[1] for b in line_boxes]
    sub_box = draw.textbbox((0, 0), SUBTEXT, font=subtext_font)
    sub_h = sub_box[3] - sub_box[1]

    gap = 20
    total_h = sum(line_heights) + gap + gap + sub_h
    y = (canvas_h - total_h) // 2

    for line, lh in zip(TITLE_LINES, line_heights):
        draw.text((TEXT_START_X, y), line, fill=ORANGE, font=title_font)
        y += lh

    y += gap * 2
    draw.text((TEXT_START_X, y), SUBTEXT, fill=SUBTEXT_COLOUR, font=subtext_font)


# --- main ---

def make_banner():
    ensure_font()

    photo = Image.open(PROMO_PHOTO).convert("RGB")
    photo_cropped = crop_by_fraction(photo, **PHOTO_CROP)
    photo_scaled  = scale_to_height(photo_cropped, H)
    photo_x       = W - photo_scaled.width   # right-aligned

    cover, cover_px, cover_py = fit_book_cover(LRP3_COVER, BOOK_PANEL_W, H)

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
