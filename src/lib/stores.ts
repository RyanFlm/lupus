import { writable } from 'svelte/store';

export const activeFolder = writable('Inbox');
export const drawerOpen = writable(false);
