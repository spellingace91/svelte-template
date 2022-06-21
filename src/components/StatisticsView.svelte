<script>
  import Icon from './Icon.svelte'

  export let iconSize = 16

  const url = `https://icongr.am/clarity/analytics.svg?size=${iconSize}&color=currentColor`
  const altText = 'Statistics view'
</script>

<Icon {url} {altText} />
