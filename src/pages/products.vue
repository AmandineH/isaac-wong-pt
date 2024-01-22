<template>
  <div>
    <p
      class="
        text-black text-center text-med-regular
        flex
        items-center
        justify-center
        h-70vh
      "
    >
      Coming Soon...
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return this.$metadata.head({
      title: "Products",
    });
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
