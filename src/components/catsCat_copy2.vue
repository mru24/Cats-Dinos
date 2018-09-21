<template>
  <div>
    <div class="container">
      <header>
        <h1 class="title">{{ title }}</h1>
      </header>
      <div class="content">
        <article v-for="(cat, index) in cats" :key="index" @click="openModal(cat.id)">

          <div class="info" v-show="showInfo">
            <h3 class="title">{{ cat.race }}</h3>
            <p><span>Color: </span>{{ cat.color }}</p>
            <p><span>Hair: </span>{{ cat.fur_lenght }}</p>
          </div>

          <img :src="'static/img/' + cat.image + '.jpg'" :alt="'Image: ' + cat.image">

        </article>
      </div>
    </div>

    <div class="modal" v-show="showModal">
      <div class="modalHeader">
        <h1></h1>
      </div>
      <div class="modalContent">
        <h1>{{ cat.race }}</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="modalFooter" @click="closeModal">
        x
      </div>

    </div>
  </div>
</template>

<script>
import db from '../main'

export default {
  data () {
    return {
      title: 'Cats Gallery',
      cats: [],
      cat: '',
      race: '',
      color: '',
      showInfo: true,
      showModal: false
    }
  },
  created () {
    db.collection('cats').get().then
    (querySnapshot => {
      querySnapshot.forEach(doc => {
        const cats = {
          'id': doc.id,
          'race': doc.data().race,
          'color': doc.data().color,
          'fur_lenght': doc.data().fur_lenght,
          'image': doc.data().image
        }
        this.cats.push(cats)
      })
    })
  },
  methods: {
    openModal(id) {
      this.showModal = true;
      console.log(id);
      var data = db.collection('cats').where('id', '==', id).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc => {
            const cat = {
              'id': doc.id,
              'race': doc.data().race,
              'color': doc.data().color,
              'fur_lenght': doc.data().fur_lenght,
              'image': doc.data().image
            }
            this.cat.push(cat)
          })
        }
      );
    },
    closeModal() {
      this.showModal = false;
    }
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
    margin-bottom: 5px
    cursor: pointer
    .info
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


.modal
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(#222, 0.9)
  color: #f5f5f5
  padding: 20% 10%
  .modalContent
    line-height: 1.5
    letter-spacing: 1px
  .modalFooter
    margin-top: 30px
    text-align: right
    font-size: 46px
    font-weight: bolder
    color: #c60000
    cursor: pointer


</style>
