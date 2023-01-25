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

      <div v-if="isLg" class="flex flex-col gap-20px mb-20px">
        <div
          v-for="(testimonial, key) in testimonials"
          :key="key"
          class="bg-white rounded-10px overflow-hidden flex"
        >
          <video
            autoplay
            loop
            muted
            controls
            class="h-full w-1/2 object-center flex-shrink-0"
          >
            <source :src="testimonial.src" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div class="p-20px">
            <p class="text-black header-1 mb-10px">
              {{ testimonial.label }}
            </p>
            <p class="text-black title-2 opacity-70 mb-20px">
              {{ testimonial.sublabel }}
            </p>
            <p class="text-black body-2">
              {{ testimonial.description }}
            </p>
          </div>
        </div>
      </div>
      <Carousel
        v-else
        :slides="testimonials"
        :colorCode="'#FFFFFF'"
        :activeColorCode="'#468BCC'"
        class="mb-20px"
      >
        <template #slide="{ slide }">
          <div class="px-20px h-full">
            <div
              class="h-full bg-white rounded-10px flex flex-col overflow-hidden"
            >
              <video autoplay loop muted controls class="w-full mb-10px">
                <source :src="slide.src" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                class="p-20px flex-grow flex flex-col justify-between gap-40px"
              >
                <div>
                  <p class="text-center text-black header-1 mb-10px">
                    {{ slide.label }}
                  </p>
                  <p class="text-black header-2 opacity-70 mb-20px">
                    {{ slide.sublabel }}
                  </p>
                  <p class="text-black body-2">
                    {{ slide.description }}
                  </p>
                </div>
              </div>
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
          key: "jaden",
          src: require("@/assets/testimonials/jaden.mp4"),
          label: "Jaden",
          sublabel: "Whaterver he wanna do",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a erat risus. Morbi ullamcorper tempor justo, sed efficitur neque varius sed. Sed imperdiet sapien nec felis finibus suscipit. In bibendum metus at enim euismod, sit amet pulvinar dui sagittis.",
        },
        {
          key: "jingxin",
          src: require("@/assets/testimonials/jingxin.mp4"),
          label: "Jingxin",
          sublabel: "Whaterver he wanna do",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a erat risus. Morbi ullamcorper tempor justo, sed efficitur neque varius sed. Sed imperdiet sapien nec felis finibus suscipit. In bibendum metus at enim euismod, sit amet pulvinar dui sagittis.",
        },
        {
          key: "darren",
          src: require("@/assets/testimonials/darren.mp4"),
          label: "Darren",
          sublabel: "Whaterver he wanna do",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a erat risus. Morbi ullamcorper tempor justo, sed efficitur neque varius sed. Sed imperdiet sapien nec felis finibus suscipit. In bibendum metus at enim euismod, sit amet pulvinar dui sagittis.",
        },
      ];
    },
  },
};
</script>
