<script lang="ts">
  import { activeFolder } from '$lib/stores'
  import MailList from '$lib/components/MailList.svelte'

  let emails: Array<Email> = [{
    subject: 'Test',
    sender: 'test@example.com',
    content: {
      text: 'Some test mail',
      html: '<p>Some test mail</p>'
    }
  }];
</script>

<MailList data={emails} />
