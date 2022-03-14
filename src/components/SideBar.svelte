<script lang="ts">
    import { H6 } from '@smui/common/elements';
    import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer'
    import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';

    let active = 'Inbox';
    const setActive = (value: string) => active = value;
</script>

<div class="drawer-container">
    <Drawer>
        <Header>
            <Title>Obylisk</Title>
            <Subtitle>It's the best fake mail app drawer.</Subtitle>
        </Header>
        <Content>
            <List>
                <Item on:click={() => setActive('Inbox')} activated={active === 'Inbox'}>
                    <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
                    <Text>Inbox</Text>
                </Item>
                <Item on:click={() => setActive('Star')} activated={active === 'Star'}>
                    <Graphic class="material-icons" aria-hidden="true">star</Graphic>
                    <Text>Star</Text>
                </Item>
                <Item on:click={() => setActive('Sent Mail')} activated={active === 'Sent Mail'}>
                    <Graphic class="material-icons" aria-hidden="true">send</Graphic>
                    <Text>Sent Mail</Text>
                </Item>
                <Item on:click={() => setActive('Drafts')} activated={active === 'Drafts'}>
                    <Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
                    <Text>Drafts</Text>
                </Item>
        
                <Separator />
                <Subheader component={H6}>Labels</Subheader>
                <Item on:click={() => setActive('Family')} activated={active === 'Family'}>
                    <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
                    <Text>Family</Text>
                </Item>
                <Item on:click={() => setActive('Friends')} activated={active === 'Friends'}>
                    <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
                    <Text>Friends</Text>
                </Item>
                <Item on:click={() => setActive('Work')} activated={active === 'Work'}>
                    <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
                    <Text>Work</Text>
                </Item>
            </List>
        </Content>
    </Drawer>
    <AppContent class="app-content">
        <slot />
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
</style>
