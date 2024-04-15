<script lang="ts">
  import { getColorBasedIntoLength, getBackgroundBasedIntoLength } from '$lib/utils/categoryClassName';
  export let name: string;
  export let href: string;
  
</script>

{#if name}
  <a href={href} class="no-underline hover:underline jetbrains-mono-bold">
    <span class="text-xl font-md me-2 px-2.5 py-0.5 {getColorBasedIntoLength(name)} {getBackgroundBasedIntoLength(name)}">{name}</span>
  </a>
{/if}