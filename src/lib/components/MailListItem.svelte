<script lang="ts">
  import { Item, Text, PrimaryText, SecondaryText } from '@smui/list'
  
  export let data: Email;

  const preview = data.content.text;

</script>

<Item>
  <Text>
    <PrimaryText>{data.subject}</PrimaryText>
    <SecondaryText>{data.sender}</SecondaryText>
    <SecondaryText>{preview}</SecondaryText>
  </Text>
</Item>
