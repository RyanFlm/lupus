<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { Item, Text, Graphic } from '@smui/list'

    export let name: string;
    export let icon: string;
    export let active = false;

    const dispatch = createEventDispatcher();

    const click = () => {
        dispatch('click');
    };

</script>

<Item on:click={click} activated={active}>
    <Graphic class="material-icons" aria-hidden="true">{icon}</Graphic>
    <Text>{name}</Text>
</Item>
