<template>
<div class="container">
  <div class="content-wrapper">
    <div class="banner">
      <img :src="bannerImg" alt="Баннер главной страницы" class="banner__img">
      <Paragraph :paragraphText="bannerText" class="banner__text paragraph header_l"/>
    </div>
  </div>
</div>
</template>
<script>
import Paragraph from './Paragraph'
export default {
  props: ['bannerText', 'bannerImg'],
  components: {
    Paragraph
  }
}
</script>
<style lang="sass" scoped>
.banner
  position: relative
  &__img
    width: 100%
    display: block
    
  &__text
    position: absolute
    left: 50%
    top: 50%
    transform: translateX(-50%) translateY(-50%)
@media (max-width: 767px)
  .content-wrapper
    margin-top: 40px
  .banner
    &__img
      max-width: 97%
</style>