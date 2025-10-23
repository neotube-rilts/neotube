// src/stores/user.js
import { writable } from 'svelte/store';
import { createDefaultUser } from '$lib/models/userModel';

export const user = writable(createDefaultUser({ uid: '', email: '', providerData: [] }));
