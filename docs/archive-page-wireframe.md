# Archive Page Layout Wireframe

This wireframe shows the visual layout structure of the Orionrobots archive pages (Robot Building, Robot News, Robotics at Home) as they appear to visitors, from top to bottom including what's above and below the fold.

## Desktop Layout View (Full Page Structure)

```
┌─────────────────────────────────────────────────────────────────────┐
│ ┌─ HEADER ──────────────────────────────────────────────────────┐ │
│ │ 🏠 Orionrobots  [Menu] [Menu] [Menu] [Menu]   [Search Box]   │ │ ← Navigation Bar
│ └───────────────────────────────────────────────────────────────┘ │
│                                                                   │
│ ┌─ MAIN CONTENT AREA (Two Column Layout) ──────────────────────┐ │
│ │                                                               │ │
│ │ ┌─ CONTENT COLUMN ──────────────┐ ┌─ SIDEBAR ─────────────┐ │ │
│ │ │                               │ │                       │ │ │
│ │ │ ┌─ SOCIAL SHARING ──────────┐ │ │ ┌─ BOOK CARD 1 ─────┐ │ │ │ ← Social Sharing | Book Sidebar
│ │ │ │ [🔗📧📱]               │ │ │ │ [📚] Robotics     │ │ │ │
│ │ │ └───────────────────────────┘ │ │ │ at Home with      │ │ │ │
│ │ │                               │ │ │ Raspberry Pi Pico │ │ │ │
│ │ │ ┌─ PAGE TITLE ──────────────┐ │ │ │                   │ │ │ │ ← Page Title | Book Promotion
│ │ │ │ TITLE: Robot Building     │ │ │ │ [Book Cover]      │ │ │ │
│ │ │ └───────────────────────────┘ │ │ │ Learn to build    │ │ │ │
│ │ │                               │ │ │ robots at home    │ │ │ │
│ │ │ ┌─ FEATURED POSTS ──────────┐ │ │ │ [Buy Now]         │ │ │ │
│ │ │ │                           │ │ │ └───────────────────┘ │ │ │
│ │ │ │ ┌─ POST 1 ──────────────┐ │ │ │                       │ │ │ ← Featured Post Item
│ │ │ │ │ [📷] 30 Aug 2025 »    │ │ │ │ ┌─ BOOK CARD 2 ─────┐ │ │ │
│ │ │ │ │ Building Your First   │ │ │ │ │ [📚] Learn        │ │ │ │
│ │ │ │ │ Robot                 │ │ │ │ │ Robotics          │ │ │ │
│ │ │ │ │ A comprehensive guide │ │ │ │ │ Programming       │ │ │ │
│ │ │ │ │ to getting started... │ │ │ │ │ 2nd Edition       │ │ │ │
│ │ │ │ │ [more...]             │ │ │ │ │                   │ │ │ │
│ │ │ │ └───────────────────────┘ │ │ │ │ │ [Book Cover]      │ │ │ │
│ │ │ │                           │ │ │ │ │ Build and control │ │ │ │
│ │ │ │ ┌─ POST 2 ──────────────┐ │ │ │ │ │ robots with Pi    │ │ │ │
│ │ │ │ │ [📷] 25 Aug 2025 »    │ │ │ │ │ and Python 3      │ │ │ │
│ │ │ │ │ Advanced Motor        │ │ │ │ │ [Buy Now]         │ │ │ │
│ │ │ │ │ Control for Robotics  │ │ │ │ │ └───────────────────┘ │ │ │
│ │ │ │ │ Deep dive into servo  │ │ │ │ │                       │ │ │
│ │ │ │ │ and stepper motor...  │ │ │ │ │                       │ │ │
│ │ │ │ │ [more...]             │ │ │ │ │                       │ │ │
│ │ │ │ └───────────────────────┘ │ │ │ └─────────────────────┘ │ │
│ │ │ │                           │ │ │                         │ │
│ │ │ │ ┌─ POST 3 ──────────────┐ │ │ │                         │ │ ← Featured Post Item
│ │ │ │ │ [📷] 20 Aug 2025 »    │ │ │                         │ │
│ │ │ │ │ Sensor Integration    │ │ │                         │ │
│ │ │ │ │ Made Easy             │ │ │                         │ │
│ │ │ │ │ Learn how to integrate│ │ │                         │ │
│ │ │ │ │ various sensors...    │ │ │                         │ │
│ │ │ │ │ [more...]             │ │ │                         │ │
│ │ │ │ └───────────────────────┘ │ │ │                         │ │
│ │ │ │                           │ │ │                         │ │
│ │ │ │ ┌─ POST 4 ──────────────┐ │ │ │                         │ │ ← Featured Post Item
│ │ │ │ │ [📷] 15 Aug 2025 »    │ │ │                         │ │
│ │ │ │ │ Robot Programming     │ │ │                         │ │
│ │ │ │ │ Fundamentals          │ │ │                         │ │
│ │ │ │ │ Master the basics of  │ │ │                         │ │
│ │ │ │ │ programming robots... │ │ │                         │ │
│ │ │ │ │ [more...]             │ │ │                         │ │
│ │ │ │ └───────────────────────┘ │ │ │                         │ │
│ │ │ └───────────────────────────┘ │ │                         │ │
│ │ │                               │ │                         │ │
│ │ │ ┌─ ADDITIONAL POSTS ────────┐ │ │                         │ │
│ │ │ │ 10 Aug 2025 » Robot       │ │ │                         │ │ ← Additional Post Item
│ │ │ │ Chassis Design Tips       │ │ │                         │ │
│ │ │ │                           │ │ │                         │ │
│ │ │ │ 05 Aug 2025 » Power       │ │ │                         │ │ ← Additional Post Item
│ │ │ │ Supply Considerations     │ │ │                         │ │
│ │ │ │                           │ │ │                         │ │
│ │ │ │ 01 Aug 2025 » Wireless    │ │ │                         │ │ ← Additional Post Item
│ │ │ │ Robot Communication       │ │ │                         │ │
│ │ │ │                           │ │ │                         │ │
│ │ │ │ 28 Jul 2025 » 3D Printing │ │ │                         │ │ ← Additional Post Item
│ │ │ │ Robot Parts               │ │ │                         │ │
│ │ │ │                           │ │ │                         │ │
│ │ │ │ 25 Jul 2025 » Arduino vs  │ │ │                         │ │ ← Additional Post Item
│ │ │ │ Raspberry Pi              │ │ │                         │ │
│ │ │ │                           │ │ │                         │ │
│ │ │ │ 20 Jul 2025 » Robot       │ │ │                         │ │ ← Additional Post Item
│ │ │ │ Safety Guidelines         │ │ │                         │ │
│ │ │ └───────────────────────────┘ │ │                         │ │
│ │ └───────────────────────────────┘ └─────────────────────────┘ │
│ └───────────────────────────────────────────────────────────────┘ │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│ ┌─ FOOTER ──────────────────────────────────────────────────────┐ │
│ │ 💬 Discuss robot building on Our Discord Server!             │ │ ← Social Links
│ │ 📺 Youtube                                                    │ │
│ │ 📘 Facebook                                                   │ │
│ │ 🔒 Privacy and Cookies                                        │ │
│ │                                                               │ │
│ │ © 2025 OrionRobots. Orionrobots is a registered trademark.   │ │ ← Copyright
│ │ with help from Bootstrap                                      │ │
│ └───────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## Layout Sections Breakdown

### Above the Fold (Initially Visible)

```
┌─ NAVIGATION BAR ─────────────────────────────────────────────────┐
│ Logo + Brand Name | Menu Items | Search Box                     │
└─────────────────────────────────────────────────────────────────┘

