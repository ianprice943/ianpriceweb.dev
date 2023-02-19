import { writable, type Writable } from 'svelte/store';

export const theme = writable("light");

export const isLoggedIn = writable(false);