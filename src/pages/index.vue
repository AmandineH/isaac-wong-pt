<template>
  <div>
    <Banner />

    <Products />

    <Testimonials />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Products from "@/components/Products.vue";
import Testimonials from "@/components/Testimonials.vue";

export default {
  components: {
    Banner,
    Products,
    Testimonials,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
