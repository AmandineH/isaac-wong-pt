<template>
  <div>
    <div>
      <div class="mx-auto max-w-1300px">
        <div
          class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px min-h-400px"
          :style="{
            backgroundImage: 'url(\'' + require('@/assets/images/corporate-government.jpg') + '\')',
          }"
        >
          <div
            class="absolute w-full transform rotate-45 bg-blue-0689BC left-100px md:-left-500px h-1000px -bottom-100px md:bottom-0"
          ></div>

          <h1 class="relative z-10 supheader-1">Corporate / Government</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default-light",
};
</script>