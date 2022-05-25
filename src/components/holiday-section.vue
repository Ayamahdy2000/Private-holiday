<template>
  <section class="holiday">
    <header>
      <h2 class="holiday__heading">Recent holiday locations</h2>
    </header>
    <main>
      <div class="container px-xl-5">
        <Swiper
          :items="20"
          :swiperOptions="swiperHolidayOptions"
          :numOfRows="2"
        >
          <template v-slot:cards> <holidayCard /></template>
        </Swiper>
      </div>
    </main>
  </section>
</template>
<!-- Start Script -->
<script>
import Swiper from "./swiper-card.vue";
import holidayCard from "./holiday-card.vue";
export default {
  components: { Swiper, holidayCard },
  data() {
    return {
      swiperHolidayOptions: {
        breakpoints: {
          1200: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 50,
          },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 15,
          },
        },
      },
    };
  },
};
</script>
