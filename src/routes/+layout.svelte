<script>
  import "../app.css";
</script>

<div class="flex flex-row items-center py-3 place-content-between px-16 border-b">
  <nav class="flex flex-row gap-3">
    <a href="/">Domů</a>
    <a href="/about">O nás</a>
    <a href="/contacts">Kontakty</a>
  </nav>
  <img src="/icon.png" class="w-9 h-9" alt="Bouchalka"/>
  <nav class="flex flex-row gap-3">
    <a href="/">Domů</a>
    <a href="/about">O nás</a>
    <a href="/contacts">Kontakty</a>
  </nav>
</div>

<slot></slot>

