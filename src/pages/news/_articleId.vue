<template>
  <div v-if="loading" class="m-20px">
    <Spinner
      v-if="loading"
      class="flex items-center justify-center h-150px"
    />
  </div>
  <div v-else-if="article">
    <div class="mx-auto max-w-1300px mb-20px">
      <div class="mx-20px">
        <p class="fine-prints-2 text-gray-666666">
          <a href="/news">News</a> > {{ article.title }}
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
          Latest Stories
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
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage:
            'url(\'' + require('@/assets/images/news.jpg') + '\')',
        }"
      >
        <div
          class="absolute transform rotate-45 -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
        ></div>

        <h1 class="relative z-10 supheader-1">
          News, Stories and Recent Developments
        </h1>
      </div>
    </div>
    <div class="mx-auto max-w-1300px">
      <ArticlesGrid />
    </div>
  </div>
</template>

<script>
// components
import Spinner from "@/components/Spinner.vue";
import ArticlesGrid from "@/components/ArticlesGrid.vue";

// graphql
import { GET_ARTICLES } from "@/graphql/articles.js";
import { setHeaderParams } from "@/plugins/apollo.js";

export default {
  layout: "default",
  components: {
    Spinner,
    ArticlesGrid,
  },
  data() {
    return {
      loading: true,
      article: null
    };
  },
  async mounted() {
    if (this.$route.params.articleId) {
      this.loading = true
      let res = await this.getArticles(
        {
          articleId: { equalTo: this.$route.params.articleId },
        }
      );

      if (res && res.articles[0]) {
        this.article = res.articles[0];
      }
      this.loading = false
    } else {
      this.loading = false
    }
  },
  methods: {
    getDate(date) {
      return this.$dayjs(date).format("DD MMMM YYYY");
    },
    async getArticles(filter, first = 9, offset = 0) {
      try {
        const res = await this.$apollo.query({
          query: GET_ARTICLES,
          variables: {
            filter: {
              published: { equalTo: true },
              ...filter,
            },
            first: first,
            offset: offset,
          },
          ...setHeaderParams("USER")
        });
        if (res) {
          return {
            articles: res.data.articles.nodes,
            hasNextPage: res.data.articles.pageInfo.hasNextPage,
          };
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>