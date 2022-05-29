<template>
  <header class="header mb-5">
    <div class="inner">
      <Img
        :source="require('@/assets/images/header.png')"
        altImg="header image"
        class="header__img"
      />
    </div>
    <h1 class="header__text">enjoy freedom land</h1>
    <div>
      <div class="header__form">
        <Form></Form>
      </div>
    </div>
  </header>
</template>
<!-- Start Script -->
<script>
import Form from "./form-header.vue";
import Img from "./img-card.vue"
export default {
  components: { Form ,Img },
};
</script>
