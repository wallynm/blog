<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let eyebrow: string = '';
</script>

<div class="mb-10 max-w-content">
	{#if eyebrow}
		<p class="mb-2 font-mono text-xs uppercase tracking-wider text-accent">{eyebrow}</p>
	{/if}
	<h1 class="text-3xl sm:text-4xl">{title}</h1>
	{#if subtitle}
		<p class="mt-3 text-base text-muted">{subtitle}</p>
	{/if}
</div>
