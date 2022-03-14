<script lang="ts">
    import SideBar from '../components/SideBar.svelte'
    import AppBar from '../components/AppBar.svelte'
</script>

<AppBar>
    <SideBar>
        <slot />
    </SideBar>
</AppBar>
