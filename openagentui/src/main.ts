import { applyCSSVariables } from "./config";
import App from "./App.svelte";
import { mount } from "svelte";

// Apply theme variables
applyCSSVariables();

// Mount Svelte app
const app = mount(App, { target: document.body });

export default app;

