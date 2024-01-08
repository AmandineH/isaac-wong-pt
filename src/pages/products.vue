<template>
  <div>
    <p class="text-black text-center header-2 py-370px px-24px">Coming Soon...</p>
  </div>
</template>

<script>
export default {
  head() {
    return this.$metadata.head();
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
