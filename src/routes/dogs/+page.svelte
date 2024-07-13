<script lang="ts">
  import GridDogs from "../../components/GridDogs.svelte";
  import type { LoadResult, Dog } from "$interfaces/dog";

  export let data: LoadResult;

  function createLoadResultWithMultipleDogs(
    dog: Dog,
    count: number
  ): LoadResult {
    const dogs: Dog[] = Array.from({ length: count }, (_, index) => ({
      ...dog,
      name: `${dog.name}-${index + 1}`, // Ensuring unique names based on index
    }));

    return { dogs };
  }

  const loadResultWithMultipleDogs = createLoadResultWithMultipleDogs(
    data.dogs[0],
    10
  );
</script>

<GridDogs dogs={loadResultWithMultipleDogs.dogs}></GridDogs>
