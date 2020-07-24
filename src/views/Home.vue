<template>
  <div class="home">
    <h1 class="home__title">Список заметок</h1>
    <div class="home__list">
      <Note v-for="(n, k) in allNotes" :key="k" :note="n"/>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Vuex from 'vuex'
import Note from '../components/Note.vue'

export default {
  name: "Home",
  components: {
    Note
  },
  computed: {
    ...mapGetters([
        'allNotes'
    ])
  }
}
</script>
<style>
.home {
  margin: 0 auto;
  padding: 0;
  width: 80%;

}
.home__title {
  margin: 10px;
  padding: 0;
  font-size: 32px;
  text-align: left;
  color: #765681;
}
.home__list {
  display: flex;
  flex-wrap: wrap;
}
@media screen and (max-width: 500px) {
  .home {
    width: 100%;
    margin: 0;
  }
  .home__list {
    width: 100%;
    margin: 0;
  }
}
</style>
