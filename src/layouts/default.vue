<template>
  <div>
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
  async mounted() {
    // SET SCREEN SIZE
    this.$store.commit("layout/setIsLg", document.body.clientWidth);

    if (process.client) {
      window.addEventListener("resize", () => {
        this.$store.commit("layout/setIsLg", document.body.clientWidth);
      });
    }
  },
};
</script>
