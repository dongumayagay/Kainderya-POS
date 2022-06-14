<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Cart from '$lib/components/Cart.svelte';
	import LeftPanel from '$lib/components/LeftPanel.svelte';
</script>

<div class="h-screen p-2  grid grid-cols-3 grid-rows-[auto_1fr] gap-2 overflow-hidden">
	<div class=" col-span-3"><Navbar /></div>
	<div class=" col-span-2"><LeftPanel /></div>
	<div class=" col-span-1"><Cart /></div>
</div>
