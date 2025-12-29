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
      :class="
        isLg
          ? 'grid grid-cols-3 gap-16px mb-32px'
          : 'grid grid-cols-2 gap-8px mb-24px'
      "
    >
      <img
        v-for="(asset, key) in testimonials"
        :key="key"
        :src="asset.src"
        class="object-center object-contain rounded-12px cursor-pointer hover:opacity-90 transition"
        @click="openTestimonial(asset)"
      />
    </div>

    <div class="flex justify-center">
      <nuxt-link
        :to="'/results-and-testimonials'"
        class="text-md-semibold text-black border-4px border-black hover:border-primary-blue hover:text-primary-blue px-32px py-16px rounded-8px uppercase text-center"
        >Read Testimonials</nuxt-link
      >
    </div>

    <template v-if="isModalOpen">
      <div class="bg-black/60 fixed inset-0 z-50" @click.self="closeModal" />

      <div
        class="fixed z-50 flex items-center justify-center"
        :class="isLg ? 'inset-32px' : 'inset-16px'"
      >
        <div
          class="relative bg-white shadow-md rounded-12px p-16px overflow-auto h-full max-w-[1300px]"
        >
          <img
            src="@/assets/utility/close.svg"
            alt="Close"
            class="h-32px w-32px absolute right-16px top-16px button"
            @click.self="closeModal"
          />

          <p class="text-black display-sm-bold mb-8px">
            <span class="uppercase">{{ selectedTestimonial.name }}</span>
            <span class="text-black text-xs-regular">{{
              selectedTestimonial.profile
            }}</span>
          </p>

          <p class="text-black text-md-regular mb-16px">
            {{ selectedTestimonial.quote }}
          </p>

          <div class="grid grid-cols-2 gap-16px">
            <div
              v-for="(asset, key) in selectedTestimonial.assets"
              :key="key"
              class="overflow-hidden rounded-6px md:rounded-12px"
            >
              <div v-if="asset.type === 'video'" class="w-full h-full">
                <VideoPlayer
                  :key="`${asset.key}-${isLg}`"
                  :src="isLg ? asset.srcDesktop || asset.src : asset.src"
                  :thumbnail="asset.thumbnail"
                  class="w-full h-full overflow-hidden flex items-center"
                />
              </div>
              <img
                v-else
                :src="asset.src"
                class="object-contain object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// components
import VideoPlayer from "@/components/VideoPlayer.vue";

// data
import { testimonialsPreview } from "@/data/testimonials.js";

export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      isModalOpen: false,
      selectedTestimonial: null,
    };
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    testimonials() {
      return testimonialsPreview;
    },
  },
  methods: {
    openTestimonial(asset) {
      this.selectedTestimonial = asset;
      this.isModalOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedTestimonial = null;
      document.body.style.overflow = "";
    },
  },
};
</script>
