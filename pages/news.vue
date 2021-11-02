<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage: 'url(\'' + require('@/assets/images/news.jpg') + '\')',
        }"
      >
        <div
        class="absolute w-full transform rotate-45 bg-blue-0689BC left-50px md:-left-500px h-1000px -bottom-50px md:bottom-100px"
        ></div>

        <h1 class="relative z-10 supheader-1">News, stories and recent developments</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default-light",
};
</script>