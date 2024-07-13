<script lang="ts">
  import type { Dog } from "$interfaces/dog";
  export let dog: Dog;
</script>

<div class="flex flex-col items-center">
  <a href="/dog/{dog.sys.id}" class="hover:opacity-60">
    <div class="aspect-square">
      <img
        src={dog.thumbnail.url}
        alt={dog.name}
        class="object-cover w-full h-full"
      />
    </div>
    <div class="flex flex-col items-center pt-1 pb-2">
      <span class="text-sm text-gray-600">{dog.name}</span>
    </div>
  </a>
</div>