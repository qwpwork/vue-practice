<template>
  <router-link :to='linkHref'>{{linkTitle}}</router-link>
</template>

<script>
export default {
  props: ['linkHref', 'linkTitle']
}
</script>

<style lang="sass" scoped>
@font-face
  font-family: "Roboto"
  src: url("/src/fonts/Roboto-Regular.ttf")

.router-link
  font-family: Roboto, sans-serif
  text-decoration: underline
  color: #28cad5
  &_white
    color: #fff
  &_s
    font-size: 12px
  &_m
    font-size: 14px
  &_l
    font-size: 18px
</style>
