<template>
  <swiper
    :modules="modules"
    :breakpoints="swiperOptions.breakpoints"
    :touchStartPreventDefault="false"
    :pagination="{ clickable: true }"
    :preventClicks="false"
    :preventClicksPropagation="false"
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
  props: ["swiperOptions", "numOfRows", "items"],
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Grid, Pagination],
    };
  },
};
</script>
