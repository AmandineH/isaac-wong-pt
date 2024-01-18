<template>
  <div class="bg-black">
    <div
      class="mx-auto max-w-1300px grid"
      :class="isLg ? 'grid-cols-2' : ''"
    >
      <div
        :class="
          isLg
            ? 'order-1 px-40px py-80px flex flex-col justify-center'
            : 'order-2 px-20px py-40px'
        "
      >
        <p class="text-white supheader-1 mb-10px">Isaac Wong</p>
        <p class="text-white header-2 opacity-70 mb-20px">
          Fitness Coach | Team Singapore 🇸🇬 Powerlifter & Weightlifter
        </p>

        <p class="text-white mb-20px body-2">
          Reach your fitness goals - Since 2017, I've been transforming my
          clients into fitter, healthier versions of themselves. Let's shape up
          together.
        </p>

        <div class="flex">
          <a
            :href="`https://wa.me/+6597567270?text=${encodeURIComponent(
              'Hi, I would like to know more about your Personal Training services. \nName: \nGender: \nAge: \nPre-existing injuries / medical conditions / illnesses / diseases: \nExercise history: \nGoals:'
            )}`"
            target="_blank"
            class="text-orange-EE642A border-2px border-orange-EE642A bg-orange-EE642A33 hover:bg-orange-EE642A px-40px py-10px rounded-5px hover:text-white"
            >Get in Touch</a
          >
        </div>
      </div>

      <div :class="isLg ? 'order-2' : 'order-1'">
        <div class="max-w-400px mx-auto">
          <video autoplay loop muted defaultMuted playsinline controls>
            <source src="@/assets/isaac-wong-pt/trailer.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
