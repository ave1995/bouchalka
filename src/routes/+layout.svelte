<script>
  import "../app.css";
</script>

<div class="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[950px] m-auto">
  <div class="flex flex-row items-center py-3 place-content-between">
    <a href="/" class="flex flex-row items-end gap-3">
      <img src="/housedog.png" class="w-11 h-11" alt="Bouchalka" />
      <h1 class="text-3xl font-semibold">Bouchalka</h1>
    </a>
    <nav class="flex flex-row gap-4 text-gray-500 items-center text-sm">
      <a href="/about">O nás</a>
      <a href="/dogs">Psi</a>
      <a href="/sponsors">Sponzoři</a>
      <a href="/contacts">Kontakty</a>
      <a href="/help" class="hover:animate-pulse">
        <img src="/helpdog.png" class="w-7 h-7" alt="Bouchalka" />
      </a>
    </nav>
  </div>

  <slot></slot>
</div>

<style>
    nav a:hover {
      color: black;
    }
  </style>