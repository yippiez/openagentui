
/**
 * Display a UI element by setting its style to visible/block
 */
export function displayOn(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'block';
        element.style.visibility = 'visible';
    } else {
        console.warn(`Element with ID '${elementId}' not found`);
    }
}

/**
 * Hide a UI element by setting its style to hidden/none
 */
export function displayOff(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
        element.style.visibility = 'hidden';
    } else {
        console.warn(`Element with ID '${elementId}' not found`);
    }
}

/**
 * Toggle the display state of a UI element
 */
export function displayToggle(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        if (element.style.display === 'none' || element.style.visibility === 'hidden') {
            displayOn(elementId);
        } else {
            displayOff(elementId);
        }
    } else {
        console.warn(`Element with ID '${elementId}' not found`);
    }
}
