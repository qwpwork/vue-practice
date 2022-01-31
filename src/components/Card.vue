<!-- 
  For alignment a content in block
  u must import this component and wrap this into the div.cards-container
-->
<template>
  <div class="content-wrapper">
    <div class="container">
      <div class="cards-wrapper">
        <div class="card">
          <img class="card__img" :src="cardImg" alt="card image">
          <div class="card__text-wrapper">
            <paragraph :paragraphText="cardTitle" class="card__title paragraph header_m"/>
            <paragraph :paragraphText="cardText" class="card__text paragraph paragraph_m"/>
          </div>
        </div>
      </div>
    </div>
  </div>    
</template>

<script>
import axios from 'axios'

import Paragraph from './Paragraph'

export default {
  props: ['cardTitle', 'cardText', 'cardImg'],
  components: {
    'paragraph': Paragraph
  }
}
</script>

<style lang="sass" scoped>
.card
  padding: 0
  width: auto
  &__img
    border-radius: 4px
    max-width: 426px
  &__title
    margin-bottom: 10px
  &__text-wrapper
    display: inline-block
    vertical-align: top
  &__title, &__text
    display: block
  
@media (max-width: 767px)
  .container
    margin: 0
    padding: 0
  .card
    margin: 20px 0
@media (min-width: 767px) and (max-width: 795px)
  .card
    img.card__img
      width: 390px
      
@media (max-width: 1279px)
  .card
    &__img
      max-width: 426px
      display: block
      margin: 0 auto
      padding: 20px 0
    &__text-wrapper
      display: block
      margin: auto
      max-width: 426px
      padding-bottom: 20px      

@media (min-width: 1280px)
  .card
    max-width: 900px
    &__text-wrapper
      max-width: calc(100% - 475px)
@media (max-width: 767px)
  .card
    &__img
      margin: 0 auto
      padding: 20px 0
</style>
<style lang="sass">
@media (min-width: 1280px)
  .cards-container
    .card
      min-height: 244px
      margin: auto
    &:nth-child(odd)
      .card
        &__img
          float: none
        &__text-wrapper
          float: right
    &:nth-child(even)
      .card
        &__img
          float: right
</style>