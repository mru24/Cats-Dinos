<template>
  <div>
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: '',
  components: {
    navbar
  }
}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css?family=Montserrat')

@import './components/config'

*
  margin: 0
  padding: 0
  box-sizing: border-box
body, html
  height: 100%
body
  font-family: 'Montserrat', sans-serif
a, a:visited, a:active
  text-decoration: none
  color: inherit
  transition: .3s
ul
  list-style: none
.container
  width: 80%
  margin: 20px auto
  padding: 10px
  animation: fadeIn 2s
.title
  // border-bottom: $borderLt
header
  margin-bottom: 80px

button.noFrame
  background: none
  border: none
  border-bottom: $borderLt
  font-size: 1.2em
  letter-spacing: 2px
  outline-style: none
  cursor: pointer



@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1

</style>
