<script lang="ts">
  export let categories:[string];
</script>

{#if categories}
  <ul class="{$$restProps.class || ''} flex md:inline-flex list-disc">
    {#each categories as category}
      <li class="mx-3">
        <a class="hover:underline" href="/blog/category/{category}/">
          {category}
        </a>
      </li>
    {/each}
  </ul>
{/if}