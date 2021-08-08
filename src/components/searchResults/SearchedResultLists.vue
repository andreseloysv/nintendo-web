<template>
  <div>
    <HorizontalList v-for="resultList in this.resultLists" :key="resultList.title" :title="resultList.title"
      :items="resultList.items" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import HorizontalList from '../atoms/HorizontalList.vue';
import { SearchedResultController } from './SearchResultController';
import { ResultList } from './ResultList';

@Component({
  components: {
    HorizontalList,
  },
})
export default class SearchedResultLists extends Vue {
  @Prop({ type: String }) private searchTerm: string;
  searchedResultController: SearchedResultController = new SearchedResultController();
  private get resultLists(): ResultList[] {
    return this.searchedResultController.search(this.searchTerm);
  }
}
</script>

<style scoped lang="stylus"></style>
