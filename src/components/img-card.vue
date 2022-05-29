<template>
  <img v-lazyload class="image__item" :data-url="source" :alt="altImg" />
</template>
<script>
import  lazyload from "../directives/LazyLoadDirective";
export default {
  props: ["source", "altImg"],
  directives: {
    lazyload : lazyload,
  },
};
</script>
