<template>
  <div>
    <Banner />

    <Products />

    <Testimonials />

    <About />

    <Contact />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Products from "@/components/Products.vue";
import Testimonials from "@/components/Testimonials.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";

export default {
  head() {
    return this.$metadata.head();
  },
  components: {
    Banner,
    Products,
    Testimonials,
    About,
    Contact,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
