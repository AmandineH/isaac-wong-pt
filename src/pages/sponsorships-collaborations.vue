<template>
  <div
    class="mx-auto max-w-1300px"
    :class="isLg ? 'py-52px px-32px' : 'py-32px px-24px'"
  >
    <div :class="isLg ? 'mb-32px' : 'mb-24px'">
      <p class="text-center text-black display-md-bold">Sponsorships & Collaborations</p>
      <p class="mx-auto text-center text-gray-500 text-md-regular max-w-800px">
        Enjoy exclusive discounts from my trusted fitness and wellness partners! ✊
      </p>
    </div>

    <div
      class="bg-[#0F1799] rounded-16px"
      :class="isLg ? 'p-32px grid grid-cols-3 gap-16px' : 'p-16px'"
    >
      <div
        class="flex items-center justify-center"
        :class="isLg ? 'border-r border-white' : 'mb-16px'"
      >
        <img src="@/assets/collaborations/active-x.png" class="h-52px" />
      </div>

      <div class="col-span-2">
        <p class="text-center text-white text-md-regular">
          Use “isaacwongpt” to get 10% off your initial consult at
          <a href="https://activexphysio.com/" target="_blank"
            >ActiveX Physiotherapy</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return this.$metadata.head({
      title: "Products",
    });
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
