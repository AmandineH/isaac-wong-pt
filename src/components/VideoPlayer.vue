<template>
  <div class="relative">
    <video
      ref="video-player"
      controls
      loop
      class="w-full h-full max-h-full"
      :class="isPlay ? 'oapcity-100' : 'opacity-0'"
    >
      <source :src="src" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div
      v-if="!isPlay"
      class="absolute inset-0 z-10 flex items-center justify-center bg-center bg-no-repeat bg-cover  group"
      :style="{
        backgroundImage: 'url(\'' + thumbnail + '\')',
      }"
      @click="playClip"
    >
      <div class="absolute inset-0 bg-black opacity-50" />
      <div
        class="relative flex items-center justify-center bg-white rounded-full  group-hover:opacity-100 opacity-80 w-70px h-70px button"
      >
        <img src="@/assets/utility/play.svg" class="relative h-52px w-52px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    src: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
  },
  data() {
    return {
      isPlay: false,
    };
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
  methods: {
    playClip() {
      let clip = this.$refs["video-player"];

      if (clip) {
        clip.play();

        this.isPlay = true;
      }
    },
  },
};
</script>
