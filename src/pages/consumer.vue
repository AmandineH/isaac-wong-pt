<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover  p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage: 'url(\'' + `${bucket}/consumer.jpg` + '\')',
        }"
      >
        <div
          class="absolute transform rotate-45  -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
        ></div>

        <h1 class="relative z-10 supheader-1">{{ $t("consumer.consumer") }}</h1>
      </div>
    </div>

    <div class="bg-gray-E8E8F0 -mt-100px pt-100px mb-20px">
      <div class="items-center mx-auto max-w-1300px md:flex p-20px">
        <img
          src="@/assets/8prop/8prop.svg"
          alt="8prop"
          class="h-50px md:h-100px"
        />
        <p
          class="mt-20px md:mt-0 md:ml-20px text-gray-666666"
          v-html="$t('consumer.8prop')"
        ></p>
      </div>
    </div>

    <div class="flex-wrap mx-auto max-w-1300px md:flex">
      <div
        v-for="(product, key) in $t('consumer.products')"
        :key="key"
        class="md:w-1/2 p-20px"
      >
        <h1 class="text-blue-191f6C title-1 mb-10px">{{ product.title }}</h1>
        <p v-html="product.content" />
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
      title: `${this.$t("title")} - ${this.$t("consumer.consumer")}`,
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("consumer.consumer"),
        },
        {
          property: "og:image",
          content: `${STATIC_BUCKET}/consumer.jpg`,
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
