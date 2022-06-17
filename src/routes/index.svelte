<script lang="ts">
	import MailList from '$lib/components/MailList.svelte';

	let emails: Array<Email> = [
		{
			subject: 'Test',
			sender: 'test@example.com',
			content: {
				text: 'Some test mail',
				html: '<p>Some test mail</p>'
			}
		}
	];
</script>

<MailList data={emails} />
