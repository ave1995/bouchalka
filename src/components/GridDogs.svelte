<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import type { Dog } from "../routes/+page.server";
  import GirdItemDog from "./GirdItemDog.svelte";
  import { onMount } from "svelte";

  export let dogs: Dog[];

  // Constants for pagination
  const ITEMS_PER_PAGE = 3;
  // State for pagination
  const currentPage: Writable<number> = writable(1);

  // Derived computed properties
  $: startIndex = ($currentPage - 1) * ITEMS_PER_PAGE;
  $: endIndex = startIndex + ITEMS_PER_PAGE;
  $: dogsToShow = dogs.slice(startIndex, endIndex);

  // Function to handle page change
  function goToPage(page: number) {
    currentPage.set(page);
  }

  // Reset current page on component mount
  onMount(() => {
    currentPage.set(1);
  });
</script>

<div
  class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-1 py-4 px-20"
>
  {#each dogsToShow as dog}
    <GirdItemDog {dog} />
  {/each}
</div>


<!-- Pagination controls -->
{#if dogs.length > ITEMS_PER_PAGE}
  <div class="flex justify-center mt-4">
    {#each Array.from({ length: Math.ceil(dogs.length / ITEMS_PER_PAGE) }) as _, index}
      <button
        class="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
        class:selected={$currentPage === index + 1}
        on:click={() => goToPage(index + 1)}
      >
        {index + 1}
      </button>
    {/each}
  </div>
{/if}