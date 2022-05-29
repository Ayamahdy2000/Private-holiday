<template>
    <img ref="lazyRef" :alt="altImg" :class="className" />
</template>
<script>
import { ref } from "vue";
import { useLazyload } from "vue3-lazyload";
export default {
  props: ["source", "altImg" ,"className"],
  setup(props) {
    const src = ref(props.source);
    const lazyRef = useLazyload(src, {
      lifecycle: {
        loading: () => {
          console.log("loading");
        },
        error: () => {
          console.log("error");
        },
        loaded: () => {
          console.log("loaded");
        },
      },
    });
    return {
      lazyRef,
    };
  },
};
</script>
