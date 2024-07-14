<script lang="ts">
  import type { SponsorResult } from "$interfaces/sponsor";

  export let data: SponsorResult;
</script>

<div class="grid grid-cols-3 py-3">
  {#each data.sponsors as sponsor}
    <div class="grid grid-rows-2 items-center">
      {#if sponsor.thumbnail.url}
        <img src={sponsor.thumbnail.url} alt={sponsor.name} class="w-20" />
      {:else}
        <p>{sponsor.name}</p>
      {/if}
      <p class="text-gray-600 text-sm">{sponsor.description}</p>
    </div>
  {/each}
</div>
