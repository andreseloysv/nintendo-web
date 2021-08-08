<template>
  <div id="app">
    <searched-result-lists />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchedResultLists from './components/searchResults/SearchedResultLists.vue';

@Component({
  components: {
    SearchedResultLists,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 0px
</style>
