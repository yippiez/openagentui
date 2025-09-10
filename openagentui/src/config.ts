export interface ColorPalette {
    // Background Colors
    primary: string;           // Main component backgrounds, chunky items
    panel: string;            // Analysis panels, help pages
    content: string;          // Content areas, expanded sections
    toolbar: string;          // Navigation toolbar, dark UI elements
    filter: string;           // Filter interface backgrounds

    // Text Colors
    text_primary: string;     // Main text, headers, important content
    text_secondary: string;   // Subtitles, secondary information
    text_light: string;       // Text on dark backgrounds (toolbar)
    text_disabled: string;    // Disabled states

    // Border & Accent Colors
    border_primary: string;           // Main borders, button backgrounds
    border_light: string;            // Subtle borders, content separators
    border_elevated_light: string;   // Top/left borders for 3D effect
    border_elevated_dark: string;    // Bottom/right borders for 3D effect

    // Interactive & Status Colors
    hover: string;            // Button hover states
    success: string;          // Success states, calculation buttons
    success_hover: string;    // Hover state for success elements
    error: string;            // Error states, warnings
    error_light: string;      // Lighter error states

    // Utility Colors
    tooltip_dark: string;     // Tooltip backgrounds
    gradient_blue: string;    // Blue gradient accent
    gradient_purple: string;  // Purple gradient accent
    flag_red: string;         // Flag/alert red
}


export const colorPalette: ColorPalette = {
    // Background Colors
    primary: '#3d3a37',               // Dark muted gray - Main backgrounds
    panel: '#484440',                // Medium dark muted - Analysis panels
    content: '#524e49',              // Light dark muted - Content areas
    toolbar: '#2f2c29',              // Very dark muted - Navigation toolbar
    filter: '#423e3a',               // Dark muted brown - Filter interfaces

    // Text Colors
    text_primary: '#d4cfc7',         // Soft cream - Main text
    text_secondary: '#b8afa3',       // Muted beige - Secondary text
    text_light: '#e6e0d6',           // Light cream - Light text on dark
    text_disabled: '#857c71',        // Muted brown - Disabled states

    // Border & Accent Colors
    border_primary: '#937a62',       // Medium brown - Main borders
    border_light: '#e0ddd8',         // Light beige - Subtle borders
    border_elevated_light: '#ded6ce', // Very light beige - 3D top/left
    border_elevated_dark: '#b6a391', // Darker beige - 3D bottom/right

    // Interactive & Status Colors
    hover: '#a8896f',                // Light brown - Hover states
    success: '#43a047',              // Green - Success states
    success_hover: '#2e7d32',        // Dark green - Success hover
    error: '#ff4444',                // Bright red - Error states
    error_light: '#ff6b6b',          // Light red - Light error states

    // Utility Colors
    tooltip_dark: '#2c2c2c',         // Very dark gray - Tooltips
    gradient_blue: '#3b82f6',        // Blue gradient accent
    gradient_purple: '#9333ea',      // Purple gradient accent
    flag_red: '#d44343',             // Flag/alert red
};

/**
 * CSS Custom Properties for easy integration
 */
export const cssVariables = {
    '--bg-primary': colorPalette.primary,
    '--bg-panel': colorPalette.panel,
    '--bg-content': colorPalette.content,
    '--bg-toolbar': colorPalette.toolbar,
    '--bg-filter': colorPalette.filter,
    '--bg-elevated': '#4a4642',
    '--text-primary': colorPalette.text_primary,
    '--text-secondary': colorPalette.text_secondary,
    '--text-light': colorPalette.text_light,
    '--text-disabled': colorPalette.text_disabled,
    '--border-primary': colorPalette.border_primary,
    '--border-light': colorPalette.border_light,
    '--border-elevated-light': colorPalette.border_elevated_light,
    '--border-elevated-dark': colorPalette.border_elevated_dark,
    '--hover-primary': colorPalette.hover,
    '--success': colorPalette.success,
    '--success-hover': colorPalette.success_hover,
    '--error': colorPalette.error,
    '--error-light': colorPalette.error_light,
    '--tooltip-dark': colorPalette.tooltip_dark,
    '--gradient-blue': colorPalette.gradient_blue,
    '--gradient-purple': colorPalette.gradient_purple,
    '--flag-red': colorPalette.flag_red,
} as const;

/**
 * Tailwind CSS configuration colors
 */
export const tailwindColors = {
    primary: {
        DEFAULT: colorPalette.primary,
        panel: colorPalette.panel,
        content: colorPalette.content,
        toolbar: colorPalette.toolbar,
        filter: colorPalette.filter,
    },
    text: {
        primary: colorPalette.text_primary,
        secondary: colorPalette.text_secondary,
        light: colorPalette.text_light,
        disabled: colorPalette.text_disabled,
    },
    border: {
        primary: colorPalette.border_primary,
        light: colorPalette.border_light,
        elevated: {
            light: colorPalette.border_elevated_light,
            dark: colorPalette.border_elevated_dark,
        },
    },
    interactive: {
        hover: colorPalette.hover,
        success: colorPalette.success,
        'success-hover': colorPalette.success_hover,
        error: colorPalette.error,
        'error-light': colorPalette.error_light,
    },
    utility: {
        'tooltip-dark': colorPalette.tooltip_dark,
        'gradient-blue': colorPalette.gradient_blue,
        'gradient-purple': colorPalette.gradient_purple,
        'flag-red': colorPalette.flag_red,
    },
};

/**
 * Apply CSS custom properties to the document root
 */
export const applyCSSVariables = (): void => {
    const root = document.documentElement;
    Object.entries(cssVariables).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });
};

export default colorPalette;
