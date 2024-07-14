<script>
  import "../app.css";
  import NavHrefs from "../components/NavHrefs.svelte";
  import { slide } from "svelte/transition";
  let opened = false;
</script>

<div
  class="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[950px] m-auto px-3 sm:px-3 md:px-0 lg:px-0 flex flex-col"
>
  {#if opened}
    <aside
      class="flex flex-col md:hidden lg:hidden place-items-center gap-2 {opened
        ? 'border-b pb-2'
        : ''}"
      transition:slide
    >
      <NavHrefs bind:opened={opened}></NavHrefs>
    </aside>
  {/if}
  <button
    on:click={() => (opened = !opened)}
    class="text-gray-500 pt-2 flex grow self-center md:hidden lg:hidden"
    >Menu</button
  >

  <div
    class="flex flex-row py-3 place-content-center md:place-content-between lg:place-content-between"
  >
    <a href="/" class="flex flex-row gap-3 items-end">
      <img
        src="/housedog.png"
        class="w-9 h-9 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-11 lg:h-11"
        alt="Bouchalka"
      />
      <h1 class="text-2xl font-semibold md:text-3xl lg:text-3xl">Bouchalka</h1>
    </a>
    <nav
      class="flex-row gap-4 text-gray-500 items-center text-sm hidden md:flex lg:flex"
    >
      <NavHrefs bind:opened={opened}></NavHrefs>
    </nav>
  </div>

  <slot></slot>
</div>
