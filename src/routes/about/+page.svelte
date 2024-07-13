<script>
  import BiggerPicture from "bigger-picture";

  // import style
  import "bigger-picture/css";
  import { onMount } from "svelte";

  let items = [
    {
      img: "https://assets.henrygd.me/bp/images/janko-ferlic-SDivo1PTBDs-unsplash_1800.jpg 1800w, https://assets.henrygd.me/bp/images/janko-ferlic-SDivo1PTBDs-unsplash.jpg 3000w",
      height: "2000",
      width: "3000",
      alt: "wildlife photography of brown bear cub",
    },
    {
      img: "https://assets.henrygd.me/bp/images/corey-agopian-5y4ljzRrDFA-unsplash_1800.jpg 1800w, https://assets.henrygd.me/bp/images/corey-agopian-5y4ljzRrDFA-unsplash.jpg 3000w",
      height: "2000",
      width: "3000",
      alt: "palm trees under clear blue sky",
    },
    {
      img: "https://assets.henrygd.me/bp/images/andrew-svk-REwZEYzw19g-unsplash_1800.jpg 1800w, https://assets.henrygd.me/bp/images/andrew-svk-REwZEYzw19g-unsplash.jpg 3000w",
      height: "2000",
      width: "3000",
      alt: "people stand under unique trees on socotra",
    },
  ];

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

<div id="inline" class="inline-gallery"></div>

<style>
  .inline-gallery {
    position: relative;
    background: #222;
    overflow: hidden;
  }
  .inline-gallery:before {
    content: "";
    padding-bottom: 66.66%;
    display: block;
  }
</style>
