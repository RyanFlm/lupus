<script lang="ts">
    import { activeFolder } from '$lib/stores'
    import { H6 } from '@smui/common/elements'
    import Drawer, { AppContent, Content } from '@smui/drawer'
    import List, { Separator, Subheader } from '@smui/list'
    import Item from './SideBarItem.svelte'

    const setActive = (item: string) => activeFolder.set(item);

    const folders = [{
        name: 'Inbox'
    },{
        name: 'Star'
    },{
        name: 'Sent Mail',
        icon: 'send'
    },{
        name: 'Drafts'
    }];
    const labels = [{
        name: 'Family',
        icon: 'bookmark'
    },{
        name: 'Friends',
        icon: 'bookmark'
    },{
        name: 'Work',
        icon: 'bookmark'
    }];
</script>

<div class="drawer-container">
    <Drawer>
        <Content>
            <List>

                {#each folders as folder}
                    <Item
                        name={folder.name}
                        icon={(folder.icon || folder.name).toLowerCase()}
                        active={$activeFolder === folder.name}
                        on:click={() => setActive(folder.name)}
                    />
                {/each}
        
                <Separator />
                <Subheader component={H6}>Labels</Subheader>

                {#each labels as label}
                    <Item
                        name={label.name}
                        icon={(label.icon || label.name).toLowerCase()}
                        active={$activeFolder === label.name}
                        on:click={() => setActive(label.name)}
                    />
                {/each}

            </List>
        </Content>
    </Drawer>
    <AppContent class="app-content">
        <main class="main-content">
            <slot />
        </main>
    </AppContent>
</div>
 
<style>
    /* These classes are only needed because the
      drawer is in a container on the page. */
    .drawer-container {
        position: relative;
        display: flex;
        overflow: hidden;
        z-index: 0;
        height: 100vh;
    }
   
    *:global(.app-content) {
        flex: auto;
        overflow: auto;
        position: relative;
        flex-grow: 1;
    }

    .main-content {
        padding: 16px;
        overflow: auto;
    }
</style>
