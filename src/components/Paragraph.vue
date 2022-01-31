<template>
  <span>{{paragraphText}}</span>
</template>

<script>
export default {
  props: ['paragraphText']
}
</script>

<style lang="sass" scoped>
@font-face
  font-family: "Roboto"
  src: url("/src/fonts/Roboto-Regular.ttf")

.paragraph 
  font-family: Roboto, sans-serif
  color: #4a4a4a
  &_s 
    font-size: 12px
  &_m
    font-size: 14px
  &_l
    font-size: 18px
  &_white
    color: #fff

.header
  &_s
    font-size: 20px
  &_m
    font-size: 24px
  &_l
    font-size: 28px

.paragraph, .header
  &_accent
    color: #28cad5
@media (max-width: 767px)
  .url-title
    padding-top: 70px
    padding-bottom: 30px
    display: block
</style>
