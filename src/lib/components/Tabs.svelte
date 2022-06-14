<script>
	import { active_tab } from '$lib/store';
</script>

<nav class=" w-full bg-base-100  rounded-lg font-semibold py-3 flex justify-evenly">
	<button
		class="text-2xl rounded-lg btn btn-wide"
		class:btn-primary={$active_tab == 'all'}
		on:click={() => ($active_tab = 'all')}
	>
		all
	</button>
	<button
		class="text-2xl rounded-lg btn btn-wide"
		class:btn-primary={$active_tab == 'food'}
		on:click={() => ($active_tab = 'food')}
	>
		food
	</button>
	<button
		class="text-2xl rounded-lg btn btn-wide"
		class:btn-primary={$active_tab == 'drinks'}
		on:click={() => ($active_tab = 'drinks')}
	>
		drinks
	</button>
	<button
		class="text-2xl rounded-lg btn btn-wide"
		class:btn-primary={$active_tab == 'dessert'}
		on:click={() => ($active_tab = 'dessert')}
	>
		dessert
	</button>
</nav>
