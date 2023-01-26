<template>
  <div class="bg-black">
    <div
      class="mx-auto max-w-1300px"
      :class="isLg ? 'px-40px py-80px' : 'py-40px'"
    >
      <div :class="isLg ? 'mb-40px' : 'px-20px mb-20px'">
        <p class="text-white supheader-1 mb-20px">They made it, you can too</p>
        <p class="text-white body-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a erat
          risus. Morbi ullamcorper tempor justo, sed efficitur neque varius sed.
          Sed imperdiet sapien nec felis finibus suscipit. In bibendum metus at
          enim euismod, sit amet pulvinar dui sagittis. Duis fermentum leo id
          pretium consequat. Integer sollicitudin porta hendrerit. Vivamus
          tristique magna sed felis laoreet vestibulum sit amet vel dolor.
        </p>
      </div>

      <div v-if="isLg" class="grid grid-cols-3 gap-20px mb-20px">
        <div
          v-for="(testimonial, key) in testimonials.slice(0, 4)"
          :key="key"
          class="rounded-10px overflow-hidden relative"
          :class="testimonial.type === 'video' ? 'col-span-2' : 'col-span-1'"
          @mouseover="playClip(testimonial.key)"
          @mouseout="pauseClip(testimonial.key)"
        >
          <template v-if="testimonial.type === 'video'">
            <video :id="testimonial.key" muted controls class="h-full w-full">
              <source :src="testimonial.src" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div
              :id="'play-' + testimonial.key"
              class="
                absolute
                inset-0
                z-10
                flex
                items-center
                justify-center
                bg-center bg-no-repeat bg-cover
              "
              :style="{
                backgroundImage: 'url(\'' + testimonial.thumbnail + '\')',
              }"
            >
              <div class="absolute inset-0 bg-black opacity-50"/>
              <img src="@/assets/utility/play.svg" class="h-100px w-100px relative" />
            </div>
          </template>
          <img
            v-else
            :src="testimonial.src"
            class="w-full h-full object-center object-contain"
          />
        </div>
      </div>
      <Carousel
        v-else
        :slides="testimonials.filter((element) => element.type === 'img')"
        :colorCode="'#FFFFFF'"
        :activeColorCode="'#468BCC'"
        class="mb-20px"
      >
        <template #slide="{ slide }">
          <div class="px-20px h-full">
            <div class="h-full rounded-10px overflow-hidden">
              <video
                v-if="slide.type === 'video'"
                muted
                controls
                class="w-full"
              >
                <source :src="slide.src" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                v-else
                :src="slide.src"
                class="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </template>
      </Carousel>

      <div class="flex justify-center">
        <nuxt-link
          :to="'/testimonials'"
          class="
            text-blue-468BCC
            border-2px border-blue-468BCC
            hover:bg-blue-468BCC
            px-40px
            py-10px
            rounded-5px
            hover:text-white
          "
          >More Testimonials</nuxt-link
        >
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
          key: "allan",
          type: "video",
          src: require("@/assets/testimonials/allan.mp4"),
          thumbnail: require("@/assets/testimonials/allan-thumbnail.png"),
        },
        {
          key: "allan-before-after",
          type: "img",
          src: require("@/assets/testimonials/allan-before-after.png"),
        },
        {
          key: "alicia-before-after",
          type: "img",
          src: require("@/assets/testimonials/alicia-before-after.png"),
        },
        {
          key: "alicia",
          type: "video",
          src: require("@/assets/testimonials/alicia.mp4"),
          thumbnail: require("@/assets/testimonials/alicia-thumbnail.png"),
        },
        {
          key: "justin-before-after",
          type: "img",
          src: require("@/assets/testimonials/justin-before-after.png"),
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
