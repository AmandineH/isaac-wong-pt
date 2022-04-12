<template>
  <div class="flex flex-col justify-between">
    <div>
      <Topbar />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Topbar, Footer },
};
</script>
