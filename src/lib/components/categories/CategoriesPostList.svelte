<script lang="ts">
  import CategoryPill from './CategoryPill.svelte';
  export let categories:[string];
</script>

{#if categories}
  <aside>
    <h2>Related categories</h2>
      {#each categories as category}
        <CategoryPill href="/blog/category/{category}/" name={category} />
      {/each}
  </aside>
{/if}
