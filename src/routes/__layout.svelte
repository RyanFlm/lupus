<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import { Theme } from 'carbon-components-svelte';
	import { theme } from '$lib/stores';
	import Header from '$lib/components/Header.svelte';
	import SideNav from '$lib/components/SideNav.svelte';
	import { Content } from 'carbon-components-svelte';

	let isSideNavOpen = false;
</script>

<Theme bind:theme={$theme} />

<Header bind:isSideNavOpen />

<SideNav bind:isOpen={isSideNavOpen} />

<Content>
	<slot />
</Content>
