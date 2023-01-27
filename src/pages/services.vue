<template>
  <div>
    <div
      class="
        bg-right bg-no-repeat bg-cover
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
            href="https://wa.me/+6597567270?text="
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

    <div
      class="mx-auto max-w-1300px"
      :class="isLg ? 'px-40px pt-80px pb-40px' : 'pt-40px pb-20px px-20px'"
    >
      <p class="text-black supheader-1 mb-20px">How I can help you?</p>
      <p class="text-black body-2">
        There are many different ways to get fit and stay fit. Lose weight, run
        a marathon or get that beach body—take a look below at the different
        ways I can help achieve your fitness goals. Please contact me directly
        for a quote!
      </p>
    </div>

    <div class="bg-green-2B986B33">
      <div
        class="mx-auto max-w-1300px grid gap-20px grid-cols-2"
        :class="isLg ? 'p-40px' : 'p-20px'"
      >
        <div class="flex gap-20px items-center">
          <div class="w-50px flex items-center justify-center">
            <img src="@/assets/services/time.svg" class="h-50px" />
          </div>
          <div>
            <p class="body-2-bold text-black">
              Please contact me directly for a quote!
            </p>
            <p class="body-2 text-black">
              Please contact me directly for a quote! Please contact me directly
              for a quote!
            </p>
          </div>
        </div>
        <div class="flex gap-20px items-center">
          <div class="w-50px flex items-center justify-center">
            <img src="@/assets/services/plate.svg" class="h-50px" />
          </div>
          <div>
            <p class="body-2-bold text-black">
              Please contact me directly for a quote!
            </p>
            <p class="body-2 text-black">
              Please contact me directly for a quote! Please contact me directly
              for a quote!
            </p>
          </div>
        </div>
        <div class="flex gap-20px items-center">
          <div class="w-50px flex items-center justify-center">
            <img src="@/assets/services/phone.svg" class="h-50px" />
          </div>
          <div>
            <p class="body-2-bold text-black">
              Please contact me directly for a quote!
            </p>
            <p class="body-2 text-black">
              Please contact me directly for a quote! Please contact me directly
              for a quote!
            </p>
          </div>
        </div>
        <div class="flex gap-20px items-center">
          <div class="w-50px flex items-center justify-center">
            <img src="@/assets/services/chat.svg" class="h-50px" />
          </div>
          <div>
            <p class="body-2-bold text-black">
              Please contact me directly for a quote!
            </p>
            <p class="body-2 text-black">
              Please contact me directly for a quote! Please contact me directly
              for a quote!
            </p>
          </div>
        </div>
      </div>
    </div>

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
