# Front Page Layout Wireframe

This wireframe describes the layout structure of the Orionrobots front page (index.md) without focusing on specific content.

## Overall Layout Structure

The front page uses a Bootstrap-based responsive layout with the following hierarchy:

```
<!DOCTYPE html>
<html>
  <head>
    <!-- Meta tags, CSS, and script includes -->
  </head>
  <body class="template">
    <div class="container">
      <!-- HEADER SECTION -->
      <nav class="navbar navbar-expand-lg">
        <!-- Navigation bar content -->
      </nav>
      
      <!-- MAIN CONTENT SECTION -->
      <div class="row">
        <div id="col-main" class="content col-md-12">
          <!-- Content area spans full width for index layout -->
          
          <!-- TAG AND SOCIAL ROW -->
          <nav class="row g-0 border rounded tag-row">
            <!-- Tags section -->
            <!-- Social sharing section -->
          </nav>
          
          <!-- PAGE HEADER -->
          <h2 class="page-header">
            <!-- Page title and optional tagline -->
          </h2>
          
          <!-- POST INFO SECTION -->
          <div class="row-fluid post-full">
            <!-- Additional post information if needed -->
          </div>
          
          <!-- MAIN ARTICLE CONTENT -->
          <article>
            <!-- Main page content -->
          </article>
        </div>
        <!-- Note: No sidebar for index layout (content_class="col-md-12") -->
      </div>
      
      <!-- FOOTER SECTION -->
      <footer id="bottom">
        <!-- Footer content -->
      </footer>
    </div>
  </body>
</html>
```

## Header Section Layout

```
+------------------------------------------------------------------+
| NAVIGATION BAR                                                   |
| [Logo + "Orionrobots"] [Menu Items...] [Search Box]            |
+------------------------------------------------------------------+
```

### Navigation Components:
- **Brand/Logo**: Left-aligned logo with site name
- **Menu Items**: Horizontal navigation menu (collapses on mobile)
- **Search Box**: Right-aligned Google Custom Search

## Main Content Area Layout

```
+------------------------------------------------------------------+
| TAG ROW                                                          |
| [Tags] [Social Sharing Icons]                                   |
+------------------------------------------------------------------+
| PAGE HEADER                                                      |
| Main Title [Optional Tagline]                                   |
+------------------------------------------------------------------+
| MAIN CONTENT AREA                                               |
| - Introductory text/description                                 |
| - Featured content (book banner, links)                        |
| - Recent Posts section                                          |
| - Additional sections (Events, Policies, etc.)                 |
+------------------------------------------------------------------+
```

### Content Sections Structure:
1. **Tag Row**: Horizontal bar with tags and social sharing
2. **Page Header**: Main title with optional tagline
3. **Content Article**: Main content area containing:
   - Introduction paragraph
   - Featured content (images, links)
   - Recent posts list
   - Additional navigation sections

## Recent Posts Section Layout

```
+------------------------------------------------------------------+
| ## Recent Posts                                                  |
+------------------------------------------------------------------+
| [Thumbnail] | Post Date » Post Title                             |
|             | Post excerpt... [more...]                         |
+------------------------------------------------------------------+
| [Thumbnail] | Post Date » Post Title                             |
|             | Post excerpt... [more...]                         |
+------------------------------------------------------------------+
| ... (up to 6 posts)                                            |
+------------------------------------------------------------------+
```

### Recent Posts Components:
- **Thumbnail**: Left-aligned post image
- **Post Meta**: Date and title as clickable link
- **Excerpt**: Brief post description with "more..." link

## Footer Section Layout

```
+------------------------------------------------------------------+
| FOOTER NAVIGATION                                                |
| - Discord link                                                   |
| - YouTube link                                                   |
| - Facebook link                                                  |
| - Privacy & Cookies link                                        |
+------------------------------------------------------------------+
| COPYRIGHT & CREDITS                                              |
| © Year OrionRobots | Powered by Bootstrap                       |
+------------------------------------------------------------------+
```

## Responsive Behavior

- **Desktop**: Full width layout (col-md-12)
- **Tablet**: Menu collapses to hamburger button
- **Mobile**: Stacked vertical layout, responsive navigation

## Layout Differences from Other Pages

The front page (index layout) differs from other page layouts:

- **No Sidebar**: Uses full width (col-md-12) instead of col-md-8 with sidebar
- **Custom Content Structure**: Optimized for home page content presentation
- **Featured Content**: Designed to showcase recent posts and key information

## CSS Framework

- **Bootstrap 5**: Primary responsive framework
- **Custom CSS**: Additional styling via bundle.js and inline styles
- **Responsive Grid**: Uses Bootstrap's grid system for layout

## JavaScript Dependencies

- **bundle.js**: Main JavaScript bundle containing site functionality
- **Google Custom Search**: Search functionality
- **Bootstrap JS**: Navigation and responsive behavior
- **Social Media SDKs**: For social sharing functionality