<template>
  <div>
    <div class="container">
      <header>
        <h1 class="title">{{ title }}</h1>
      </header>
      <div class="content">
        <router-link :to="'/cats'">
          <button type="button" class="noFrame">Return to Cats</button>
        </router-link>
        <hr>
        <div class="submitted" v-show="submitted">
          Cat has been added.
        </div>
        <form v-show="!submitted">
          <div class="form-control">
            <label>Breed</label>
            <input type="text" v-model="cat.race">
          </div>
          <div class="form-control">
            <label>Hair</label>
            <input type="text" v-model="cat.fur_lenght">
          </div>
          <div class="form-control">
            <label>Color</label>
            <input type="text" v-model="cat.color">
          </div>
          <div class="form-control">
            <label>Image</label>
            <input type="text" v-model="cat.image">
          </div>
          <div class="form-control">
            <label>Info</label>
            <textarea v-model="cat.info"></textarea>
          </div>
          <button v-on:click.prevent="post" class="noFrame">Add Cat</button>
        </form>
        <button type="button" class="noFrame" v-show="submitted" v-on:click="reset">Add Another Cat</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Add New Cat',
      cat: {
        race: '',
        color: '',
        fur_lenght: '',
        image: '',
        info: '',
      },
      submitted: false
    }
  },
  methods: {
    post: function () {
      this.$http.post('https://catsanddinos-d1fa7.firebaseio.com/cats.json', this.cat).then(function(data) {
        console.log(data);
        this.submitted = true;
      })
    },
    reset () {
      this.submitted = false;
    }
  }
}
</script>

<style lang="sass" scoped>

@import 'config'

.submitted
  background: #51b36a
  border: 3px solid #4b9c23
  border-radius: 5px
  color: white
  font-size: 1.5em
  margin: 20px 0
  padding: 20px
  text-align: center
form
  margin: 40px auto
  width: 80%
  padding: 20px
  background: #f5f5f5
  border-radius: 8px
  .form-control
    label, input, textarea
      width: 100%
    input
      margin-bottom: 10px
      height: 30px
      padding-left: 20px
      border: $borderLt
      border-radius: 5px
    textarea
      height: 120px
      resize: none
      border: $borderLt
      border-radius: 5px
  button
    display: block
    margin: 20px auto
    @include transition
    &:hover
      background: #e37c11
      color: white
      border-radius: 5px
      padding: 10px 20px
</style>
