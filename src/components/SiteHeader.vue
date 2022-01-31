<template>
  <header class="site-hat">
    <burgerbtn id="burgerBtn" class="site-hat__burgerbtn" @click="burgerBtnToggle"/>
    <paragraph class="site-hat__title paragraph header_l" paragraphText="Музей нефти"/>
    <img class="site-hat__logo" :src="headerLogo" alt="Site-logo">
  </header>
</template>

<script>
import axios from 'axios'

import { burgerBtnActions } from '../helpers/burgermenu'

import BurgerButton from './BurgerButton'
import Paragraph from './Paragraph'
export default {
  components: {
    'burgerbtn': BurgerButton,
    'paragraph': Paragraph,
  },
  
  data() {
    return {
      headerLogo: '',
      test: ''
    }
  },

  mounted() {
    axios.get('/src/dev-data/DevNav.json')
      .then(response => {
          this.headerLogo = response.data.headerLogo; 
      });
  },

  methods: {
    burgerBtnToggle() {
      burgerBtnActions();
    }
  }
}
</script>

<style lang="sass" scoped>
@media (max-width: 767px)
  .site-hat 
    background: #f2f2f2
    text-align: center
    border-bottom: 2px solid #28cad5
    max-width: 100vw
    position: relative
    width: 100vw
    &__burgerbtn
      margin-top: -10px
      position: absolute
      left: 10px
      top: 25%
    &__title
      display: inline-block
      padding-top: 5px
      margin-bottom: 3px
    &__logo
      display: none

@media (min-width: 768px)
  .site-hat
    width: 270px
    display: inline-block
    &__burgerbtn, &__title
      display: none
    &__logo
      margin: 40px 20px 24px
      display: block
      border-radius: 4px
</style>