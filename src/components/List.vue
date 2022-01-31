<template>
  <div class="list">
    <paragraph v-for="listItem in listItems" :key="listItem.id" class="list__item paragraph paragraph_m" :paragraphText="listItem.value"/>
  </div>
</template>

<script>
import axios from 'axios'

import Paragraph from './Paragraph'

export default {
  data(){
    return {
      listItems: []
    }
  },
  components: {
    'paragraph': Paragraph
  },
  mounted() {
    axios.get('/src/dev-data/list.json')
      .then(response => {
          this.listItems = response.data.publications; 
      });
  }
}
</script>

<style lang="sass" scoped>
.list__item
  display: block
  padding: 10px 20px
  &:nth-child(odd)
    background-color: #f2f2f2
  &:nth-child(even)
    background-color: #fff
</style>