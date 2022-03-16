<script lang=ts>
    import type { TopAppBarComponentDev } from '@smui/top-app-bar'
    import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar'
    import IconButton from '@smui/icon-button'
    import { drawerOpen } from '$lib/stores'

    let topAppBar: TopAppBarComponentDev;

    const toggleDrawer = () => drawerOpen.update(state => !state);
</script>

<TopAppBar variant="static" bind:this={topAppBar}>
    <Row>
        <Section>
            <IconButton class="material-icons" on:click={toggleDrawer}>menu</IconButton>
            <Title>Obylisk</Title>
        </Section>
    </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
    <slot />
</AutoAdjust>
