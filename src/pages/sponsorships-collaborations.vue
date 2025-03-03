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

    <Promo />

  </div>
</template>

<script>
import Promo from "@/components/Promo.vue";

export default {
  head() {
    return this.$metadata.head({
      title: "Products",
    });
  },
  components: {
    Promo,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    }
  },
};
</script>
