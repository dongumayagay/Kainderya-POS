import { cart } from './store';
import { get } from 'svelte/store';

const findInCart = (name) => get(cart).findIndex((item) => item.name === name);
const saveCart = () => cart.set([...get(cart)]);
export const removeAll = () => cart.set([]);

// export const cartLength = () => get(cart).length;
// export const isCartEmpty = () => !get(cart).length;

export function addToCart(item) {
	const index = findInCart(item.name);
	if (index === -1) {
		cart.update((cart) => (cart = [...cart, { ...item, quantity: 1 }]));
		return;
	}
	get(cart)[index].quantity += 1;
	saveCart();
}

export function updateItemQuantity(name, qty) {
	const index = findInCart(name);
	get(cart)[index].quantity = qty;
	saveCart();
}

export function removeFromCart(name) {
	const index = findInCart(name);
	get(cart).splice(index, 1);
	saveCart();
}
