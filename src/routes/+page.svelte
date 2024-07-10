<script lang="ts">
  export let data: any;

  console.log(data);
</script>

{#each data.dogs as dog}
  <p>{dog.name}</p>
  <p>{dog.description}</p>
  <img src={dog.thumbnail.url} alt={dog.name} />
{/each}
