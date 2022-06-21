<script>
  import Icon from './Icon.svelte'

  export let iconSize = 16

  const url = `https://icongr.am/clarity/calendar.svg?size=${iconSize}&color=currentColor`
  const altText = 'View calendar'
</script>

<Icon {url} {altText} />
