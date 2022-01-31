<template>
  <nav>
    <router-link v-for="menuItem in menuItems" :key="menuItem.id" :to='menuItem.linkHref'>
      {{menuItem.linkTitle}}
    </router-link>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return { 
      menuItems: []
    }
  },
  
  mounted() {
    axios.get('/src/dev-data/DevNav.json')
      .then(response => {
          this.menuItems = response.data.headerMenu; 
      });
  }
}
</script>
