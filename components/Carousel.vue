<template>
<div>
  <div class="flex justify-center mb-20px">
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
  },
  methods: {
    goTo(index) {
      if (index > this.slides.length - 1) {
        this.index = 0;
      } else if (index < 0) {
        this.index = slides.length - 1;
      } else {
        this.index = index;
      }
    }
  }
}
</script>