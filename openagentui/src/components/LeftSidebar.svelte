<script lang="ts">
    let activeTab = $state("files");
    
    function setActiveTab(tab: string) {
        activeTab = tab;
    }
</script>

<div class="left-sidebar">
    <div class="sidebar-buttons">
        <button 
            class="sidebar-button" 
            class:active={activeTab === "files"}
            onclick={() => setActiveTab("files")}
            title="Files"
        >
            <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"/>
            </svg>
        </button>
        
        <button 
            class="sidebar-button" 
            class:active={activeTab === "search"}
            onclick={() => setActiveTab("search")}
            title="Search"
        >
            <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </button>
        
        <button 
            class="sidebar-button" 
            class:active={activeTab === "git"}
            onclick={() => setActiveTab("git")}
            title="Git"
        >
            <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
        </button>
        
        <button 
            class="sidebar-button" 
            class:active={activeTab === "debug"}
            onclick={() => setActiveTab("debug")}
            title="Run and Debug"
        >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M5 3l8 5-8 5V3z"/>
            </svg>
        </button>
        
        <button 
            class="sidebar-button" 
            class:active={activeTab === "todo"}
            onclick={() => setActiveTab("todo")}
            title="Todo Tree"
        >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="3" cy="4" r="1.5"/>
                <path d="M2 4l0.5 0.5L4 3.5"/>
                <line x1="7" y1="4" x2="14" y2="4"/>
                <circle cx="3" cy="8" r="1.5"/>
                <line x1="7" y1="8" x2="14" y2="8"/>
                <circle cx="3" cy="12" r="1.5"/>
                <line x1="7" y1="12" x2="14" y2="12"/>
            </svg>
        </button>
    </div>
    
    <div class="sidebar-bottom">
        <button class="sidebar-button settings" title="Settings">
            <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
            </svg>
        </button>
    </div>
</div>

<style>
    .left-sidebar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 3rem;
        background: var(--bg-toolbar);
        border-right: 1px solid var(--border-light);
        flex-shrink: 0;
    }
    
    .sidebar-buttons {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0;
    }
    
    .sidebar-bottom {
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
        position: relative;
        box-shadow: none;
    }
    
    .sidebar-button svg {
        width: 1.25rem;
        height: 1.25rem;
    }
    
    .sidebar-button:hover {
        color: var(--text-primary);
    }
    
    .sidebar-button.active {
        color: var(--text-primary);
    }
    
    .sidebar-button.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--border-primary);
    }
    
    .sidebar-button:focus {
        outline: none;
        box-shadow: none;
    }
</style>