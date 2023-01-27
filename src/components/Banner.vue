<template>
  <div class="relative bg-black overflow-hidden">
    <video
      autoplay
      loop
      muted
      defaultMuted
      playsinline
      class="w-full"
      :class="isLg ? 'absolute top-0' : ''"
    >
      <source src="@/assets/isaac-wong-pt/trailer.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="bg-black-00000033 relative z-10">
      <div class="mx-auto max-w-1300px" :class="isLg ? 'h-80vh' : ''">
        <div :class="isLg ? 'max-w-500px px-40px py-80px' : 'px-20px py-40px'">
          <p class="text-white supheader-1 mb-10px">Isaac Wong</p>
          <p class="text-white header-2 opacity-70 mb-20px">
            Certified Personal Trainer
          </p>

          <p class="text-white mb-20px body-2">
            Reach your fitness goals - Since 2017, I’ve been transforming my
            clients into fitter, healthier versions of themselves. Let’s shape
            up together.
          </p>

          <div class="flex">
            <a
              href="https://wa.me/+6597567270?text="
              target="_blank"
              class="
                text-orange-EE642A
                border-2px border-orange-EE642A
                bg-orange-EE642A33
                hover:bg-orange-EE642A
                px-40px
                py-10px
                rounded-5px
                hover:text-white
              "
              >Get in Touch</a
            >
          </div>
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
