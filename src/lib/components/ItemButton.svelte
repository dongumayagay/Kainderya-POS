<script>
	import { addToCart } from '$lib/api';
	export let item = {
		image: '🍽',
		name: 'name',
		price: 'price'
	};
</script>

<button
	on:click={() => addToCart(item)}
	class="btn btn-ghost h-52 m-1 aspect-square flex-col p-2 rounded-xl bg-base-100"
>
	<p class=" text-9xl">{item.image}</p>
	<div class="pt-3">
		<p class="text-lg font-semibold">{item.name}</p>
		<p class="">₱{item.price}</p>
	</div>
</button>
