<template>
  <div>
    <div
      class="relative overflow-hidden p-20px text-white m-20px bg-center bg-no-repeat bg-cover min-h-200px"
      :style="{
        backgroundImage: 'url(\'' + require('@/assets/join-us.png') + '\')',
      }"
    >
      <div
        class="absolute bg-blue-0D86C0 w-full"
        style="transform: rotate(-45deg); left: -500px; height: 1000px; bottom: 0;"
      ></div>

      <h1 class="supheader-1 relative z-10">Consumer</h1>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default-light",
};
</script>