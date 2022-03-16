<script lang="ts">
    import SideBar from '$lib/components/SideBar.svelte'
    import AppBar from '$lib/components/AppBar.svelte'
</script>

<AppBar>
    <SideBar>
        <slot />
    </SideBar>
</AppBar>
