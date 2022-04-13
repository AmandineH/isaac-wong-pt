<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage:
            'url(\'' +
            require('@/assets/images/corporate-government.jpg') +
            '\')',
        }"
      >
        <div
          class="absolute transform rotate-45 -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
        ></div>

        <h1 class="relative z-10 supheader-1">Corporate / <br />Government</h1>
      </div>
    </div>

    <div class="bg-gray-E8E8F0 -mt-100px pt-100px mb-20px">
      <div class="flex items-center mx-auto max-w-1300px p-20px">
        <img
          src="@/assets/utility/building-search.svg"
          alt="building-search"
          class="h-60px md:h-100px"
        />
        <p class="ml-20px text-gray-666666">
          We assist companies, governments, NGOs and other organizations with
          tailored and targeted information, analytics and solutions to help
          with specific real estate needs.
        </p>
      </div>
    </div>

    <div class="mx-auto max-w-1300px md:flex">
      <div class="flex items-center flex-1 md:flex-col m-20px">
        <img
          src="@/assets/utility/data-search.svg"
          alt="data-search"
          class="h-70px mb-20px"
        />
        <p class="md:text-center ml-20px text-gray-666666">
          We can provide comprehensive and easy to access databases of
          properties, transactions and listings across Asia and beyond.
        </p>
      </div>
      <div class="flex items-center flex-1 md:flex-col m-20px">
        <img
          src="@/assets/utility/stats.svg"
          alt="stats"
          class="h-70px mb-20px"
        />
        <p class="md:text-center ml-20px text-gray-666666">
          We are able to develop sophisticated tools that enable insightful and
          intelligent decisions in the global real estate markets.
        </p>
      </div>
      <div class="flex items-center flex-1 md:flex-col m-20px">
        <img
          src="@/assets/utility/idea.svg"
          alt="idea"
          class="h-70px mb-20px"
        />
        <p class="md:text-center ml-20px text-gray-666666">
          We enable market players to leverage the power of data to through
          customized real-estate related products and services that will help
          them achieve their goals​.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
};
</script>