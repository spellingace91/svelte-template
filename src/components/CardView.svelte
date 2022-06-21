<script>
  import Icon from './Icon.svelte'

  export let iconSize = 16

  const url = `https://icongr.am/clarity/grid-view.svg?size=${iconSize}&color=currentColor`
  const altText = 'View cards'
</script>

<Icon {url} {altText} />
