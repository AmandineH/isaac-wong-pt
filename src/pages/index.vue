<template>
  <div>
    <Banner />

    <Testimonials v-if="isLg" />
    <TestimonialsMobile v-if="!isLg" />

    <Products />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Products from "@/components/Products.vue";
import Testimonials from "@/components/Testimonials.vue";
import TestimonialsMobile from "@/components/TestimonialsMobile.vue";

export default {
  head() {
    return this.$metadata.head();
  },
  components: {
    Banner,
    Products,
    Testimonials,
    TestimonialsMobile,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
