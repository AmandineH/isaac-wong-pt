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

// plugins
import { getCountryVariables } from "@/plugins/countries.js";

export default {
  components: { Topbar, Footer },
  computed: {
    countryCode() {
      return this.$store.state.countryCode;
    },
  },
  mounted() {
    this.$store.commit("setCountryCode", process.env.COUNTRY_CODE);
    this.$i18n.setLocale(getCountryVariables(this.countryCode, "locale"));
  },
};
</script>
