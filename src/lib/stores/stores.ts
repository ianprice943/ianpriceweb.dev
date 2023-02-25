import { writable, type Writable } from 'svelte/store';
import { readable } from 'svelte/store';

export const theme = writable("light");

export const domain = readable("idpdevelopment.net");