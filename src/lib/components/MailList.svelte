<script lang="ts">
  import List from '@smui/list'
  import MailListItem from './MailListItem.svelte'

  export let data: Array<Email>;
</script>

<List threeLine>

  {#each data as email}

    <MailListItem data={email} />

  {/each}

</List>
