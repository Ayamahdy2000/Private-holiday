<template>
  <section class="vacation">
    <div class="container">
      <header>
        <h2 class="vacation__heading">See latest vacation ideas</h2>
      </header>

      <main>
        <Swiper
          :items="15"
          :swiperOptions="swiperVacationOptions"
          :numOfRows="1"
        >
          <template v-slot:cards><vacationCard /></template>
        </Swiper>
      </main>
    </div>
  </section>
</template>
<!-- Start Script -->
<script>
import Swiper from "./swiper-card.vue";
import vacationCard from "./vacation-card.vue";
export default {
  components: { Swiper, vacationCard },
  data() {
    return {
      swiperVacationOptions: {
        autoplay: false,
        breakpoints: {
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
          },
          1149: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 1,
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
