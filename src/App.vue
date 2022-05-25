<template>
  <div>
    <Nav></Nav>
    <Header />
    <Vacation />
    <Holiday />
    <About />
    <Contact />
    <Footer />
  </div>
</template>
<!-- Start Script  -->
<script>
import Nav from "./components/navbar-layout.vue";
import Header from "./components/header-section.vue";
import Holiday from "./components/holiday-section.vue";
import About from "./components/about-section.vue";
import Vacation from "./components/vacation-section.vue";
import Contact from "./components/contact-section.vue";
import Footer from "./components/footer-section.vue";

export default {
  name: "App",
  components: {
    Nav,
    Header,
    About,
    Holiday,
    Vacation,
    Contact,
    Footer,
  },

  data() {
    return {};
  },
};
</script>
<!-- Vue multiselect style -->
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<!-- Main style -->
<style lang="scss">
@import "assets/styles/main.scss";
</style>
