<template>
  <div>
    <div class="relative">
      <video class="w-full" autoplay loop muted>
        <source src="@/assets/isaac-wong-pt/trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="bg-black-00000033 inset-0 absolute z-50">
        <div class="mx-auto max-w-1300px" :class="isLg ? '' : 'h-full'">
          <div
            :class="
              isLg
                ? 'max-w-400px px-40px py-80px'
                : 'flex items-center justify-center flex-col h-full px-20px py-40px'
            "
          >
            <p class="text-white supheader-1 mb-10px">Isaac Wong</p>
            <p class="text-white header-2 mb-20px opacity-70">
              Reach your fitness goals
            </p>

            <template v-if="isLg">
              <p class="text-white mb-20px body-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
                erat risus. Morbi ullamcorper tempor justo, sed efficitur neque
                varius sed. Sed imperdiet sapien nec felis finibus suscipit. In
                bibendum metus at enim euismod, sit amet pulvinar dui sagittis.
              </p>
              <div class="flex justify-end">
                <nuxt-link
                  :to="'/contact'"
                  class="
                    text-white
                    bg-orange-EE642A
                    px-20px
                    py-10px
                    rounded-5px
                  "
                  >Contact Me</nuxt-link
                >
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- <div> TODO: Floating contact
      <nuxt-link v-if="!isLg" :to="'/contact'">
        <div class="bg-orange-EE642A px-20px py-10px text-white text-center">
          Contact Me
        </div></nuxt-link
      >
    </div> -->

    <div>
      <div class="mx-auto max-w-1300px" :class="isLg ? 'px-40px py-80px' : 'px-20px py-40px'">
        <p class="text-black supheader-1 mb-20px">Let's do it together</p>
        <p class="text-black mb-20px body-2">
          There are many different ways to get fit and stay fit. Lose weight,
          run a marathon or get that beach body—take a look below at the
          different ways I can help achieve your fitness goals. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nam a erat risus. Morbi
          ullamcorper tempor justo, sed efficitur neque varius sed. Sed
          imperdiet sapien nec felis finibus suscipit. In bibendum metus at enim
          euismod, sit amet pulvinar dui sagittis. Duis fermentum leo id pretium
          consequat. Integer sollicitudin porta hendrerit. Vivamus tristique
          magna sed felis laoreet vestibulum sit amet vel dolor.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
