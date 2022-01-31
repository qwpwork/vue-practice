<template>
  <div class="wrapper">
    <sitehat/>
    <div class="content-wrapper">
      <div class="">
        <paragraph class="paragraph header_m url-title" paragraphText="Хранилище образцов"/>
      </div>
    </div>
    <div class="cards-container" v-for="listItem in listItems" :key="listItem.id">
      <card :cardImg="listItem.cardImg" :cardTitle="listItem.cardTitle" :cardText="listItem.cardText"/>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

import SiteHat from './SiteHat'
import Card from './Card'
import Paragraph from './Paragraph'
export default {
  components: {
    'card': Card,
    'sitehat': SiteHat,
    'paragraph': Paragraph
  },
  data() {
    return {
      listItems: []
    }
  },
  mounted() {
    axios.get('/src/dev-data/sampleStorage.json')
      .then(response => {
          this.listItems = response.data.sampleStorage; 
      });
  }
}
</script>
