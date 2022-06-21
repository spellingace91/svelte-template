<script>
  import CardView from '../components/CardView.svelte'
  import CalendarView from '../components/CalendarView.svelte'
  import StatisticsView from '../components/StatisticsView.svelte'
  import Settings from '../components/Settings.svelte'

  const iconSize = 24
</script>

<nav class="flex gap-2">
  <CardView {iconSize} />
  <CalendarView {iconSize} />
  <StatisticsView {iconSize} />
  <Settings {iconSize} />
</nav>
