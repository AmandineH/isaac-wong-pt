<template>
  <div>
    <svg
      class="m-auto spinner animate-spin"
      :style="`width: ${width}; height: ${width};`"
      :width="width"
      :height="width"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      :viewBox="`0 0 ${width} ${width}`"
    >
      <circle
        class="circle"
        :style="`opacity: ${opacity};`"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke="currentColor"
        :stroke-width="strokeWidth"
        :stroke-dasharray="dash"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    currentColor: {
      default: "#313D6A",
    },
    width: {
      default: 32,
    },
    strokeWidth: {
      default: 2,
    },
    opacity: {
      default: 0.6,
    },
  },
  computed: {
    center() {
      return this.width / 2;
    },
    radius() {
      return this.width / 2 - this.strokeWidth;
    },
    dash() {
      return 3.14 * this.radius;
    },
  },
};
</script>
