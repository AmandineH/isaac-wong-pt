<template>
  <div>
    <Banner />

    <div
      class="relative mx-auto max-w-1300px"
      :class="isLg ? 'px-32px pt-52px' : 'px-24px pt-32px'"
    >
      <div
        class="bg-[#0F1799] rounded-16px"
        :class="isLg ? 'px-32px py-52px grid grid-cols-3 gap-16px' : 'p-16px'">
        <div
          class="flex flex-col justify-center "
          :class="isLg ? 'border-r border-white' : 'mb-16px'">
          <p
            class="text-white display-md-bold"
            :class="isLg ? '' : 'text-center'">
            Collaborations
          </p>
        </div>
        
        <div class="col-span-2">
          <div class="flex flex-col items-center justify-center gap-8px">
            <img src="@/assets/collaborations/active-x.png" class="h-52px"/>
            <p
              class="text-white text-md-regular"
              :class="isLg ? '' : 'text-center'">
              Use “isaacwongpt” to get 10% off your initial consult on <a href="https://activexphysio.com/" target="_blank">ActiveX Physiotherapy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Products />

    <Testimonials />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Products from "@/components/Products.vue";
import Testimonials from "@/components/Testimonials.vue";

export default {
  head() {
    return this.$metadata.head();
  },
  components: {
    Banner,
    Products,
    Testimonials,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
