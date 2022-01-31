<template>
  <div class="wrapper">
    <SiteHat/>
    <SiteBanner :bannerText="bannerText" :bannerImg="bannerImg"/>    
    <AboutUs :aboutUsText="aboutUsText"/>
    <LinkWithIcon/>
  </div>
</template>
<script>
import axios from 'axios'

import SiteHat from './SiteHat'
import SiteBanner from './SiteBanner'
import AboutUs from './AboutUs'
import LinkWithIcon from './LinkWithIcon'

export default {
  components: {
    SiteHat,
    SiteBanner,
    AboutUs,
    LinkWithIcon
  },
  data() {
    return {
      bannerText: '',
      bannerImg: '',
      aboutUsText: ''
    }
  },
  mounted() {
    axios.get('/src/dev-data/banner.json')
      .then(response => {
          this.bannerText = response.data.bannerText;
          this.bannerImg = response.data.bannerImg;
      });
    axios.get('/src/dev-data/contacts.json')
      .then(response => {
        this.aboutUsText = response.data.aboutUsText;
      });
  }
}
</script>
<style lang="sass" scoped>
  .list-wrapper
    margin-top: 20px
  .container
    margin-bottom: 20px
</style>