<template>
  <div class="wrapper">
    <sitehat/>
    <div class="content-wrapper">
      <div class="">
        <paragraph class="paragraph header_m url-title" paragraphText="Публикации о музее"/>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="list-wrapper container">
        <list/>
      </div>      
    </div>
  </div>
</template>
<script>
import SiteHat from './SiteHat'
import List from './List'
import Paragraph from './Paragraph'
export default {
  components: {
    'list': List,
    'sitehat': SiteHat,
    'paragraph': Paragraph
  }
}
</script>
<style lang="sass" scoped>
  .list-wrapper
    margin-top: 20px
</style>