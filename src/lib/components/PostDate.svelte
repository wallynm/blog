<script lang="ts">
	export let date: string;
	export let prefix = '';

	const formatter = new Intl.DateTimeFormat('pt-BR', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});

	// Dates in frontmatter are plain YYYY-MM-DD. Parsing that with `new Date()`
	// treats it as UTC midnight, which renders as the previous day in Brazil,
	// so build the date from its parts instead.
	$: parts = String(date).split('-').map(Number);
	$: parsed = new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
	$: valid = !Number.isNaN(parsed.getTime());
</script>

{#if valid}
	<time datetime={date} class="{$$restProps.class || ''}">
		{prefix}{formatter.format(parsed)}
	</time>
{/if}
