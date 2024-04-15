<script lang="ts">
  import CategoryPill from './CategoryPill.svelte';
  export let categories:[string];
</script>

{#if categories}
  <aside>
    <span class="block mt-10 text-sm jetbrains-mono-light mb-2">// Tags</span>
    {#each categories as category}
    <CategoryPill href="/blog/category/{category}/" name={category} />
    {/each}
  </aside>
{/if}
