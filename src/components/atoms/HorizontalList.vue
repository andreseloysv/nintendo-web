<template>
  <div class="horizontal-list">
    <h3 class="result-group-headline"><a href="#">{{ title }}</a></h3>
    <NintendoSwiperSlide :items="this.items" v-slot="{ item, index }" :slides-per-view="6" :space-between="10" :slides-per-group="2">
      <HorizontalListItem :item="item" :index="index" />
    </NintendoSwiperSlide>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from '../searchResults/ResultList';
import NintendoSwiperSlide from './NintendoSwiperSlide.vue';
import HorizontalListItem from './HorizontalListItem.vue';

@Component({
  name: 'HorizontalList',
  components: {
    NintendoSwiperSlide,
    HorizontalListItem,
  },
})
export default class HorizontalList extends Vue {
  @Prop() private title!: string;
  @Prop() private items: Item[];
}
</script>

<style scoped lang="stylus">
.result-group-headline
  margin 0

h3.result-group-headline
  margin-left 20px
  text-align left
  font-weight 900

  a
    color #333

.horizontal-list
  background #f4f4f4
  padding 0px 20px 0px 0px
  margin-bottom 0px
  border-radius 16px

  &:first-child
    padding 20px 20px 0px 0px
</style>
