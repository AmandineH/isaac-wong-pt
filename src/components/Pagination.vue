<template>
  <div v-if="pagination > 1" class="flex items-center justify-center gap-2px">
    <div class="flex items-center justify-center p-8px w-40px">
      <img
        src="@/assets/utility/arrow-right-gray.svg"
        @click="goTo(index - 1)"
        alt="arrow"
        class="transform rotate-180 button"
      />
    </div>

    <template v-if="pagination > 5 && index > maxShow + 1">
      <div
        @click="goTo(1)"
        class="text-center text-gray-500 text-sm-medium p-8px min-w-40px button"
      >
        1
      </div>

      <div
        v-if="pagination > 1 + maxShow"
        class="text-center text-gray-500 text-sm-medium p-8px min-w-40px"
      >
        ...
      </div>
    </template>

    <template
      v-for="i in pagination <= 5
        ? pagination
        : generateNumberArrayAroundIndex(index, maxShow)"
    >
      <div
        :key="i"
        @click="goTo(i)"
        class="
          flex
          items-center
          justify-center
          text-center
          rounded-4px
          p-8px
          button
          text-sm-medium
          min-w-40px
        "
        :class="[i === index ? 'bg-primary-blue text-white' : ' text-gray-500']"
      >
        {{ i }}
      </div>
    </template>

    <template v-if="pagination > 5 && index < pagination - maxShow">
      <div
        v-if="index < pagination - maxShow"
        class="text-center text-gray-500 text-sm-medium p-8px min-w-40px"
      >
        ...
      </div>

      <div
        @click="goTo(pagination)"
        class="text-center text-gray-500 text-sm-medium p-8px button min-w-40px"
      >
        {{ pagination }}
      </div>
    </template>

    <div class="flex items-center justify-center p-8px w-40px">
      <img
        src="@/assets/utility/arrow-right-gray.svg"
        @click="goTo(index + 1)"
        alt="arrow"
        class="button"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
    };
  },
  props: {
    initialValue: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: [Number, String],
      default: 10,
    },
    totalCount: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    pagination() {
      return Math.ceil(this.totalCount / this.pageSize);
    },
    maxShow() {
      return this.isLg ? 3 : 2;
    },
  },
  watch: {
    initialValue() {
      this.index = this.initialValue;
    },
  },
  mounted() {
    this.index = this.initialValue;
  },
  methods: {
    goTo(index) {
      if (index > this.pagination) {
        this.index = 1;
      } else if (index < 1) {
        this.index = this.pagination;
      } else {
        this.index = index;
      }

      this.$emit("on-change", (this.index - 1) * this.pageSize);
    },
    generateNumberArrayAroundIndex(index, maxShow) {
      const result = [];

      for (let i = index - maxShow; i <= index + maxShow; i++) {
        if (i > 0 && i <= this.pagination) {
          result.push(i);
        }
      }

      return result;
    },
  },
};
</script>
