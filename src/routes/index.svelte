<svelte:head>
    <!-- SMUI Styles -->
    <link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
    <link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />

    <!-- Material Icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <!-- Roboto -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />
    <!-- Roboto Mono -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono" />
</svelte:head>

<script lang="ts">
    import 'the-new-css-reset/css/reset.css'

    import SideBar from '../components/SideBar.svelte'
    import AppBar from '../components/AppBar.svelte'
</script>

<SideBar>
    <AppBar>
        content fdrom index
    </AppBar>
</SideBar>
