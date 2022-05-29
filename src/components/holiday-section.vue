<template>
  <section class="holiday">
    <header>
      <h2 class="holiday__heading">Recent holiday locations</h2>
    </header>
    <main>
      <div class="container">
        <Swiper
          :items="20"
          :numOfRows="2"
          :slidesPerView="slidesPerView"
          :slidesPerGroup="slidesPerGroup"
          :spaceBetween="spaceBetween"
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
  mounted() {
    const medias = matchMedia("(min-width: 992px)");
    medias.addEventListener("change", (e) =>
      e.matches ? (this.slidesPerView = 2) : (this.slidesPerView = 1)
    );
  },
  data() {
    return {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    };
  },
};
</script>
