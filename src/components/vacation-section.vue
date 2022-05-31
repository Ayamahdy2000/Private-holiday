<template>
  <section class="vacation">
    <div class="container">
      <header>
        <h2 class="vacation__heading">See latest vacation ideas</h2>
      </header>
      <main>
        <Swiper
          :items="15"
          :numOfRows="1"
          :slidesPerView="slidesPerView"
          :slidesPerGroup="slidesPerGroup"
          :spaceBetween="spaceBetween"
        >
          <template v-slot:cards><vacationCard /></template>
        </Swiper>
      </main>
      <!-- <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        corporis rerum tempora, laudantium ab obcaecati est voluptatem ipsa,
        illum eveniet magni magnam assumenda explicabo dolores quisquam ipsum
        unde itaque dolor!
      </div> -->
    </div>
  </section>
</template>
<!-- Start Script -->
<script>
import Swiper from "./swiper-card.vue";
import vacationCard from "./vacation-card.vue";
export default {
  components: { Swiper, vacationCard },
  mounted() {
    const lgScreen = matchMedia("(min-width: 1200px)");
    lgScreen.addEventListener("change", (e) =>
      e.matches ? (this.slidesPerView = 3) : (this.slidesPerView = 2)
    );
    const smallScreen = matchMedia("(max-width:768px)");
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
