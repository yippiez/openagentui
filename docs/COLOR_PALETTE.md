# Warm Professional UI Color Palette

A warm, earthy color palette designed for professional applications with excellent contrast and readability. Features a sophisticated beige and brown color scheme that's easy on the eyes during extended use.

## Primary Colors

### Background Colors
- **Primary Background** - `#d6cbc1` (Timberwolf)
  - Main component backgrounds, chunky items
  - Warm beige with excellent readability
  
- **Panel Background** - `#f3f1ee` (Light cream)
  - Analysis panels, help pages
  - Subtle, clean background for content areas
  
- **Content Background** - `#f8f7f5` (Off-white cream)
  - Content areas, expanded sections
  - Slightly warmer than pure white
  
- **Toolbar Background** - `#4a4a4a` (Charcoal gray)
  - Navigation toolbar, dark UI elements
  - Professional dark contrast

### Text Colors
- **Primary Text** - `#36453b` (Dark slate gray)
  - Main text, headers, important content
  - High contrast on light backgrounds
  
- **Secondary Text** - `#596869` (Dim gray)
  - Subtitles, secondary information
  - Muted but readable
  
- **Light Text** - `#f3f1ee` (Cream white)
  - Text on dark backgrounds (toolbar)
  - High contrast on dark surfaces

### Border & Accent Colors
- **Primary Border** - `#937a62` (Medium brown)
  - Main borders, button backgrounds
  - Warm, professional appearance
  
- **Light Border** - `#e0ddd8` (Light beige)
  - Subtle borders, content separators
  - Gentle visual separation
  
- **Elevated Border Light** - `#ded6ce` (Very light beige)
  - Top/left borders for 3D effect
  - Creates depth and dimensionality
  
- **Elevated Border Dark** - `#b6a391` (Darker beige)
  - Bottom/right borders for 3D effect
  - Complements light borders for raised appearance

### Interactive & Status Colors
- **Hover Brown** - `#a8896f` (Light brown)
  - Button hover states
  - Warmer interaction feedback
  
- **Success Green** - `#43a047` (Green)
  - Success states, calculation buttons
  - Clear positive feedback
  
- **Success Green Hover** - `#2e7d32` (Dark green)
  - Hover state for success elements
  - Deeper success indication
  
- **Error Red** - `#ff4444` (Bright red)
  - Error states, warnings
  - Clear error indication
  
- **Error Red Light** - `#ff6b6b` (Light red)
  - Lighter error states
  - Softer error feedback

### Utility Colors
- **Filter Bar** - `#e8e5e0` (Warm gray)
  - Filter interface backgrounds
  - Neutral, functional appearance
  
- **Filter Button** - `#d4c5b9` (Warm beige)
  - Filter button states
  - Consistent with overall theme
  
- **Tooltip Dark** - `#2c2c2c` (Very dark gray)
  - Tooltip backgrounds
  - High contrast for important information
  
- **Disabled Gray** - `#a0a0a0` (Medium gray)
  - Disabled states
  - Clear unavailable indication

## Color Usage Categories

### Layout & Structure
```css
--background-primary: #d6cbc1;    /* Main backgrounds */
--background-panel: #f3f1ee;      /* Content panels */
--background-content: #f8f7f5;    /* Content areas */
--background-toolbar: #4a4a4a;    /* Dark navigation */
```

### Typography
```css
--text-primary: #36453b;          /* Main text */
--text-secondary: #596869;        /* Secondary text */
--text-light: #f3f1ee;           /* Light text on dark */
```

### Borders & Elevation
```css
--border-primary: #937a62;        /* Main borders */
--border-light: #e0ddd8;         /* Subtle borders */
--border-elevated-light: #ded6ce; /* 3D top/left */
--border-elevated-dark: #b6a391;  /* 3D bottom/right */
```

### Interactive States
```css
--hover-primary: #a8896f;         /* Primary hover */
--success: #43a047;              /* Success states */
--success-hover: #2e7d32;        /* Success hover */
--error: #ff4444;                /* Error states */
--error-light: #ff6b6b;          /* Light error */
```

## Design Principles

1. **Professional Aesthetic**: Warm, earthy tones that are easy on the eyes during extended use
2. **High Contrast**: Carefully selected colors ensure excellent readability and accessibility
3. **3D Design Elements**: Light/dark border combinations create a tactile, dimensional appearance
4. **Consistent Hierarchy**: Clear color hierarchy for different content types and importance levels
5. **Warm Neutrals**: Avoids harsh whites and grays in favor of warmer, more comfortable tones

## Format Variations

### Tailwind CSS Classes
```css
.bg-primary { background-color: #d6cbc1; }
.bg-panel { background-color: #f3f1ee; }
.bg-content { background-color: #f8f7f5; }
.bg-toolbar { background-color: #4a4a4a; }
.text-primary { color: #36453b; }
.text-secondary { color: #596869; }
.text-light { color: #f3f1ee; }
.border-primary { border-color: #937a62; }
.border-light { border-color: #e0ddd8; }
```

### SCSS Variables
```scss
$color-primary-bg: #d6cbc1;
$color-panel-bg: #f3f1ee;
$color-content-bg: #f8f7f5;
$color-toolbar-bg: #4a4a4a;
$color-text-primary: #36453b;
$color-text-secondary: #596869;
$color-text-light: #f3f1ee;
$color-border-primary: #937a62;
$color-border-light: #e0ddd8;
$color-hover-primary: #a8896f;
$color-success: #43a047;
$color-error: #ff4444;
```

### CSS Custom Properties
```css
:root {
  --bg-primary: #d6cbc1;
  --bg-panel: #f3f1ee;
  --bg-content: #f8f7f5;
  --bg-toolbar: #4a4a4a;
  --text-primary: #36453b;
  --text-secondary: #596869;
  --text-light: #f3f1ee;
  --border-primary: #937a62;
  --border-light: #e0ddd8;
  --hover-primary: #a8896f;
  --success: #43a047;
  --error: #ff4444;
}
```

## Usage Examples

### "Chunky" Component Pattern
```css
.chunky-item {
  background-color: #d6cbc1;
  color: #36453b;
  border-top: 3px solid #ded6ce;    /* Light elevated */
  border-left: 3px solid #ded6ce;   /* Light elevated */
  border-bottom: 3px solid #b6a391; /* Dark elevated */
  border-right: 3px solid #b6a391;  /* Dark elevated */
}

.chunky-content {
  background-color: #f8f7f5;
  border: 1px solid #b6a391;
}
```

### Toolbar Pattern
```css
.toolbar {
  background-color: #4a4a4a;
  color: #f3f1ee;
  border-bottom: 2px solid #937a62;
}

.toolbar-button {
  background-color: #937a62;
  color: #f3f1ee;
}

.toolbar-button:hover {
  background-color: #a8896f;
}
```

This color palette provides a cohesive, professional appearance suitable for any application requiring a warm, sophisticated interface while maintaining excellent usability and accessibility standards.

