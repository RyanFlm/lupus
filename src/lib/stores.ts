import { writable } from 'svelte/store';
import type { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte';

export const activeFolder = writable('Inbox');
export const theme = writable<CarbonTheme>('g100');
