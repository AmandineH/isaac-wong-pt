<template>
  <div class="flex flex-col justify-between">
    <div>
      <TopMenuLight />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import TopMenuLight from "@/components/TopMenuLight.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { TopMenuLight, Footer },
};
</script>
