# Archive Page Layout Wireframe

This wireframe shows the visual layout structure of the Orionrobots archive pages (Robot Building, Robot News, Robotics at Home) as they appear to visitors, from top to bottom including what's above and below the fold.

## Desktop Layout View (Full Page Structure)

```
┌───────────────────────────────────────────────────────────────────┐
│ HEADER (Above the Fold)                                           │
├───────────────────────────────────────────────────────────────────┤
│ 🏠 Orionrobots  [Menu] [Menu] [Menu] [Menu]      [Search Box]    │ ← Navigation Bar
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ MAIN CONTENT AREA (Two Column Layout)                            │
├─────────────────────────────────────────────┬─────────────────────┤
│ CONTENT COLUMN (col-md-8)                   │ SIDEBAR (col-md-4)  │
├─────────────────────────────────────────────┼─────────────────────┤
│ [🔗📧📱]                                   │ [📚]                │ ← Social Sharing | Book Sidebar
│                                             │ Robotics at Home    │
├─────────────────────────────────────────────┤ with Raspberry Pi   │ ← Page Title | Book Promotion
│ TITLE: Robot Building                       │ Pico                │
│ FEATURED POSTS (First 4 with excerpts)     │                     │
├─────────────────────────────────────────────┼─────────────────────┤
│ [📷] 30 Aug 2025 » Building Your First     │ [Book Cover Image]  │ ← Featured Post Item
│      Robot                                  │                     │
│      A comprehensive guide to getting      │ Learn to build      │
│      started with robot building using     │ robots at home...   │
│      basic components and tools...         │                     │
│      [more...]                             │ [Buy Now Button]    │
├─────────────────────────────────────────────┼─────────────────────┤
│ [📷] 25 Aug 2025 » Advanced Motor Control  │ [📚]                │ ← Featured Post Item
│      for Robotics                          │ Learn Robotics      │
│      Deep dive into servo and stepper      │ Programming         │
│      motor control techniques for precise  │ 2nd Edition         │
│      robot movement...                     │                     │
│      [more...]                             │ [Book Cover Image]  │
├─────────────────────────────────────────────┼─────────────────────┤
│ [📷] 20 Aug 2025 » Sensor Integration      │ Build and control   │ ← Featured Post Item
│      Made Easy                             │ autonomous robots   │
│      Learn how to integrate various        │ with Raspberry Pi   │
│      sensors into your robot projects      │ and Python 3...     │
│      for enhanced functionality...         │                     │
│      [more...]                             │ [Buy Now Button]    │
├─────────────────────────────────────────────┼─────────────────────┤
│ [📷] 15 Aug 2025 » Robot Programming       │                     │ ← Featured Post Item
│      Fundamentals                          │                     │
│      Master the basics of programming      │                     │
│      robots with clear examples and        │                     │
│      practical exercises...                │                     │
│      [more...]                             │                     │
├─────────────────────────────────────────────┼─────────────────────┤
│                                             │                     │
│ ADDITIONAL POSTS (Title and Date Only)     │                     │
├─────────────────────────────────────────────┼─────────────────────┤
│ 10 Aug 2025 » Robot Chassis Design Tips    │                     │ ← Additional Post Item
├─────────────────────────────────────────────┼─────────────────────┤
│ 05 Aug 2025 » Power Supply Considerations  │                     │ ← Additional Post Item
├─────────────────────────────────────────────┼─────────────────────┤
│ 01 Aug 2025 » Wireless Robot Communication │                     │ ← Additional Post Item
├─────────────────────────────────────────────┼─────────────────────┤
│ 28 Jul 2025 » 3D Printing Robot Parts      │                     │ ← Additional Post Item
├─────────────────────────────────────────────┼─────────────────────┤
│ 25 Jul 2025 » Arduino vs Raspberry Pi      │                     │ ← Additional Post Item
├─────────────────────────────────────────────┼─────────────────────┤
│ 20 Jul 2025 » Robot Safety Guidelines      │                     │ ← Additional Post Item
├─────────────────────────────────────────────┼─────────────────────┤
│                                             │                     │
│                                             │                     │ ← End of Sidebar
│                                             │                     │
│                                             │                     │
│                                             │                     │
│                                             │                     │ ← Bottom of Content
├─────────────────────────────────────────────┴─────────────────────┤
│ Events                                                            │ ← Additional Sections
│ Robot Events                                                      │
│                                                                   │
│ Policies                                                          │
│ Terms And Conditions                                              │
│                                                                   │ ← Bottom of Content
├───────────────────────────────────────────────────────────────────┤
│ FOOTER (Below the Fold)                                           │
├───────────────────────────────────────────────────────────────────┤
│ 💬 Discuss robot building on Our Discord Server!                 │ ← Social Links
│ 📺 Youtube                                                        │
│ 📘 Facebook                                                       │
│ 🔒 Privacy and Cookies                                            │
├───────────────────────────────────────────────────────────────────┤
│ © 2025 OrionRobots. Orionrobots is a registered trademark.       │ ← Copyright
│ with help from Bootstrap                                          │
└───────────────────────────────────────────────────────────────────┘
```

