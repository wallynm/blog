<script lang="ts">
	export let name: string;
	export let href: string;
</script>

{#if name}
	<a
		{href}
		class="inline-flex items-center rounded-full border border-border px-2.5 py-0.5
			font-mono text-xs text-faint no-underline transition-colors
			hover:border-accent hover:text-accent"
	>
		{name}
	</a>
{/if}
