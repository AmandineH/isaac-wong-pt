<template>
  <div>
    <About />
  </div>
</template>

<script>
// components
import About from "@/components/About.vue";

export default {
  head() {
    return this.$metadata.head({
      title: "About Me",
    });
  },
  components: {
    About,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
