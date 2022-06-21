<script>
  import ActivityCardContainer from './containers/ActivityCardContainer.svelte'
  import Toolbar from './containers/Toolbar.svelte'
</script>

<style>
  main {
    background-color: #f9ecdd;
    color: #273134;
  }
</style>

<main class="p-12 h-full">
  <Toolbar />
  <ActivityCardContainer />
</main>
