<template>
  <nav id="siteNav" class="site-nav">
    <ul class="site-nav__menu">
      <li v-for="menuItem in menuItems" :key="menuItem.id">
        <routerlink class="router-link router-link_l" :linkHref="menuItem.linkHref" :linkTitle="menuItem.linkTitle"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios'
import RouterLink from './RouterLink'

export default {
  data() {
    return {
      menuItems: []
    }
  },

  components: {
    'routerlink': RouterLink,
  },

  mounted() {
    axios.get('/src/dev-data/DevNav.json')
      .then(response => {
          this.menuItems = response.data.headerMenu; 
      });
  } 
}
</script>

<style lang="sass" scoped>
.site-nav
  &__menu
    list-style: none
    padding-left: 0
    margin-top: 0
  .router-link
    display: block
    padding-top: 10px
    padding-bottom: 10px
    padding-left: 20px

@media (max-width: 767px)
  .site-nav
    display: none
    &_active
      height: calc(100vh - 62px)
    &__menu
      width: 100vw
      margin-top: 20px
    &_active
      display: block
      
</style>