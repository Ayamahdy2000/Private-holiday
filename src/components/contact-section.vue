<template>
  <section class="contact">
    <Img
      :source="require('@/assets/images/contact.png')"
      altImg="contact image"
      className="contact__img"
    />

    <div>
      <div class="contact__bg-form">
        <h2 class="contact__heading">Send us a message</h2>
        <contactForm />
      </div>
    </div>
  </section>
</template>
<!-- Start Script -->
<script>
import contactForm from "./contact-form.vue";
import Img from "./img-card.vue"
export default {
  components: { contactForm ,Img},
};
</script>
