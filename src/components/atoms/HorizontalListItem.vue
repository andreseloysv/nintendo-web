<template>
  <div :id="`item-${id}`" class="item">
    <img class="item-image" :src="item.imageUrl" alt="Movie Title">
    <div :id="`item-title-${id}`" class="item-title">{{item.title}}</div>
    <div v-if="item.price" :id="`item-price-${id}`" class="item-price">{{item.price}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from '../searchResults/ResultList';

@Component({
  name: 'HorizontalListItem',
  components: {},
})
export default class HorizontalListItem extends Vue {
  @Prop({ type: Object }) private item!: Item;
  @Prop({ type: Number }) private index!: number;

  private get id() {
    if (this.item && this.item.title) {
      const title = this.item.title.toLowerCase().split(' ').join('-');
      return `${this.index}-${title}`;
    }
    return '';
  }
}
</script>

<style scoped lang="stylus">
.item
  border-radius 16px
  padding 10px
  background #ffffff

  .item-title
    margin-top 10px
    font-weight bolder
    color #5a5a5a

  .item-price
    margin-top 10px
    font-weight bolder
    color black
    text-align right
    padding-left 15px
    font-size 20px

  .item-image
    border-radius 16px
    max-width 100%
    height auto
</style>
