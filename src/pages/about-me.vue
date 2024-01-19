<template>
  <div>
    <About />

    <div
      class="flex"
      :class="isLg ? '' : 'flex-col'"
      :style="isLg ? 'max-height:720px' : ''"
    >
      <div class="max-w-400px" style="max-height: 710px">
        <video controls>
          <source src="@/assets/isaac-wong-pt/135.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <iframe
        src="https://d1967e9e743e4e1b8787eecb0389b3ad.elf.site"
        width="100%"
        :height="isLg ? 710 : 500"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<script>
// components
import About from "@/components/About.vue";

export default {
  head() {
    return this.$metadata.head();
  },
  components: {
    About,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
