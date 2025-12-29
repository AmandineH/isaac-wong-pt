<template>
  <div>
    <Banner />

    <Testimonials />

    <Products />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Products from "@/components/Products.vue";
import Testimonials from "@/components/Testimonials.vue";

export default {
  head() {
    return this.$metadata.head();
  },
  components: {
    Banner,
    Products,
    Testimonials,
  },
};
</script>
