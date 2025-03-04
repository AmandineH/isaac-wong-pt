<template>
  <div
    class="mx-auto max-w-1300px"
    :class="isLg ? 'py-52px px-32px' : 'py-32px px-24px'"
  >
    <div :class="isLg ? 'mb-32px' : 'mb-24px'">
      <p class="text-black display-md-bold text-center">
        They made it, you can too
      </p>
    </div>

    <div
      class="gap-16px"
      :class="
        isLg ? 'grid grid-cols-3 mb-32px' : 'mb-16px pb-16px flex overflow-x-auto'
      "
    >
      <img
        v-for="(asset, key) in testimonials"
        :key="key"
        :src="asset.src"
        class="object-center object-contain rounded-12px"
        :class="isLg ? '' : 'max-w-[280px] md:max-w-[300px]'"
      />
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
import { testimonialsPreview } from "@/data/testimonials.js";

export default {
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    testimonials() {
      return testimonialsPreview;
    },
  },
};
</script>
