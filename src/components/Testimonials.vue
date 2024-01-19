<template>
  <div class="bg-black relative">
    <div
      class="mx-auto max-w-1300px"
      :class="isLg ? 'px-40px py-80px' : 'py-40px'"
    >
      <img
        src="@/assets/utility/arrow-blue.svg"
        alt="arrow"
        class="absolute"
        :class="
          isLg ? '-top-50px w-500px -left-40px' : '-top-20px w-200px -left-20px'
        "
      />

      <div class="relative">
        <div :class="isLg ? 'mb-40px' : 'px-20px mb-20px'">
          <p class="text-white supheader-1 mb-20px text-center">
            They made it, you can too
          </p>
        </div>
        <div class="grid grid-cols-1 gap-40px mb-40px">
          <div v-if="isLg" class="grid gap-20px mb-20px grid-cols-3">
            <div
              v-for="(asset, key) in testimonials"
              :key="key"
              class="rounded-10px overflow-hidden col-span-1"
            >
              <img
                :src="asset.src"
                class="w-full h-full object-center object-contain"
              />
            </div>
          </div>

          <Carousel
            v-else
            :slides="testimonials"
            :colorCode="'#FFFFFF'"
            :activeColorCode="'#536FFD'"
            class="mb-20px"
          >
            <template #slide="{ slide }">
              <div
                class="
                  rounded-10px
                  overflow-hidden
                  flex
                  items-center
                  h-full
                  col-span-1
                  px-20px
                "
              >
                <img
                  :src="slide.src"
                  class="w-full h-full object-center object-contain"
                />
              </div>
            </template>
          </Carousel>
        </div>

        <div class="flex justify-center">
          <nuxt-link
            :to="'/results-and-testimonials'"
            class="
              text-blue-536FFD
              border-2px border-blue-536FFD
              hover:bg-blue-536FFD
              px-40px
              py-10px
              rounded-5px
              hover:text-white
            "
            >Read Testimonials</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  components: {
    Carousel,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    testimonials() {
      return [
        {
          key: "isaac-before-after-front",
          type: "img",
          src: require("@/assets/testimonials/isaac-before-after-front.JPG"),
        },
        {
          key: "allan-before-after-front",
          type: "img",
          src: require("@/assets/testimonials/allan-before-after-front.JPG"),
        },
        {
          key: "alicia-before-after-front",
          type: "img",
          src: require("@/assets/testimonials/alicia-before-after-front.JPG"),
        },
        {
          key: "ridhwan-before-after-front",
          type: "img",
          src: require("@/assets/testimonials/ridhwan-before-after-front.JPG"),
        },
        {
          key: "justin-before-after-side",
          type: "img",
          src: require("@/assets/testimonials/justin-before-after-side.JPG"),
        },
        {
          key: "angela-before-after-front",
          type: "img",
          src: require("@/assets/testimonials/angela-before-after-front.JPG"),
        },
        {
          key: "keith-before-after-side",
          type: "img",
          src: require("@/assets/testimonials/keith-before-after-side.JPG"),
        },
        {
          key: "jingxin-before-after-front",
          type: "img",
          src: require("@/assets/testimonials/jingxin-before-after-front.JPG"),
        },
        {
          key: "roger-before-after-front",
          type: "img",
          src: require("@/assets/testimonials/roger-before-after-front.JPG"),
        },
        {
          key: "christopher-before-after-back",
          type: "img",
          src: require("@/assets/testimonials/christopher-before-after-back.JPG"),
        },
      ];
    },
  },
  methods: {
    playClip(id) {
      let clip = document.getElementById(id);

      if (clip) {
        clip.play();

        let pauseButton = document.getElementById("play-" + id);
        if (pauseButton) {
          pauseButton.classList.add("hidden");
        }
      }
    },
    pauseClip(id) {
      let clip = document.getElementById(id);

      if (clip) {
        clip.pause();

        let pauseButton = document.getElementById("play-" + id);
        if (pauseButton) {
          pauseButton.classList.remove("hidden");
        }
      }
    },
  },
};
</script>
