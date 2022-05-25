<template>
  <section class="contact">
    <img
      :src="require('@/assets/images/contact.png')"
      alt="contact image"
      class="contact__img"
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
export default {
  components: { contactForm },
};
</script>
