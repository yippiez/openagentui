<script lang="ts">
    import type { ProjectIdentifier } from "../store";

    let { items = [] }: { items: ProjectIdentifier[] } = $props();
    let query = $state("");

    const filtered = $derived(items.filter((item) => {
        const text =
            "path" in item
                ? item.path
                : `${item.user ? item.user + "@" : ""}${item.host}${item.port ? ":" + item.port : ""}${item.path ? ":" + item.path : ""}`;
        return text.toLowerCase().includes(query.toLowerCase());
    }));
</script>

{#if items.length > 0}
    <div class="querybar">
        <input
            class="query-input"
            type="text"
            placeholder="Search recent projects (path or user@host[:port]:/path)"
            bind:value={query}
        />

        {#if filtered.length > 0}
            <ul class="results">
                {#each filtered as item}
                    <li class="result-item">
                        {"path" in item
                            ? item.path
                            : `${item.user ? item.user + "@" : ""}${item.host}${item.port ? ":" + item.port : ""}${item.path ? ":" + item.path : ""}`}
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
{/if}

<style>
    .querybar {
        margin-top: 1.5rem;
        width: 100%;
        max-width: 800px;
    }
    .query-input {
        width: 100%;
        padding: 0.75rem 1rem;
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
</style>
