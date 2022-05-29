<template>
  <article class="about-card">
    <div class="about-card__icons">
      <Img
        :source="require('@/assets/images/about.png')"
        altImg="card image"
        className=" about-card__bg"
      />
      <Img
        :source="require('@/assets/images/about2.png')"
        altImg="card image"
        className=" about-card__img"
      />
    </div>
    <h3 class="text-center about-card__heading">Tailor-Made Packages</h3>
    <p class="text-center about-card__text">
      When it comes to delivering the best planned holiday package to you, we
      strive to exceed your expectations. For us, it has to be spot-on. We do
      what we do in the ideal way possible.
    </p>
  </article>
</template>
<script>
import Img from "./img-card.vue"
export default {
  components:{Img}
}
</script>