┌─ TWO COLUMN LAYOUT ─────────────────────────────────────────────┐
│ ┌─ CONTENT AREA ──────────────┐ ┌─ SIDEBAR ─────────────────┐ │
│ │                             │ │                           │ │
│ │ ┌─ SOCIAL ROW ────────────┐ │ │ ┌─ BOOK SIDEBAR ─────────┐ │ │
│ │ │ [📧📱]                 │ │ │ │                         │ │ │
│ │ └─────────────────────────┘ │ │ │ ┌─ BOOK CARD 1 ───────┐ │ │ │
│ │                             │ │ │ │ [📚] Robotics at     │ │ │ │
│ │ ┌─ PAGE HEADER ───────────┐ │ │ │ │ Home with Raspberry  │ │ │ │
│ │ │ TITLE: Robot Building   │ │ │ │ │ Pi Pico              │ │ │ │
│ │ └─────────────────────────┘ │ │ │ │ [Book Cover Image]   │ │ │ │
│ │                             │ │ │ │ Learn to build...    │ │ │ │
│ │                             │ │ │ │ [Buy Now Button]     │ │ │ │
│ │                             │ │ │ └─────────────────────┘ │ │ │
│ │                             │ │ │                         │ │ │
│ │                             │ │ │ ┌─ BOOK CARD 2 ───────┐ │ │ │
│ │                             │ │ │ │ [📚] Learn Robotics  │ │ │ │
│ │                             │ │ │ │ Programming 2nd Ed   │ │ │ │
│ │                             │ │ │ │ [Book Cover Image]   │ │ │ │
│ │                             │ │ │ │ Build and control... │ │ │ │
│ │                             │ │ │ │ [Buy Now Button]     │ │ │ │
│ │                             │ │ │ └─────────────────────┘ │ │ │
│ │                             │ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ └───────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Below the Fold (Requires Scrolling)

