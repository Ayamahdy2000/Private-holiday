<template>
  <section class="about">
    <div class="container">
      <header>
        <h2 class="about__heading">Why we are different</h2>
      </header>
      <main>
        <Swiper :items="15" :swiperOptions="swiperOptionsAbout" :numOfRows="1">
          <template v-slot:cards> <aboutCard /></template>
        </Swiper>
      </main>
    </div>
  </section>
</template>
<!-- Start Script -->
<script>
import Swiper from "./swiper-card.vue";
import aboutCard from "./about-card.vue";
export default {
  components: { Swiper, aboutCard },
  data() {
    return {
      swiperOptionsAbout: {
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
            slidesPerView: 2,
            slidesPerGroup: 2,
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
