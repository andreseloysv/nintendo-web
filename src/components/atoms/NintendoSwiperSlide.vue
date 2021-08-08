<template>
  <swiper :slides-per-view="slidesPerView" :space-between="spaceBetween" :slides-per-group="slidesPerGroup">
    <swiper-slide v-for="(item, index) in this.items" :key="index">
      <slot :item="item" :index="index" />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Swiper, SwiperSlide } from '@mscalessio/vue2-swiper';
import 'swiper/swiper.scss';

@Component({
  name: 'NintendoSwiperSlide',
  components: {
    Swiper,
    SwiperSlide,
  },
})
export default class NintendoSwiperSlide extends Vue {
  @Prop({ type: Number }) private slidesPerView: number;
  @Prop({ type: Number }) private spaceBetween: number;
  @Prop({ type: Number }) private slidesPerGroup: number;
  @Prop({ type: [Object, Array] }) private items: any[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
>>>
  .swiper-container
    width 100%
    height 100%

  .swiper-wrapper
    padding 40px 20px 90px 20px

  .swiper-slide
    border 1px solid #d2d2d2
    border-radius 19px
    box-shadow #757575 0px 26px 30px -10px, #b1b1b1 0px 16px 10px -10px
    transition 250ms all
    text-align center
    font-size 18px
    background #fff0
    display -webkit-box
    display -ms-flexbox
    display -webkit-flex
    display flex
    -webkit-box-pack center
    -ms-flex-pack center
    -webkit-justify-content center
    justify-content center
    -webkit-box-align center
    -ms-flex-align center
    -webkit-align-items center
    align-items center

    &:hover
      transform scale(1.2)
      z-index 1

    &:first-child:hover
      margin 0 40px

    &:last-child:hover
      margin 0 -40px
</style>
