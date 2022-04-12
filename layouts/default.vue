<template>
  <div>
    <Topbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Topbar, Footer },
  mounted() {
    // Get the env variables
    // set the store
      // countryCode
      // locale
    // set i18n locale
    // country specific display, in components
  }
};
</script>
