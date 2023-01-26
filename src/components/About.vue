<template>
  <div class="relative">
    <img
      src="@/assets/isaac-wong-pt/profile.jpg"
      alt="Isaac Wong"
      class="h-full absolute"
      :class="
        isLg
          ? 'right-0 w-1/3 object-center object-cover'
          : 'inset-x-0 object-center object-cover'
      "
    />

    <div v-if="!isLg" class="h-full absolute inset-x-0 bg-black opacity-50" />

    <div class="mx-auto max-w-1300px relative">
      <div :class="isLg ? 'px-40px py-80px w-2/3' : 'py-40px px-20px'">
        <p
          class="supheader-1 mb-20px"
          :class="isLg ? 'text-black' : 'text-white'"
        >
          Isaac Wong
        </p>

        <p class="body-2 mb-20px" :class="isLg ? 'text-black' : 'text-white'">
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

        <p class="body-2 mb-20px" :class="isLg ? 'text-black' : 'text-white'">
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

        <div class="flex justify-center">
          <nuxt-link
            :to="'/about'"
            class="
              text-yellow-FAC710
              border-2px border-yellow-FAC710
              hover:bg-yellow-FAC710
              px-40px
              py-10px
              rounded-5px
              hover:text-white
            "
            >Learn More</nuxt-link
          >
        </div>
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
