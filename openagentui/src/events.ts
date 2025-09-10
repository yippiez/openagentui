
// Event definitions
export const events = {
    localConnectionClicked: 'localConnectionClicked',
    remoteConnectionClicked: 'remoteConnectionClicked'
} as const;

// Event types
export type EventType = typeof events[keyof typeof events];

// Event handler functions
export function localConnectionClicked(): void {
    console.log("Local connection clicked");
    // TODO: Implement local connection logic
}

export function remoteConnectionClicked(): void {
    console.log("Remote connection clicked");
    // TODO: Implement remote connection logic
}
