<template>
  <div class="bg-black">
    <div
      class="mx-auto max-w-1300px grid"
      :class="isLg ? 'grid-cols-2 p-32px gap-32px' : ''"
    >
      <div
        :class="
          isLg
            ? 'flex flex-col justify-center pb-70px order-1'
            : 'p-32px order-2'
        "
      >
        <p
          class="text-white mb-8px"
          :class="isLg ? 'display-xl-bold' : 'display-lg-bold'"
        >
          Isaac Wong
        </p>
        <p class="text-gray-400 text-sm mb-24px">
          Personal Trainer | Online Coach | Mentor
          <br/>
          Team Singapore Powerlifter and Weightlifter | Hyrox Pro Athlete
        </p>

        <p class="text-white text-md-regular mb-24px">
          <span class="text-white text-md-medium">Welcome to the fittest days of your life.</span>
          - Since 2017, I've been transforming my clients into fitter, healthier
          versions of themselves. Let's shape up together.
        </p>

        <div class="flex">
          <a
            :href="`https://wa.me/+6597567270?text=${encodeURIComponent(
              'Hello, I would like to know more about your coaching services! \n\n1. In-Person Coaching \n2. ⁠Online Coaching \n3. ⁠Fitness Business Coaching \n\nName: \nGender: \nAge: \nPreferred Coaching Service (1, 2, or 3): \n\nUltimate Goal: \n\nPre-existing injuries / medical conditions / illnesses / diseases: \nExercise history:'
            )}`"
            target="_blank"
            class="
              text-md-semibold text-white
              bg-primary-blue
              opacity-100
              hover:opacity-80
              px-32px
              py-16px
              rounded-8px
              uppercase
            "
            >Get in Touch
          </a>
        </div>
      </div>

      <VideoPlayer
        :src="require('@/assets/isaac-wong-pt/trailer.mp4')"
        :thumbnail="require('@/assets/isaac-wong-pt/trailer-thumbnail.jpg')"
        class="w-full overflow-hidden"
        :class="isLg ? 'rounded-12px order-2 h-70vh' : 'order-1 h-50vh'"
      />
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  name: "Banner",
  components: {
    VideoPlayer,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
