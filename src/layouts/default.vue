<template>
  <div>
    <Topbar />

    <Nuxt />

    <Whatsapp />

    <Footer />
  </div>
</template>

<script>
// components
import Topbar from "@/components/Topbar.vue";
import Whatsapp from "@/components/Whatsapp.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Topbar, Whatsapp, Footer },
  async mounted() {
    // SET SCREEN SIZE
    this.$store.commit("layout/setIsLg", document.body.clientWidth);
    this.$store.commit("layout/setIsSm", document.body.clientWidth);

    if (process.client) {
      window.addEventListener("resize", () => {
        this.$store.commit("layout/setIsLg", document.body.clientWidth);
        this.$store.commit("layout/setIsSm", document.body.clientWidth);
      });
    }
  },
};
</script>
