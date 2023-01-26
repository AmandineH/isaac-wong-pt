<template>
  <div
    v-if="slides && slides.length > 0"
    class="relative carousel-container"
    @touchstart="autoplayStop = true"
    @click="autoplayStop = true"
  >
    <client-only>
      <carousel
        :perPage="1"
        :paginationEnabled="false"
        :loop="true"
        :autoplay="!autoplayStop && autoplay"
        :autoplayTimeout="8000"
        :autoplayHoverPause="true"
        :navigate-to="index"
        @pageChange="(value) => (index = value)"
        class="carousel"
      >
        <slide v-for="(slide, key) in slides" :key="key">
          <slot name="slide" :slide="slide" />
        </slide>
      </carousel>
    </client-only>

    <div
      v-if="slides.length > 1"
      class="flex justify-center carousel-pagination gap-5px mt-20px"
    >
      <button
        v-for="(item, key) in slides"
        :key="key"
        @click="goTo(key)"
        class="rounded-full h-10px pagination-dot transition-all"
        :class="index === key ? 'w-40px' : 'w-10px'"
        :style="
          index === key
            ? `background-color: ${activeColorCode}`
            : `background-color: ${colorCode}`
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselPagination",
  props: {
    slides: {
      type: Array,
    },
    initialValue: {
      type: Number,
      default: 0,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    colorCode: {
      type: String,
      default: "#000000",
    },
    activeColorCode: {
      type: String,
      default: "#2B986B",
    },
  },
  data() {
    return {
      index: 0,
      autoplayStop: false,
    };
  },
  mounted() {
    this.index = this.initialValue;
  },
  methods: {
    goTo(index) {
      this.index = index;
    },
  },
};
</script>
