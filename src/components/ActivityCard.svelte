<script>
  export let title = ''
  export let location = ''
</script>

<div
  class="bg-white border border-black p-8 cursor-pointer transform transition duration-200 ease hover:scale-105"
>
  <h2>{title}</h2>
  {#each location as location}
    <p>{location}</p>
  {/each}
</div>
