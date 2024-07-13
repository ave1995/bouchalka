<script>
  import { onMount } from "svelte";
  import BiggerPicture from "bigger-picture";
  import "bigger-picture/css";

  export let data;

  let items = data.photosCollection.items.map((photo) => {
    return { img: photo.url, width: photo.width, height: photo.height };
  });

  onMount(() => {
    // initialize BiggerPicture
    let bp = BiggerPicture({
      // @ts-ignore
      target: document.getElementById("inline"),
    });

    // open inline gallery
    bp.open({
      items,
      scale: 1,
      intro: "fadeup",
      noClose: true,
      inline: true,
      maxZoom: 3,
    });
  });
</script>

<div class="flex flex-col gap-2">
  <div id="inline" class="inline-gallery"></div>
  <h1 class="text-2xl font-medium">{data.name}</h1>
  <p class="text-sm text-gray-600">{data.description}</p>
<a href="/dogs" class="text-sm pt-6">← Zpět na psy</a>
</div>

<style>
  .inline-gallery {
    position: relative;
    background: #222;
    overflow: hidden;
    object-fit: cover;
  }
  .inline-gallery:before {
    content: "";
    padding-bottom: 66.66%;
    display: block;
  }
</style>
