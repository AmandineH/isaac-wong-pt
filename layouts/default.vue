<template>
  <div v-if="countryCode && this.$i18n.locale">
    <Topbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
// components
import Topbar from "@/components/Topbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Topbar, Footer },
  computed: {
    countryCode() {
      return this.$store.state.country.countryCode;
    },
  },
  mounted() {},
};
</script>
