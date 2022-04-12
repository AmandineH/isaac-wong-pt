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
import { mapMutations } from 'vuex'

export default {
  components: { Topbar, Footer },
  methods: {
    ...mapMutations(['setCountryCode']),
    
  },
  mounted() {
    // Get the env variables
    const storePayload = {countryCode: process.env.COUNTRY_CODE}; //env will be predefined 2-letter String only (SG / ID).
    console.log(storePayload);
    // set the store
    this.setCountryCode(storePayload);
    if (storePayload.countryCode === 'SG') {
      this.$i18n.setLocale('en-US');
    } else if (storePayload.countryCode === 'ID') {
      this.$i18n.setLocale('id-ID');
    }


      // countryCode
      // locale
    // set i18n locale
    // country specific display, in components
  }
};
</script>
