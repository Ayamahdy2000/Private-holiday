<template>
  <article class="card">
    <Img
      :source="require('@/assets/images/vacation.png')"
      altImg="card image"
      className="img-fluid card__img"
    />
    <div class="card__text">
      <p>Group Holidays</p>
    </div>
  </article>
</template>
<script>
import Img from "./img-card.vue"
export default {
  components:{Img}
}
</script>
