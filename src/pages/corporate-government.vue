<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover  p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage:
            'url(\'' + `${bucket}/corporate-government.jpg` + '\')',
        }"
      >
        <div
          class="absolute transform rotate-45  -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
        ></div>

        <h1
          class="relative z-10 supheader-1"
          v-html="$t('corporategovernment.corporategovernment')"
        />
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
          {{ $t("corporategovernment.weassist") }}
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
          {{ $t("corporategovernment.wecanprovide") }}
        </p>
      </div>
      <div class="flex items-center flex-1 md:flex-col m-20px">
        <img
          src="@/assets/utility/stats.svg"
          alt="stats"
          class="h-70px mb-20px"
        />
        <p class="md:text-center ml-20px text-gray-666666">
          {{ $t("corporategovernment.weareable") }}
        </p>
      </div>
      <div class="flex items-center flex-1 md:flex-col m-20px">
        <img
          src="@/assets/utility/idea.svg"
          alt="idea"
          class="h-70px mb-20px"
        />
        <p class="md:text-center ml-20px text-gray-666666">
          {{ $t("corporategovernment.weenable") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { STATIC_BUCKET } from "@/constants";

export default {
  layout: "default",
  head() {
    return {
      title: `${this.$t("title")} - ${this.$t(
        "corporategovernment.corporategovernment"
      )}`,
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        {
          hid: "description",
          hid: "description",
          name: "description",
          content: this.$t("corporategovernment.weassist"),
        },
        {
          property: "og:image",
          content: `${STATIC_BUCKET}/corporate-government.jpg`,
        },
      ],
    };
  },
  data() {
    return {
      bucket: STATIC_BUCKET,
    };
  },
};
</script>