## Layout Sections Breakdown

### Above the Fold (Initially Visible)

```
┌─ NAVIGATION BAR ─────────────────────────────────────────────────┐
│ Logo + Brand Name | Menu Items | Search Box                     │
└─────────────────────────────────────────────────────────────────┘

┌─ TWO COLUMN LAYOUT ─────────────────────────────────────────────┐
│ CONTENT (col-md-8)        │ SIDEBAR (col-md-4)                 │
│                           │                                     │
│ ┌─ SOCIAL ROW ──────────┐ │ ┌─ BOOK SIDEBAR ─────────────────┐ │
│ │ [📧📱]                │ │ │ [Book Cover Image]             │ │
│ └───────────────────────┘ │ │ Robotics at Home with Pi Pico  │ │
│                           │ │ [Buy Now Button]               │ │
│ ┌─ PAGE HEADER ─────────┐ │ │                                │ │
│ │ TITLE: Robot Building │ │ │ [Book Cover Image]             │ │
│ └───────────────────────┘ │ │ Learn Robotics Programming 2nd │ │
│                           │ │ [Buy Now Button]               │ │
└─────────────────────────────────────────────────────────────────┘
```

### Below the Fold (Requires Scrolling)

```
┌─ FEATURED POSTS SECTION ────────────────────────────────────────┐
│ ## First 4 Posts (with thumbnails and excerpts)               │
│                                                               │
│ [Thumb] Date » Title                                         │
│ Post excerpt text describing the content...                  │ 
│ [more...]                                                    │
│                                                               │
│ [Thumb] Date » Title                                         │
│ Post excerpt text describing the content...                  │
│ [more...]                                                    │
│                                                               │
│ [Thumb] Date » Title                                         │
│ Post excerpt text describing the content...                  │
│ [more...]                                                    │
│                                                               │
│ [Thumb] Date » Title                                         │
│ Post excerpt text describing the content...                  │
│ [more...]                                                    │
└─────────────────────────────────────────────────────────────────┘

┌─ ADDITIONAL POSTS SECTION ──────────────────────────────────────┐
│ ## Remaining Posts (title and date only)                      │
│                                                               │
│ Date » Title Link                                            │
│ Date » Title Link                                            │
│ Date » Title Link                                            │
│ Date » Title Link                                            │
│ Date » Title Link                                            │
│ Date » Title Link                                            │
│ ...                                                          │
└─────────────────────────────────────────────────────────────────┘

┌─ ADDITIONAL NAVIGATION ─────────────────────────────────────────┐
│ ## Events                                                     │
│ Robot Events                                                  │
│                                                               │
│ ## Policies                                                   │
│ Terms And Conditions                                          │
└─────────────────────────────────────────────────────────────────┘

┌─ FOOTER ────────────────────────────────────────────────────────┐
│ • Discord Link                                                │
│ • YouTube Link                                                │
│ • Facebook Link                                               │
│ • Privacy & Cookies Link                                      │
│                                                               │
│ © Year OrionRobots | Powered by Bootstrap                     │
└─────────────────────────────────────────────────────────────────┘
```

## Key Layout Characteristics

**Two-Column Design**: Unlike the front page, archive pages use a sidebar layout with main content in a 8-column area and sidebar in a 4-column area. The layout is width-constrained in the middle against an image background.

**Content Hierarchy**:
1. Navigation & Branding (sticky header)
2. Social sharing row (main content area)
3. Page title (specific to the archive type)
4. Featured posts section (first 4 posts with full details)
5. Additional posts section (remaining posts with title/date only)
6. Book promotion sidebar (multiple books, persistent throughout page)
7. Additional navigation (events, policies)
8. Footer with links & copyright

**Post Display Format**:
- **Featured Posts (first 4)**: Thumbnail image, date, title, excerpt text, "more..." link
- **Additional Posts**: Date and title link only (compact format)

**Tag-Specific Content**: Each archive page shows content filtered by its specific tag:
- Robot Building: `robot-building` tag
- Robot News: `robot-news` tag  
- Robotics at Home: `robotics-at-home` tag

**Visual Flow**: Designed to showcase the most recent and relevant content prominently at the top, with quick access to older content below, while maintaining book promotion visibility in the sidebar.

**Responsive Breakpoints**: On mobile/tablet, the sidebar stacks below the main content, and the navigation collapses to hamburger menu while maintaining the same content order.
