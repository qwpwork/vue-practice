<template>
  <aside class="wrapper">
    <siteheader/>
    <sitenav/>
    <sitefooter/>
  </aside>
</template>

<script>
import SiteHeader from './SiteHeader'
import SiteNav from './SiteNav'
import SiteFooter from './SiteFooter'

export default {
  data() {
    return {
      windowWidth: 0,
    }
  },

  components: {
    'siteheader': SiteHeader,
    'sitenav': SiteNav,
    'sitefooter': SiteFooter
  },

  mounted() {
    this.windowWidth = document.documentElement.clientWidth;
  } 
}
</script>

<style lang="sass" scoped>
.wrapper
  background: #fff
@media (max-width: 767px)
  .wrapper
    position: fixed
    margin-bottom: 40px
@media (min-width: 768px)
  .wrapper
    margin-right: 20px
</style>

