<template>
  <div>
    <div
      class="flex items-center overflow-hidden text-white bg-center bg-no-repeat bg-cover  min-h-400px"
      :style="{
        backgroundImage: 'url(\'' + require('@/assets/images/home.jpg') + '\')',
      }"
    >
      <div>
        <div class="mx-auto max-w-1300px p-40px">
          <h1 class="title-1 text-blue-00ACD7 mb-10px">
            {{ $t("index.realestateanalytics") }}
          </h1>
          <p class="text-white body-2 md:w-200px">
            {{ $t("index.weempowereveryone") }}
          </p>
        </div>
      </div>
    </div>

    <div class="relative px-20px">
      <div class="absolute w-full top-100px h-10px bg-blue-00ACD7 -ml-20px" />
      <div class="relative z-10 mx-auto max-w-1300px -mt-100px">
        <div
          class="p-40px bg-gray-E8E8F0 text-gray-666666"
          v-html="$t('index.intro')"
        ></div>
        <div class="md:flex">
          <div class="flex-1 text-white bg-blue-191f6C px-20px pb-20px group">
            <center>
              <img
                src="@/assets/utility/arrow-white.svg"
                alt="arrow"
                class="transform rotate-90 opacity-0  group-hover:opacity-100 pb-20px pt-10px"
              />
            </center>
            <h1 class="title-1 mb-10px">
              {{ $t("index.realestateanalytics") }}
            </h1>
            <p class="mb-20px body-3">
              {{ $t("index.introrea") }}
            </p>
            <a href="/about">
              <button
                class="flex items-center border border-blue-00ACD7 p-5px body-3"
              >
                {{ $t("cta.readmore") }}
                <img src="@/assets/utility/arrow-light-blue.svg" alt="arrow" />
              </button>
            </a>
          </div>
          <div class="flex-1 text-white bg-blue-00ACD7 px-20px pb-20px group">
            <center>
              <img
                src="@/assets/utility/arrow-white.svg"
                alt="arrow"
                class="transform rotate-90 opacity-0  group-hover:opacity-100 pb-20px pt-10px"
              />
            </center>
            <h1 class="title-1 mb-10px">{{ $t("index.consumer") }}</h1>
            <p class="mb-20px body-3">{{ $t("index.introconsumer") }}</p>
            <a href="/consumer">
              <button
                class="flex items-center border border-blue-191f6C p-5px body-3"
              >
                {{ $t("cta.readmore") }}
                <img src="@/assets/utility/arrow-dark-blue.svg" alt="arrow" />
              </button>
            </a>
          </div>
          <div class="flex-1 text-white bg-gray-666666 px-20px pb-20px group">
            <center>
              <img
                src="@/assets/utility/arrow-white.svg"
                alt="arrow"
                class="transform rotate-90 opacity-0  group-hover:opacity-100 pb-20px pt-10px"
              />
            </center>
            <h1 class="title-1 mb-10px">
              {{ $t("index.corporategovernment") }}
            </h1>
            <p class="mb-20px body-3">
              {{ $t("index.introcorporategovernment") }}
            </p>
            <a href="/corporate-government">
              <button
                class="flex items-center border border-blue-00ACD7 p-5px body-3"
              >
                {{ $t("cta.readmore") }}
                <img src="@/assets/utility/arrow-light-blue.svg" alt="arrow" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20px pt-40px">
      <!-- TODO: only is countryCode = SG -->
      <div class="mx-auto max-w-1300px">
        <div class="flex flex-col items-center">
          <h1 class="text-center title-1 text-gray-666666 mx-20px">
            {{ $t("news.newsstoriesandrecentdevelopments") }}
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/4 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <ArticlesGrid :nbArticles="3" :loadMore="false" />
          <a href="/news">
            <button
              class="flex items-center border  border-blue-00ACD7 p-5px body-4 text-gray-666666 mx-20px"
            >
              {{ $t("news.clickhereformorestories") }}
              <img src="@/assets/utility/arrow-light-blue.svg" alt="arrow" />
            </button>
          </a>
        </div>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="relative overflow-hidden text-white bg-blue-00ACD7 p-40px">
          <div
            class="absolute transform rotate-45  -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
          ></div>

          <div class="relative z-10 items-center md:flex">
            <img
              src="@/assets/images/join-us.jpg"
              alt="join-us"
              class="md:h-250px mb-20px md:mb-0"
            />
            <div class="md:ml-20px">
              <p class="mb-20px">
                {{ $t("careers.werecognizeouremployees") }}
              </p>
              <a href="careers" class="flex justify-center md:block">
                <button
                  class="flex items-center border  border-blue-191f6C p-5px body-3"
                >
                  {{ $t("careers.comejoinus") }}
                  <img src="@/assets/utility/arrow-dark-blue.svg" alt="arrow" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import ArticlesGrid from "@/components/ArticlesGrid.vue";

export default {
  layout: "default",
  components: {
    ArticlesGrid,
  },
};
</script>
