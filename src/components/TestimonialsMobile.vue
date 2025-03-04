<template>
  <div
    class="mx-auto max-w-1300px py-32px px-24px"
  >
    <div class="mb-24px">
      <p class="text-black display-md-bold text-center">
        They made it, you can too
      </p>
    </div>

    <div class="pb-24px grid gap-8px grid-cols-2 md:grid-cols-3">
      <div 
        v-for="(collaboration, index) in testimonials" 
        :key="index" 
        class="collaboration-item"
      >
        <img
          :key="key"
          :src="collaboration.src"
          class="object-center object-contain rounded-12px"
        />
      </div>
    </div>

    <div class="flex justify-center">
      <nuxt-link
        :to="'/results-and-testimonials'"
        class="
          text-md-semibold text-black
          border-4px border-black
          hover:border-primary-blue hover:text-primary-blue
          px-32px
          py-16px
          rounded-8px
          uppercase
          text-center
        "
        >Read More Testimonials</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { testimonialsPreview, testimonialsPreviewM } from "@/data/testimonials.js";

export default {
  computed: {
    testimonials() {
      if (this.$store.state.layout.isSm) return testimonialsPreviewM;
      return testimonialsPreview;
    }
  },
};
</script>
