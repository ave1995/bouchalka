<script lang="ts">
  import type { Dog } from "../routes/+page.server";

    export let dog : Dog;
</script>

<div class="flex flex-col items-center">
  <div
    class="rounded-lg bg-gradient-to-t from-green-300 via-green-100 to-white py-3"
  >
    <img
      src={dog.thumbnail.url}
      alt={dog.name}
      class="object-cover rounded-full w-56 h-56 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-72 lg:h-72"
    />

    <div class="flex flex-col items-center">
      <span class="text-xl md:text-2xl lg:text-3xl font-bold">{dog.name}</span>
      <button
        class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >Zjisti více</button
      >
    </div>
  </div>
</div>
