<template>
<div class="container">
  <div class="content-wrapper">
    <Paragraph class="paragraph header_m" paragraphText="О нас"/> 
    <Paragraph class="paragraph paragraph_m" :paragraphText="aboutUsText"/>
  </div>
</div>
</template>

<script>
import Paragraph from './Paragraph'
export default {
  components: {
    Paragraph
  },
  props: ['aboutUsText']
}
</script>

<style lang="sass" scoped>
.paragraph
  display: block
  max-width: 600px
.header_m
  margin-bottom: 20px
</style>