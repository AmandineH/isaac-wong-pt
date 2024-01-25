<template>
  <div>
    <div
      class="relative flex items-center justify-center bg-center bg-no-repeat bg-cover "
      :class="isLg ? 'h-70vh' : 'h-50vh'"
      :style="{
        backgroundImage:
          'url(\'' + require('@/assets/services/services-banner.png') + '\')',
      }"
    >
      <div class="absolute inset-0 bg-black opacity-50" />
      <div class="relative p-32px">
        <p class="text-center text-white display-md-bold mb-24px">
          Results Based. Enjoyment. Data Driven.
        </p>

        <div class="flex justify-center">
          <a
            :href="`https://wa.me/+6597567270?text=${encodeURIComponent(
              'Hello, I would like to know more about your coaching services! \n\n1. In-Person Coaching \n2. ⁠Online Coaching \n3. ⁠Fitness Business Coaching \n\nName: \nGender: \nAge: \nPreferred Coaching Service (1, 2, or 3): \n\nUltimate Goal: \n\nPre-existing injuries / medical conditions / illnesses / diseases: \nExercise history:'
            )}`"
            target="_blank"
            class="text-white uppercase opacity-100  text-md-semibold bg-primary-blue hover:opacity-80 px-32px py-16px rounded-8px"
            >Get in Touch
          </a>
        </div>
      </div>
    </div>

    <Products />

    <div class="mx-auto max-w-1300px" :class="isLg ? 'p-32px' : 'pb-32px'">
      <div class="flex gap-32px" :class="isLg ? '' : 'flex-col'">
        <div :class="isLg ? 'order-1' : 'px-24px order-2'">
          <p
            class="text-black display-md-bold"
            :class="isLg ? 'mb-32px' : 'mb-24px'"
          >
            How I can help you?
          </p>
          <p class="text-black body-2" :class="isLg ? 'mb-32px' : 'mb-24px'">
            I will provide you with the tools and support that you need to reach
            your health and fitness goal. I will create customized workout plans
            tailored to your individual needs and fitness level and provide
            instruction on proper form and technique. Additionally, I will be
            here to motivate and encourage you to stay on track and push
            yourself to reach your goals.
          </p>

          <div
            class="grid  gap-16px border-4px rounded-12px border-primary-blue p-16px"
            :class="isLg ? 'grid-cols-2' : ''"
          >
            <div
              v-for="(help, key) in helps"
              :key="key"
              class="flex items-center"
              :class="isLg ? 'gap-16px' : 'flex-col gap-8px'"
            >
              <img :src="help.src" class="flex-shrink-0 h-44px w-44px" />
              <div>
                <p
                  class="text-sm-bold text-primary-blue"
                  :class="isLg ? '' : 'text-center'"
                >
                  {{ help.label }}
                </p>
                <p
                  class="text-black text-sm-regular"
                  :class="isLg ? '' : 'text-center'"
                >
                  {{ help.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <VideoPlayer
          :src="require('@/assets/isaac-wong-pt/trailer.mp4')"
          :thumbnail="require('@/assets/isaac-wong-pt/trailer-thumbnail.jpg')"
          class="w-full overflow-hidden"
          :class="isLg ? 'rounded-12px order-2' : 'order-1'"
        />
      </div>
    </div>
  </div>
</template>

<script>
// components
import Products from "@/components/Products.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  head() {
    return this.$metadata.head({
      title: "Coaching Services",
    });
  },
  components: {
    Products,
    VideoPlayer,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    helps() {
      return [
        {
          src: require("@/assets/services/gym.svg"),
          label: "Customized training plan",
          description:
            "To help you reach your fitness goals more efficiently and effectively",
        },
        {
          src: require("@/assets/services/time.svg"),
          label: "Flexible workouts and location",
          description:
            "Convenient and accessible workout options, adjusted for any fitness level",
        },
        {
          src: require("@/assets/services/plate.svg"),
          label: "Customized nutrition plan",
          description:
            "Meet your specific dietary needs based on your lifestyle and preferences",
        },
        {
          src: require("@/assets/services/chat.svg"),
          label: "Daily monitoring and support",
          description:
            "Helps you to stay on track with training and nutrition plan, as well as to make adjustments when needed",
        },
      ];
    },
  },
};
</script>
