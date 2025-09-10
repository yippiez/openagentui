<script lang="ts">
    import { onMount } from "svelte";
    
    let currentTime = $state("");
    let connectionStatus = $state("Disconnected");
    let currentProject = $state("No project");
    
    onMount(() => {
        const updateTime = () => {
            currentTime = new Date().toLocaleTimeString();
        };
        
        updateTime();
        const interval = setInterval(updateTime, 1000);
        
        return () => clearInterval(interval);
    });
</script>

<div class="bottombar">
    <div class="statusbar-left">
        <div class="status-item">
            <div class="status-indicator" class:connected={connectionStatus === "Connected"}></div>
            <span>{connectionStatus}</span>
        </div>
        <div class="status-item">
            <svg class="status-icon" viewBox="0 0 16 16">
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
            </svg>
            <span>{currentProject}</span>
        </div>
    </div>
    
    <div class="statusbar-center">
        <!-- Center content -->
    </div>
    
    <div class="statusbar-right">
        <div class="status-item">
            <svg class="status-icon" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
            <span>{currentTime}</span>
        </div>
        <div class="status-item">
            <svg class="status-icon" viewBox="0 0 16 16">
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <span>Ready</span>
        </div>
    </div>
</div>

<style>
    .bottombar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1.375rem;
        background: var(--bg-elevated);
        border-top: 1px solid var(--border-light);
        padding: 0 0.5rem;
        font-size: 0.75rem;
        color: var(--text-secondary);
        flex-shrink: 0;
    }
    
    .statusbar-left,
    .statusbar-right {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .statusbar-center {
        flex: 1;
    }
    
    .status-item {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0 0.25rem;
        cursor: pointer;
        transition: background-color 0.1s ease;
        border-radius: 2px;
    }
    
    .status-item:hover {
        background: var(--bg-hover);
    }
    
    .status-icon {
        width: 0.875rem;
        height: 0.875rem;
        fill: currentColor;
    }
    
    .status-indicator {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #f85149;
        transition: background-color 0.2s ease;
    }
    
    .status-indicator.connected {
        background: #3fb950;
    }
    
    .statusbar-left .status-item:first-child {
        margin-left: -0.25rem;
    }
    
    .statusbar-right .status-item:last-child {
        margin-right: -0.25rem;
    }
</style>