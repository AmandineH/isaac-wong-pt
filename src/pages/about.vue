<template>
  <div>
    <img :src="`${bucket}/about.jpg`" alt="about" class="w-full min-h-600px" />

    <div class="relative">
      <div class="absolute w-full top-50px h-10px bg-blue-00ACD7" />
      <div
        class="relative z-10 mx-auto max-w-1300px md:-mt-50px md:flex p-20px"
      >
        <div
          v-for="(vision, key) in $t('about.visions')"
          :key="key"
          class="flex-1 text-white px-20px py-20px"
          :class="bgColors[key]"
        >
          <h1 class="text-center title-1 mb-10px" v-html="vision.title" />
          <p class="body-3">
            {{ vision.content }}
          </p>
        </div>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="flex flex-col items-center">
          <h1 class="text-center title-1 text-blue-191f6C">
            {{ $t("about.aboutus.title") }}
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/3 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <div>
            <div class="my-20px">
              <p
                v-for="(content, key) in $t('about.aboutus.content')"
                :key="key"
                v-html="content"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { STATIC_BUCKET } from "@/constants";

export default {
  layout: "default",
  data() {
    return {
      bgColors: ["bg-blue-191f6C", "bg-blue-00ACD7", "bg-gray-666666"],
      bucket: STATIC_BUCKET,
    };
  },
  head() {
    return {
      title: `${this.$t("title")} - ${this.$t("about.aboutus.title")}`,
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("about.visions")[0].content,
          keywords: this.$t("about.visions")
            .map((v) => v.title)
            .join(","),
        },
        {
          property: "og:image",
          content: `${STATIC_BUCKET}/about.jpg`,
        },
      ],
    };
  },
  computed: {
    countryCode() {
      return this.$store.state.country.countryCode;
    },
  },
};
</script>
