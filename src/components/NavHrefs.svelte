<script lang="ts">
  export let opened: boolean;
</script>

<a href="/about" on:click={() => (opened = false)}>O nás</a>
<a href="/dogs" on:click={() => (opened = false)}>Psi</a>
<a href="/sponsors" on:click={() => (opened = false)}>Sponzoři</a>
<a href="/contact" on:click={() => (opened = false)}>Kontakt</a>
<a href="/donate" class="hover:animate-pulse" on:click={() => (opened = false)}>
  <img src="/helpdog.png" class="w-7 h-7" alt="Bouchalka" />
</a>

<style>
  a:hover {
    color: black;
  }
  a {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity)) /* #6b7280 */;
  }
</style>
