<template>
  <footer id="siteFooter" class="footer">
    <div class="row">
      <paragraph class="paragraph paragraph_s paragraph_white" :paragraphText="`г. ${city},`"/>
      <paragraph class="paragraph paragraph_s paragraph_white" :paragraphText="postcode"/>
    </div>
    <div class="row">
      <paragraph class="paragraph paragraph_s paragraph_white" :paragraphText="address"/>
    </div>
    <div class="row">
      <paragraph class="paragraph paragraph_s paragraph_white" paragraphText="Телефон: "/>
      <a class="router-link router-link_s router-link_white" :href="`tel:${phoneurl}`">{{phone}}</a>
    </div>
    <div class="row">
      <paragraph class="paragraph paragraph_s paragraph_white" paragraphText="E-Mail: "/>
      <a class="router-link router-link_s router-link_white" :href="`mailto:${mail}`">{{mail}}</a>
    </div>    
  </footer>
</template>

<script>
import axios from 'axios'

import Paragraph from './Paragraph'
import RouterLink from './RouterLink'
export default {
  data() {
    return {
      city: 'Город',
      postcode: '999999',
      address: 'Адрес',
      phone: '89001112233',
      phoneurl: '#',
      mail: 'test@test.com'
    }
  },

  components: {
    'paragraph': Paragraph
  },
  
  mounted() {
    axios.get('/src/dev-data/contacts.json')
      .then(response => {
          this.city = response.data.cityInfo; 
          this.postcode = response.data.postcodeInfo; 
          this.address = response.data.addressInfo; 
          this.phone = response.data.phoneInfo; 
          this.phoneurl = response.data.phoneLink;
          this.mail = response.data.mailInfo; 
      });
  }
}
</script>

<style lang="sass" scoped>
@font-face
  font-family: "Roboto"
  src: url("/src/fonts/Roboto-Regular.ttf")

.footer
  background: #28CAD5
  color: #fff
  position: absolute
  left: 0
  bottom: 0
  display: block
  padding: 10px 20px

.router-link
  font-family: Roboto, sans-serif
  text-decoration: underline
  color: #28cad5
  &_white
    color: #fff
  &_s
    font-size: 12px

@media (max-width: 767px)
  .footer
    width: calc(100vw - 40px)
    margin-bottom: 15px
    display: none
    &_active
      display: block

@media (min-width: 768px)
  .footer
    width: 230px
</style>
