<script lang="ts">
  import type { Dog } from "$interfaces/dog";

  export let data: Dog;
</script>

<div class="flex flex-col">
  <h1 class="text-2xl font-medium">{data.name}</h1>

  {#each data.photosCollection.items as photo}
    <img src={photo.url} alt={photo.url} />
  {/each}

  <a href="/dogs" class="text-sm">Zpět na psy</a>
</div>
