<script lang="ts">
    import type { ProjectIdentifier } from "../store";

    let { items = [] }: { items: ProjectIdentifier[] } = $props();
    let query = $state("");

    const filtered = $derived(
        items.filter((item) => {
            const text =
                "path" in item
                    ? item.path
                    : `${item.user ? item.user + "@" : ""}${item.host}${item.port ? ":" + item.port : ""}${item.path ? ":" + item.path : ""}`;
            return text.toLowerCase().includes(query.toLowerCase());
        }),
    );
</script>

<div class="querybar">
    <div class="search-container">
        <svg
            class="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="11"
                cy="11"
                r="8"
                stroke="currentColor"
                stroke-width="2"
            />
            <path
                d="m21 21-4.35-4.35"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        <input
            class="query-input"
            type="text"
            placeholder="Search recent projects (path or user@host[:port]:/path)"
            bind:value={query}
        />
    </div>

    {#if items.length > 0 && filtered.length > 0}
        <ul class="results">
            {#each filtered as item}
                <li class="result-item">
                    {"path" in item
                        ? item.path
                        : `${item.user ? item.user + "@" : ""}${item.host}${item.port ? ":" + item.port : ""}${item.path ? ":" + item.path : ""}`}
                </li>
            {/each}
        </ul>
    {:else}
        <div class="no-results">No recent open projects</div>
    {/if}
</div>

<style>
    .querybar {
        margin-top: 1.5rem;
        width: 100%;
        max-width: 800px;
    }
    .search-container {
        position: relative;
        width: 100%;
    }
    .search-icon {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1.25rem;
        height: 1.25rem;
        color: var(--text-muted);
        pointer-events: none;
    }
    .query-input {
        width: 100%;
        padding: 0.75rem 1rem 0.75rem 2.75rem;
        border: 1px solid var(--border-light);
        border-radius: 8px;
    }
    .results {
        margin-top: 0.75rem;
        list-style: none;
        border: 1px solid var(--border-light);
        border-radius: 8px;
        background: var(--bg-panel);
        overflow: hidden;
    }
    .result-item {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--border-elevated-light);
    }
    .result-item:last-child {
        border-bottom: none;
    }
    .no-results {
        margin-top: 0.75rem;
        padding: 0.75rem 1rem;
        border: 1px solid var(--border-light);
        border-radius: 8px;
        background: var(--bg-panel);
        text-align: center;
        color: #666;
    }
</style>
