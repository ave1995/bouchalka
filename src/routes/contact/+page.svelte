<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import SocialHrefs from "../../components/SocialHrefs.svelte";

  // Create writable stores for width and height
  const iframeWidth = writable(800);
  const iframeHeight = writable(600);

  // Function to update iframe dimensions
  function updateIframeDimensions() {
    const parentElement = document.getElementById("iframe-container");
    if (parentElement) {
      const parentWidth = parentElement.clientWidth;
      iframeWidth.set(parentWidth);
      iframeHeight.set(window.innerHeight * 0.5); // Adjust the aspect ratio as needed
    }
  }

  // Update dimensions on mount and on window resize
  onMount(() => {
    updateIframeDimensions();
    window.addEventListener("resize", updateIframeDimensions);
    return () => window.removeEventListener("resize", updateIframeDimensions);
  });
</script>

<div id="iframe-container">
  <iframe
    title="bouchalka"
    style="border:none"
    src="https://frame.mapy.cz/s/nutolomamu"
    width={$iframeWidth}
    height={$iframeHeight}
    frameborder="0"
  ></iframe>
</div>
<div class="pt-6">
  <div class="text-sm text-gray-600 flex flex-col w-full items-end gap-6">
    <SocialHrefs/>
    <div class="flex flex-col items-end">
      <p>Psí Útulek Bouchalka</p>
      <p>Na Bouchalce 398</p>
      <p>Buštěhrad</p>
      <p>273 43</p>
    </div>
  </div>
</div>
