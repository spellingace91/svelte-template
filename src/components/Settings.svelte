<script>
  import Icon from './Icon.svelte'

  export let iconSize = 16

  const url = `https://icongr.am/clarity/settings.svg?size=${iconSize}&color=currentColor`
  const altText = 'Settings'
</script>

<Icon {url} {altText} />
