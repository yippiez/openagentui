<script lang="ts">
    // Right sidebar component
</script>

<div class="right-sidebar">
    <div class="sidebar-buttons">
        <button class="sidebar-button" title="Warnings">
            <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
        </button>
    </div>
</div>

<style>
    .right-sidebar {
        display: flex;
        flex-direction: column;
        width: 3rem;
        background: var(--bg-toolbar);
        border-left: 1px solid var(--border-light);
        flex-shrink: 0;
    }
    
    .sidebar-buttons {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0;
    }
    
    .sidebar-button {
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.75rem;
        transition: all 0.15s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: none;
    }
    
    .sidebar-button svg {
        width: 1.25rem;
        height: 1.25rem;
    }
    
    .sidebar-button:hover {
        color: var(--text-primary);
    }
    
    .sidebar-button:focus {
        outline: none;
        box-shadow: none;
    }
</style>