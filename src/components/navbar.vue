<template>
  <div>
    <div class="navTrigger" @click="toggleClass">
      <div class="icon" v-bind:class="{active: isActive}">
        <div class="hamburger"></div>
      </div>
    </div>
    <div class="navbar" v-bind:class="{hidden: !isActive}">
      <router-link :to="'/'">
        <div class="navItem" @click="toggleClass">Home</div>
      </router-link>
      <router-link :to="'/cats'">
        <div class="navItem" @click="toggleClass">Cats</div>
      </router-link>
      <router-link :to="'/dinos'">
        <div class="navItem" @click="toggleClass">Dinos</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">

@import 'config'

.navbar
  position: fixed
  z-index: 999
  top: 0
  left: 15%
  width: 70%
  background: rgba(#2266cb, 0.8)
  @include transition
  .navItem
    width: 100%
    text-align: center
    padding: 40px
    color: #e5e5e5
    font-size: 24px
    @include transition
    &:hover
      color: white
.hidden
  top: -100%

.navTrigger
  $barBackground: #666
  position: fixed
  z-index: 9999
  top: 20px
  right: 20px
  width: 60px
  height: 50px
  cursor: pointer
  .icon
    width: 100%
    height: 100%
    background: transparent
    position: relative
    .hamburger
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
      width: 100%
      height: 7px
      background: $barBackground
      @include transition
    .hamburger::before, .hamburger::after
      content: ''
      position: absolute
      width: 100%
      height: 7px
      background: $barBackground
      @include transition
    .hamburger::before
      top: -15px
    .hamburger::after
      top: 15px
  .active
    .hamburger
      background: transparent
      border: none
    .hamburger::after
      top: 0
      transform: rotate(225deg)
      background: red
    .hamburger::before
      top: 0
      transform: rotate(-45deg)
      background: red



</style>
