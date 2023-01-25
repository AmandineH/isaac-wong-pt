<template>
  <div>
    <Banner />

    <Products />

    <Testimonials />

    <About />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Products from "@/components/Products.vue";
import Testimonials from "@/components/Testimonials.vue";
import About from "@/components/About.vue";

export default {
  components: {
    Banner,
    Products,
    Testimonials,
    About,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
