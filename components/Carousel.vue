<template>
<div class="relative">
  <div v-if="dots" class="flex justify-center mb-20px">
    <button
      v-for="(slide, key) in slides" :key="key"
      class="hover:opacity-75"
      :class="[key === index ? '' : 'opacity-50']"
      @click="() => goTo(key)">
        <div
          class="rounded-full btn w-10px h-10px mx-10px"
          :class="[key === index ? 'bg-blue-00ACD7' : 'bg-gray-E8E8F0']" />
    </button>
  </div>
  <div>
    <slot :name="slides[index]" />
  </div>
  
  <div
    v-if="controls"
    class="absolute left-0 z-50 top-1/2 hover:opacity-75 mx-20px"
    @click="() => goTo(index - 1)">
    <img
      src="@/assets/utility/arrow-white.svg"
      alt="arrow"
      class="transform rotate-180" />
  </div>
  <div
    v-if="controls"
    class="absolute right-0 z-50 top-1/2 hover:opacity-75 mx-20px"
    @click="() => goTo(index + 1)">
    <img
      src="@/assets/utility/arrow-white.svg"
      alt="arrow" />
  </div>
</div>
</template>


<script>
export default {
  data () {
    return {
      index: 0
    }
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
    dots: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goTo(index) {
      if (index > this.slides.length - 1) {
        this.index = 0;
      } else if (index < 0) {
        this.index = this.slides.length - 1;
      } else {
        this.index = index;
      }
    }
  }
}
</script>