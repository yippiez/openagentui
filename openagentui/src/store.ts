
export interface PathType {
    path: string;
}

export interface SSHConnectionString {
    user?: string;
    host: string;
    port?: number;
    path: string;
}

export type ProjectIdentifier = PathType | SSHConnectionString;

/**
 * Retrieves an array of recent projects.
 * Each project is identified by either a local path or a SSH connection.
 * @returns An array of recent project identifiers (Paths or SSH connections).
 */
export function getRecentProjects(): ProjectIdentifier[] {
    // TODO: implement real retrieval of recent projects (e.g., from localStorage or Tauri storage)
    return [];
}