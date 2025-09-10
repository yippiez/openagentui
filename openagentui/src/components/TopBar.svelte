<script lang="ts">
    let { title = "Openagentui" }: { title?: string } = $props();
</script>

<div class="topbar">
    <div class="topbar-left">
        <button class="menu-button">File</button>
        <button class="menu-button">View</button>
        <button class="menu-button">Run</button>
        <button class="menu-button">Terminal</button>
        <button class="menu-button">Help</button>
    </div>
    <div class="topbar-center">
        <!-- Center content -->
    </div>
    <div class="topbar-right">
        <!-- Right content -->
    </div>
</div>

<style>
    .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1.75rem;
        background: var(--bg-elevated);
        border-bottom: 1px solid var(--border-light);
        padding: 0 0.5rem;
        user-select: none;
    }
    
    .topbar-left {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        margin-left: 0.5rem;
    }
    
    .topbar-center {
        flex: 1;
        display: flex;
        justify-content: center;
    }
    
    .topbar-right {
        display: flex;
        align-items: center;
    }
    
    .menu-button {
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 0.6875rem;
        padding: 0.125rem 0.25rem;
        border-radius: 2px;
        cursor: pointer;
        transition: all 0.15s ease;
        box-shadow: none;
    }
    
    .menu-button:focus {
        outline: none;
        box-shadow: none;
    }
    
    .menu-button:hover {
        background: var(--bg-primary);
        color: var(--text-primary);
    }
</style>