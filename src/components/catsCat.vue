<template>
  <div>
    <div class="container">
      <header>
        <h1 class="title">{{ title }}</h1>
      </header>
      <div class="content">
        <article v-for="(cat, index) in cats" :key="index">

          <div class="info">
            <h3 class="title">{{ cat.race }}</h3>
            <p><span>Color: </span>{{ cat.color }}</p>
            <p><span>Hair: </span>{{ cat.fur_lenght }}</p>
          </div>

          <img :src="'static/img/' + cat.image + '.jpg'" :alt="'Image: ' + cat.image">

        </article>
      </div>
    </div>
  </div>
</template>

<script>
// import db from '../main'

export default {
  data () {
    return {
      title: 'Cats Gallery',
      cats: []
    }
  },
  created () {
    this.$http.get('https://catsanddinos-d1fa7.firebaseio.com/cats.json').then(function(data) {
      return data.json();
    }).then(function(data) {
      var catsArray = [];
      for(let key in data) {
        data[key].id = key;
        catsArray.push(data[key]);
      }
      this.cats = catsArray;
    })
  }
}
</script>

<style lang="sass" scoped>

@import 'config'

.content
  display: flex
  flex-direction: row
  flex-wrap: wrap
  article
    display: grid
    grid-template-columns: 60% 40%
    align-items: center
    width: 100%
    margin-bottom: 15px
    cursor: pointer
    .info
      height: 100%
      padding: 30px
      color: #52280d
      background: rgba(#12edb2, 0.38)
      @include transition
      p
        margin-top: 10px
        text-transform: capitalize
        span
          font-weight: bold
    img
      display: block
      width: 100%


</style>
