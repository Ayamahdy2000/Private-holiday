<template>
  <swiper
    :modules="modules"
    :slidesPerView="slidesPerView"
    :slidesPerGroup="slidesPerGroup"
    :spaceBetween="spaceBetween"
    :pagination="{ clickable: true }"
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
