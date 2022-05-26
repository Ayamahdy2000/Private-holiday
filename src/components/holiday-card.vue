<template>
  <article class="holiday-card">
    <div class="row">
      <div class="col-xl-6 col-lg-5 col-sm-6">
        <div class="holiday-card__main-img">
          <img :src="mainImg" alt="main img" class="img-fluid pointer" />
        </div>
        <div class="holiday-card__sub-imgs d-flex">
          <div
            class="holiday-card__sub-img pointer"
            v-for="(img, index) in images"
            :key="index"
            @click="getMainImg(img)"
          >
            <img :src="img" alt="holiday images" />
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-7 col-sm-6 p-4">
        <header>
          <h3 class="holiday-card__heading">Casa Del Agua</h3>
        </header>
        <main>
          <p
            class="holiday-card__text"
            title="After a breakfast catered to your taste and served at your leisure, relax in a hammock under 
the shade of a palm tree or let the sun perform its golden magic on your skin while you study the waves."
          >
            After a breakfast catered to your taste and served at your leisure,
            relax in a hammock under the shade of a palm tree or let
          </p>
          <div class="mb-1 holiday-card__icons">
            <span class="me-4">
              <img
                :src="require('@/assets/images/bed.svg')"
                alt="bed icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Bed"
                ref="bed"
              />
              <span class="ms-2 holiday-card__package-num">3</span>
            </span>
            <span class="me-4">
              <img
                :src="require('@/assets/images/bath.svg')"
                alt="bath icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Bath"
                ref="bath"
              />
              <span class="ms-2 holiday-card__package-num">5</span>
            </span>
            <span class="me-4">
              <img
                :src="require('@/assets/images/beachfront.svg')"
                alt="beachfront icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Beachfront"
                ref="beachfront"
              />
            </span>
            <span class="me-4">
              <img
                :src="require('@/assets/images/pool.svg')"
                alt="pool icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Pool"
                ref="pool"
              />
            </span>
          </div>
          <div class="holiday-card__btn">
            <button class="btn-button bg-danger mt-4" @click.prevent="submit">
              Book Now
            </button>
          </div>
        </main>
      </div>
    </div>
  </article>
</template>
<!-- Start Script -->
<script>
import { Tooltip } from "bootstrap";
export default {
  mounted() {
    new Tooltip(this.$refs.bed);
    new Tooltip(this.$refs.bath);
    new Tooltip(this.$refs.beachfront);
    new Tooltip(this.$refs.pool);
    this.removeMainImg();
  },
  data() {
    return {
      images: [
        require("@/assets/images/swiper1.png"),
        require("@/assets/images/swiper2.png"),
        require("@/assets/images/swiper3.png"),
        require("@/assets/images/holiday.png"),
      ],
      mainImg: require("@/assets/images/holiday.png"),
    };
  },
  methods: {
    removeMainImg() {
      let len = this.images.length;
      for (let i = 0; i < len; i++) {
        if (this.images[i] == this.mainImg) {
          this.images.splice(i, 1);
        }
      }
    },
    getMainImg(img) {
      this.images.push(this.mainImg);
      this.mainImg = img;
      this.removeMainImg();
    },
  },
};
</script>
