<!-- Please remove this file from your project -->
<template>
  <div :class="[light ? '' : 'absolute top-0 w-full']">
    <div class="mx-auto max-w-1300px p-20px">
      <div class="flex items-end justify-between">
        <img src="@/assets/rea.png" alt="rea" />
        <div class="flex">
          <a
            href="/about"
            class="my-20px ml-40px body-3"
            :class="[light ? 'text-blue-191F6B' : 'text-white']"
          >
            About us
          </a>
          <a
            href="/news"
            class="my-20px ml-40px body-3"
            :class="[light ? 'text-blue-191F6B' : 'text-white']"
          >
            News & Developments
          </a>
          <a
            href="/careers"
            class="my-20px ml-40px body-3"
            :class="[light ? 'text-blue-191F6B' : 'text-white']"
          >
            Careers
          </a>
          <a
            href="/contact"
            class="my-20px ml-40px body-3"
            :class="[light ? 'text-blue-191F6B' : 'text-white']"
          >
            Contact us
          </a>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/4 h-2px bg-blue-191F6B"></div>
        <div class="flex-grow h-2px bg-blue-03ABD7"></div>
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
