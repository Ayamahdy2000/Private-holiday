<template>
  <swiper
    :modules="modules"
    :slidesPerView="slidesPerView"
    :slidesPerGroup="slidesPerGroup"
    :spaceBetween="spaceBetween"
    :touchStartPreventDefault="false"
    :pagination="{ clickable: true }"
    :preventClicks="false"
    :preventClicksPropagation="false"
    :observer="true"
    :observeParents="true"
    :grid="{
      rows: numOfRows,
    }"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot name="cards"></slot>
    </swiper-slide>
  </swiper>
</template>
<!-- Start Script -->
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
window.onresize = function () {
  this.swiperOptions;
};
export default {
  props: [
    "slidesPerView",
    "slidesPerGroup",
    "spaceBetween",
    "numOfRows",
    "items",
  ],
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Grid, Pagination],
    };
  },
};
</script>
