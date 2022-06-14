<script>
	export let item;
	import { updateItemQuantity, removeFromCart } from '$lib/api';
	import { cart } from '$lib/store';
</script>

<div
	class="btn btn-ghost bg-base-100 shadow no-animation btn-block btn-lg grid grid-cols-5 text-center normal-case mb-2"
>
	<span class="text-4xl"> {item.image} </span>
	<span class=" capitalize"> {item.name} </span>
	<span> ₱{item.price} </span>
	<input
		type="number"
		on:change={() => {
			updateItemQuantity(item.name, item.quantity);
		}}
		class="rounded-lg w-20 p-1 mx-auto text-right text-black"
		bind:value={item.quantity}
	/>

	<button on:click={() => removeFromCart(item.name)} class="ml-auto btn btn-error btn-square"
		>🗑️
	</button>
</div>
