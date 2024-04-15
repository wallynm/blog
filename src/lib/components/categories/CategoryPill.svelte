<script lang="ts">
  import { getColorBasedIntoLength, getBackgroundBasedIntoLength } from '$lib/utils/categoryClassName';
  export let name: string;
  export let href: string;
  
</script>

{#if name}
  <a href={href}>
    <span class="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full {getColorBasedIntoLength(name)} {getBackgroundBasedIntoLength(name)}">{name}</span>
  </a>
{/if}