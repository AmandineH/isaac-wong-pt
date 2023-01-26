<template>
  <div>
    <div
      class="
        bg-center bg-no-repeat bg-cover
        h-80vh
        flex
        items-center
        justify-center
        relative
      "
      :style="{
        backgroundImage:
          'url(\'' + require('@/assets/services/services-banner.jpg') + '\')',
      }"
    >
      <div class="absolute inset-0 bg-black opacity-50" />
      <div
        class="relative"
        :class="isLg ? 'px-40px py-80px' : 'px-20px py-40px'"
      >
        <p class="text-white supheader-1 mb-20px">
          Results Based. Enjoyment. Data Driven.
        </p>

        <div class="flex gap-20px justify-center">
          <a
            href="https://wa.me/+6597567270"
            target="_blank"
            class="
              text-orange-EE642A
              border-2px border-orange-EE642A
              hover:bg-orange-EE642A
              px-40px
              py-10px
              rounded-5px
              hover:text-black
            "
            >Get in Touch</a
          >
        </div>
      </div>
    </div>
    <Products />

    <Contact />
  </div>
</template>

<script>
// components
import Products from "@/components/Products.vue";
import Contact from "@/components/Contact.vue";

export default {
  components: {
    Products,
    Contact,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
