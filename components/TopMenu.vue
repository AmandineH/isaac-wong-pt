<!-- Please remove this file from your project -->
<template>
  <div :class="[light ? '' : 'absolute top-0 w-full']">
    <div class="mx-auto max-w-1300px p-20px">
      <div class="flex items-end justify-between">
        <a href="/">
          <img v-if="light" src="@/assets/rea/rea.svg" alt="rea" class="h-50px mb-10px" />
          <img v-else src="@/assets/rea/rea-white.svg" alt="rea" class="h-50px mb-10px" />
        </a>
        <div class="flex">
          <a
            href="/about"
            class="my-20px ml-40px body-3"
            :class="[light ? 'text-blue-191f6C' : 'text-white']"
          >
            About us
          </a>
          <a
            href="/news"
            class="my-20px ml-40px body-3"
            :class="[light ? 'text-blue-191f6C' : 'text-white']"
          >
            News & Developments
          </a>
          <a
            href="/careers"
            class="my-20px ml-40px body-3"
            :class="[light ? 'text-blue-191f6C' : 'text-white']"
          >
            Careers
          </a>
          <a
            href="/contact"
            class="my-20px ml-40px body-3"
            :class="[light ? 'text-blue-191f6C' : 'text-white']"
          >
            Contact us
          </a>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/4 h-2px bg-blue-191f6C"></div>
        <div class="flex-grow h-2px bg-blue-00ACD7"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
    },
  },
  mounted() {
    console.log(this.light);
  },
};
</script>
