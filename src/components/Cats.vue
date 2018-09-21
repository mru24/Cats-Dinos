<template>
  <div>
    <div class="container">
      <header>
        <h1 class="title">{{ title }}</h1>
      </header>
      <div class="content">
        <button type="button" class="noFrame" @click="showToggle" v-show="!show">{{ title }} Gallery</button>
        <router-link :to="'addCat'">
          <button type="button" class="noFrame">Add Cat</button>
        </router-link>
      </div>
      <catsCat v-show="show" />
    </div>
  </div>
</template>

<script>
import catsCat from './catsCat'

export default {
  components: {
    catsCat
  },
  data () {
    return {
      title: 'Cats',
      show: false
    }
  },
  methods: {
    showToggle() {
      this.show = !this.show;
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
