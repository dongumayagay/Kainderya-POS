import { readable, writable } from 'svelte/store';
import { products } from './products.json';
export let active_tab = writable('all');
export let product_list = readable(products);
export let cart = writable([]);
export let cartTotal = writable(0);

cart.subscribe((value) => {
	let total = 0;
	value.forEach((item) => (total += item.quantity * item.price));
	cartTotal.set(total);
});