```
┌─ FEATURED POSTS SECTION ────────────────────────────────────────┐
│ ┌─ First 4 Posts (with thumbnails and excerpts) ─────────────┐ │
│ │                                                             │ │
│ │ ┌─ POST CARD 1 ─────────────────────────────────────────┐ │ │
│ │ │ [Thumb] Date » Title                                   │ │ │
│ │ │ Post excerpt text describing the content...            │ │ │
│ │ │ [more...]                                              │ │ │
│ │ └───────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │ ┌─ POST CARD 2 ─────────────────────────────────────────┐ │ │
│ │ │ [Thumb] Date » Title                                   │ │ │
│ │ │ Post excerpt text describing the content...            │ │ │
│ │ │ [more...]                                              │ │ │
│ │ └───────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │ ┌─ POST CARD 3 ─────────────────────────────────────────┐ │ │
│ │ │ [Thumb] Date » Title                                   │ │ │
│ │ │ Post excerpt text describing the content...            │ │ │
│ │ │ [more...]                                              │ │ │
│ │ └───────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │ ┌─ POST CARD 4 ─────────────────────────────────────────┐ │ │
│ │ │ [Thumb] Date » Title                                   │ │ │
│ │ │ Post excerpt text describing the content...            │ │ │
│ │ │ [more...]                                              │ │ │
│ │ └───────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─ ADDITIONAL POSTS SECTION ──────────────────────────────────────┐
│ ┌─ Remaining Posts (title and date only) ────────────────────┐ │
│ │                                                             │ │
│ │ Date » Title Link                                          │ │
│ │ Date » Title Link                                          │ │
│ │ Date » Title Link                                          │ │
│ │ Date » Title Link                                          │ │
│ │ Date » Title Link                                          │ │
│ │ Date » Title Link                                          │ │
│ │ ...                                                        │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─ FOOTER ────────────────────────────────────────────────────────┐
│ ┌─ Social Links ──────────────────────────────────────────────┐ │
│ │ • Discord Link                                              │ │
│ │ • YouTube Link                                              │ │
│ │ • Facebook Link                                             │ │
│ │ • Privacy & Cookies Link                                    │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─ Copyright Info ────────────────────────────────────────────┐ │
│ │ © Year OrionRobots | Powered by Bootstrap                   │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Key Layout Characteristics

**Two-Column Design**: Unlike the front page, archive pages use a sidebar layout with main content area and sidebar. The layout is width-constrained in the middle against an image background.

**Content Hierarchy**:
1. Navigation & Branding (sticky header)
2. Social sharing row (main content area)
3. Page title (specific to the archive type)
4. Featured posts section (first 4 posts with full details)
5. Additional posts section (remaining posts with title/date only)
6. Book promotion sidebar (multiple books, persistent throughout page)
7. Footer with links & copyright

**Post Display Format**:
- **Featured Posts (first 4)**: Thumbnail image, date, title, excerpt text, "more..." link
- **Additional Posts**: Date and title link only (compact format)

**Tag-Specific Content**: Each archive page shows content filtered by its specific tag:
- Robot Building: `robot-building` tag
- Robot News: `robot-news` tag  
- Robotics at Home: `robotics-at-home` tag

**Visual Flow**: Designed to showcase the most recent and relevant content prominently at the top, with quick access to older content below, while maintaining book promotion visibility in the sidebar.

**Responsive Breakpoints**: On mobile/tablet, the sidebar stacks below the main content, and the navigation collapses to hamburger menu while maintaining the same content order.
