<script>
  import ActivityCard from '../components/ActivityCard.svelte'
  import { activities } from '../stores/activities'
</script>

<div class="flex flex-row flex-wrap gap-8">
  {#each $activities as activity}
    <ActivityCard {...activity} />
  {/each}
</div>
