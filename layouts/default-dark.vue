<template>
  <div>
    <TopMenu :dark="true" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { TopMenu, Footer },
};
</script>
