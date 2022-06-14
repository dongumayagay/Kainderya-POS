<script>
	import ItemButton from './ItemButton.svelte';
	import Tabs from './Tabs.svelte';
	import { product_list, active_tab } from '$lib/store';

	let tabHeight, panelHeight;
	function compare(a, b) {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	}
	$: filter_product =
		$active_tab == 'all'
			? $product_list
			: $product_list.filter((item) => item.category == $active_tab);
</script>

<div bind:clientHeight={panelHeight} class="h-full rounded-lg overflow-hidden">
	<div class="  rounded-lg overflow-y-scroll h-[721px] pl-2 grid grid-cols-5 auto-rows-min">
		{#each filter_product.sort(compare) as item}
			<ItemButton {item} />
		{/each}
	</div>
	<div bind:clientHeight={tabHeight} class="flex-shrink-0">
		<Tabs />
	</div>
</div>
