<template>
  <div v-if="article">
    <div class="mx-auto max-w-1300px mb-20px">
      <div class="mx-20px">
        <p class="fine-prints-2 text-gray-666666">
          <a href="/news">{{ $t("news.news") }}</a> > {{ article.title }}
        </p>
        <img
          v-if="article.thumbnail"
          :src="article.thumbnail"
          :alt="article.title || article.thumbnail"
          class="object-cover w-full my-20px max-h-400px"
        />
        <h1 class="text-blue-00ACD7 header-1 mb-10px">
          {{ article.title }}
        </h1>
        <p class="fine-prints-2 text-gray-666666">
          {{ getDate(article.publicationDate) }}
        </p>
        <div
          v-html="article.content"
          class="my-20px body-3 text-gray-666666"
        ></div>
      </div>

      <div>
        <h1 class="text-center title-1 text-gray-666666 mx-20px">
          {{ $t("news.lateststories") }}
          <div class="flex mx-auto w-300px mt-10px">
            <span class="w-1/4 h-2px bg-blue-191f6C"></span>
            <span class="flex-grow h-2px bg-blue-00ACD7"></span>
          </div>
        </h1>
        <ArticlesGrid :nbArticles="3" :loadMore="false" />
      </div>
    </div>
  </div>
  <div v-else>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover  p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage: 'url(\'' + `${bucket}/news.jpg` + '\')',
        }"
      >
        <div
          class="absolute transform rotate-45  -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
        ></div>

        <h1 class="relative z-10 supheader-1">
          {{ $t("news.newsstoriesandrecentdevelopments") }}
        </h1>
      </div>
    </div>
    <div class="mx-auto max-w-1300px">
      <ArticlesGrid />
    </div>
  </div>
</template>

<script>
import { STATIC_BUCKET } from "@/constants";

// components
import Spinner from "@/components/Spinner.vue";
import ArticlesGrid from "@/components/ArticlesGrid.vue";

// graphql
import { getArticles } from "@/graphql/articles.js";

export default {
  layout: "default",
  components: {
    Spinner,
    ArticlesGrid,
  },
  head() {
    return {
      title:
        this.article && this.article.title
          ? this.article.title
          : `${this.$t("title")}`,
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            this.article && this.article.description
              ? this.article.description
              : this.$t("index.weempowereveryone"),
          keywords: this.article && this.article.tags ? this.article.tags : "",
        },
        {
          property: "og:image",
          content:
            this.article && this.article.thumbnail
              ? this.article.thumbnail
              : "",
        },
      ],
    };
  },
  data() {
    return {
      article: null,
      bucket: STATIC_BUCKET,
    };
  },
  async asyncData({ app, params, req }) {
    const client = app.apolloProvider.defaultClient;

    let host;
    if (process.server) {
      host = req.headers.host;
    }

    let article;

    if (params?.articleId) {
      let res = await getArticles(
        client,
        {
          filter: {
            published: { equalTo: true },
            lang: { equalTo: this.$i18n.locale },
            articleId: { equalTo: params.articleId },
          },
          first: 1,
        },
        host
      );

      if (res?.articles?.length) {
        article = res.articles[0];
      }
    }

    return {
      article,
    };
  },
  methods: {
    getDate(date) {
      return this.$dayjs(date).format("DD MMMM YYYY");
    },
  },
};
</script>
