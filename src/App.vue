<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
body
  background: #f2f2f2
  padding-bottom: 20px
.container
  background: #fff
  border-radius: 4px

@media (max-width: 767px)
  .container
    padding: 20px 0
  .content-wrapper
    &:first-of-type
      padding-left: 20px
      background: #fff
      border-radius: 4px
@media (min-width: 768px)
  aside.wrapper
    height: 100vh
    width: 270px
    position: fixed
    top: 0
    left: 0

  .container
    vertical-align: top
    display: block
    width: calc(100% - 350px)
    margin-top: 20px
    padding: 20px
    margin-left: 290px

  aside.wrapper .content-wrapper
    display: inline-block
</style>

