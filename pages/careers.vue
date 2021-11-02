<template>
  <div>
    <div
      class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px m-20px min-h-400px"
      :style="{
        backgroundImage: 'url(\'' + require('@/assets/images/career.jpg') + '\')',
      }"
    >
      <div
        class="absolute w-full bg-blue-0689BC"
        style="transform: rotate(-45deg); left: -500px; height: 1000px; bottom: 0;"
      ></div>

      <h1 class="relative z-10 supheader-1">Careers</h1>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default-light",
};
</script>