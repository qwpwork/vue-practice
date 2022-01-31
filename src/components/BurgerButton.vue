<template>
  <button class="burger-button" @click="handleClick"></button>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="sass" scoped>
.burger-button 
  outline: none
  background: transparent
  border: 0
  transform: rotate(90deg)
  color: #28cad5
  font-size: 20px
  width: 40px
  height: 40px
  text-align: center
  vertical-align: middle
  padding: 0
  &:after
    content: '|||'
  &:hover
    cursor: pointer
</style>
