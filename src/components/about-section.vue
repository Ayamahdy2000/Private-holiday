<template>
  <section class="about">
    <div class="container">
      <header>
        <h2 class="about__heading">Why we are different</h2>
      </header>
      <main>
        <Swiper
          :items="15"
          :slidesPerView="slidesPerView"
          :slidesPerGroup="slidesPerGroup"
          :spaceBetween="spaceBetween"
          :numOfRows="1"
        >
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
  mounted() {
    const lgScreen = matchMedia("(min-width: 992px)");
    lgScreen.addEventListener("change", (e) =>
      e.matches ? (this.slidesPerView = 3) : (this.slidesPerView = 2)
    );
    const smallScreen = matchMedia("(max-width:640px)");
    smallScreen.addEventListener("change", (e) =>
      e.matches ? (this.slidesPerView = 1) : (this.slidesPerView = 2)
    );
  },
  data() {
    return {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24,
    };
  },
};
</script>
