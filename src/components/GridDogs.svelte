<script lang="ts">
  import GirdItemDog from "./GirdItemDog.svelte";
  import type { Dog } from "$interfaces/dog";

  export let dogs: Dog[];
</script>

<div
  class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-x-8 py-3"
>
  {#each dogs as dog}
    <GirdItemDog {dog} />
  {/each}
</div>

