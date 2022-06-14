<script>
	import { cart, cartTotal } from '$lib/store';
	import { removeAll } from '$lib/api';
	import CartItem from '$lib/components/CartItem.svelte';
</script>

<div class="h-full bg-base-200 rounded-lg p-2 flex flex-col">
	<div class="grid grid-cols-5 text-center mb-2 normal-case text-sm items-center font-semibold">
		<span>Image</span>
		<span>Name</span>
		<span>Price</span>
		<span>Qty</span>
		<button
			on:click={removeAll}
			class="btn btn-error btn-sm normal-case text-current	"
			class:btn-disabled={!$cart.length}
		>
			Void
		</button>
	</div>
	<div class=" flex-grow">
		{#each $cart as item}
			<CartItem {item} />
		{:else}
			<h1 class=" text-center font-semibold pt-8">No Orders</h1>
		{/each}
	</div>
	<div class=" flex-shrink-0 text-xl flex justify-between items-end">
		<span class="font-semibold pl-4">
			Total: ₱{$cartTotal}
		</span>
		<!-- <button
			for="my-modal"
			class="btn btn-accent btn-wide modal-button"
			class:btn-disabled={!$cart.length}>Charge</button
		> -->
		<label
			for="my-modal"
			class="btn modal-button btn-accent btn-wide"
			class:btn-disabled={!$cart.length}>Charge</label
		>
	</div>
</div>
<!-- The button to open modal -->
<!-- <label for="my-modal" class="btn modal-button">open modal</label> -->

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
	<div class="modal-box w-11/12 max-w-5xl h-96 flex flex-col">
		<h3 class="font-bold text-5xl">Congratulations random Interner user!</h3>
		<p class="py-4 text-3xl">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="mt-auto modal-action">
			<label for="my-modal" class="btn btn-wide text-3xl">Yay!</label>
		</div>
	</div>
</div>
