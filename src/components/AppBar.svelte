<script lang=ts>
    import type { TopAppBarComponentDev } from '@smui/top-app-bar'
    import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar'

    let topAppBar: TopAppBarComponentDev;
</script>

<TopAppBar variant="static" dense bind:this={topAppBar}>
    <Row>
        <Section>
            <Title>Obylisk</Title>
        </Section>
    </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
    <slot />
</AutoAdjust>
