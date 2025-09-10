import { invoke } from "@tauri-apps/api/core";
import { applyCSSVariables } from "./config";

// Apply color variables when the app loads
applyCSSVariables();

