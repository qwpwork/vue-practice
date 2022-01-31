<template>
  <div class="wrapper">
    <sitehat/>
    <div class="content-wrapper">
      <div class="container">
        <paragraph class="paragraph header_l paragraph_mo" paragraphText="Components page"/>
        <div class="paragraph-wrapper">
          <paragraph class="paragraph paragraph_s" paragraphText="Small text"/>
          <paragraph class="paragraph paragraph_m" paragraphText="Regular text"/>
          <paragraph class="paragraph paragraph_l" paragraphText="Large text"/>
        </div>
        <div class="router-link-wrapper">
          <routerlink class="router-link router-link_s" linkHref="/" linkTitle="Small link"/>
          <routerlink class="router-link router-link_m" linkHref="/" linkTitle="Regular link"/>
          <routerlink class="router-link router-link_l" linkHref="/" linkTitle="Large link"/>
        </div>
        <div class="heading-wrapper">
          <paragraph class="paragraph header_s" paragraphText="Small header"/>
          <paragraph class="paragraph header_m" paragraphText="Regular header"/>
          <paragraph class="paragraph header_l" paragraphText="Large header"/>
        </div>
        <div class="paragraph-wrapper">
          <LinkWithIcon/>
        </div>
        <div class="burger-button-wrapper">
          <burgerbutton/>
        </div>
        <div class="paragraph-wrapper">
          <list/>
        </div>
      </div>
    </div>
    <div class="cards-container" v-for="listItem in listItems" :key="listItem.id">
      <card :cardImg="listItem.cardImg" :cardTitle="listItem.cardTitle" :cardText="listItem.cardText"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import List from './List'
import DevNav from './DevNav'
import SiteHat from './SiteHat'
import BurgerButton from './BurgerButton'
import RouterLink from './RouterLink'
import Paragraph from './Paragraph'
import Card from './Card'
import LinkWithIcon from './LinkWithIcon'

export default {
  components: {
    'list': List,
    'card': Card,
    'sitehat': SiteHat,
    'burgerbutton': BurgerButton,
    'devnav': DevNav,
    'routerlink': RouterLink,
    'paragraph': Paragraph,
    LinkWithIcon
  },
  data() {
    return {
      listItems: []
    }
  },
  mounted() {
    axios.get('/src/dev-data/exposition.json')
      .then(response => {
          this.listItems = response.data.exposition; 
      });
  }
}
</script>

<style lang="sass" scoped>
.paragraph, .router-link
  display: block
  margin-top: 10px
  margin-bottom: 0
  
.paragraph_mo
  margin-top: 0
</style>
