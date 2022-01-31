<template>
  <div class="container">
    <div class="content-wrapper">
      <div v-for="linkIcon in linkIcons" :key="linkIcon.id" class="linkicon" @click="linkIconClick(linkIcon.linkIconUrl)">
        <img :src="linkIcon.linkIconImg" alt="Icon for link" class="linkicon__img">
        <Paragraph :paragraphText="linkIcon.linkIconHeader" class="linkicon__header paragraph paragraph_m paragraph_white"/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Router from 'vue-router'
import Paragraph from './Paragraph'

export default {
  components: {
    Paragraph
  },
  data () {
    return {
      linkIcons: []
    }
  },
  mounted() {
    axios.get('/src/dev-data/linkIcon.json')
      .then(response => {
        this.linkIcons = response.data.linkIcon;
      });
  },
  methods: {
    linkIconClick : (url) => {
      this.Router.push(url);
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  padding-top: 0
  padding-bottom: 0
.content-wrapper
  text-align: center
.linkicon
  display: inline-block
  background: #28cad5
  border-radius: 4px
  margin: 20px 10px
  &:hover
    cursor: pointer
  &__img
    display: block
    padding: 12px 25px 0 25px
    border-radius: 4px
  &__header
    margin: 12px auto 10px auto
    display: block

@media (max-width: 1280px)
  .linkicon
    margin: 10px
    &:first-of-type
      margin-top: 20px
    &:last-of-type
      margin-bottom: 20px
</style>
