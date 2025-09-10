<script lang="ts">
    import QueryBar from "./components/QueryBar.svelte";
    import { getRecentProjects } from "./store";
    import { localConnectionClicked, remoteConnectionClicked } from "./events";

    // compute once at init
    const recent = getRecentProjects();

    // Optional: expose handlers for on:click
    function onLocalClick() {
        localConnectionClicked();
    }
    function onRemoteClick() {
        remoteConnectionClicked();
    }
</script>

<main class="selection-container">
    <div class="options-container">
        <button class="option-button" id="local-option" onclick={onLocalClick}>
            <div class="button-content">
                <div class="title-icon-row">
                    <h3>Local Folder</h3>
                    <div class="icon-container">
                        <svg
                            class="option-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 8L12 3L21 8V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V8Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9 21V12H15V21"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <p>Browse and load local folders</p>
            </div>
        </button>

        <button
            class="option-button"
            id="remote-option"
            onclick={onRemoteClick}
        >
            <div class="button-content">
                <div class="title-icon-row">
                    <h3>Remote SSH</h3>
                    <div class="icon-container">
                        <svg
                            class="option-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17V7Z"
                                stroke="currentColor"
                                stroke-width="2"
                            />
                            <path
                                d="M4 10H20"
                                stroke="currentColor"
                                stroke-width="2"
                            />
                            <path
                                d="M8 14H8.01"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                            <path
                                d="M12 14H16"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>
                    </div>
                </div>
                <p>Connect to remote servers via SSH</p>
            </div>
        </button>
    </div>

    <!-- Conditional Query Bar -->
    <QueryBar items={recent} />
</main>
