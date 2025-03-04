<template>
  <div class="flex flex-col gap-6">
    <div
      v-for="(promo, key) in promos"
      class="bg-black rounded-16px"
      :class="isLg ? 'p-32px grid grid-cols-3 gap-32px' : 'p-16px'"
      :key="key"
    >
      <div
        class="flex items-center justify-center"
        :class="isLg ? 'border-r border-white' : 'mb-[32px]'"
      >
        <a target="_blank" :href="promo.link">
          <img :src="promo.logo" class="h-52px" :class="isLg ? '' : 'mt-[8px]'" :style="`scale:${promo.scale || 1}`" />
        </a>
      </div>

      <div class="col-span-2 flex flex-col justify-center">
        <p class="text-white text-md-regular" :class="isLg ? '' : 'text-center'" v-html="promo.promotion">
        </p>
      </div>
    </div>
  </div>
</template>
<script>
// data
import { promos } from "@/data/promos.js";

export default {
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    promos() {
      return promos;
    },
  },
};
</script>