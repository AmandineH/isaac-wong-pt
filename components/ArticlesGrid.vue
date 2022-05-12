<template>
  <div>
    <Spinner
      v-if="loading"
      class="flex items-center justify-center h-150px m-20px"
    />
    <div v-else-if="articles.length > 0" class="flex flex-wrap ml-20px mt-20px">
      <a
        :href="'/news/' + article.articleId"
        v-for="(article, key) in articles"
        :key="key"
        class="md:w-1/3 pr-20px pb-20px"
      >
        <div
          v-if="article.layout === 'horizontal'"
          class="flex h-full bg-gray-E8E8F0"
        >
          <img
            :src="article.thumbnail"
            :alt="article.title || article.thumbnail"
            class="object-cover w-1/2 h-full min-h-200px"
          />
          <div class="body-3 text-gray-666666 p-20px">{{ article.title }}</div>
        </div>

        <div v-else class="h-full bg-gray-E8E8F0">
          <img
            :src="article.thumbnail"
            :alt="article.title || article.thumbnail"
            class="object-cover w-full h-200px"
          />
          <div class="body-3 text-gray-666666 p-20px">{{ article.title }}</div>
        </div>
      </a>
    </div>

    <center v-if="loadMore && hasNextPage">
      <button
        class="flex items-center border  border-blue-00ACD7 p-5px body-4 text-gray-666666 m-20px"
        @click="loadMoreArticles"
      >
        {{ $t("news.loadmorestories") }}
        <img src="@/assets/utility/arrow-light-blue.svg" alt="arrow" />
      </button>
    </center>
  </div>
</template>

<script>
// components
import Spinner from "@/components/Spinner.vue";

// graphql
import { GET_ARTICLES } from "@/graphql/articles.js";
import { setHeaderParams } from "@/plugins/apollo.js";

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      loading: true,
      articles: [],
      first: 9,
      offset: 0,
      hasNextPage: false,
    };
  },
  props: {
    nbArticles: {
      type: Number,
    },
    loadMore: {
      type: Boolean,
      default: true,
    },
  },
  async mounted() {
    this.loading = true;

    let res = await this.getArticles({}, this.nbArticles);

    if (res) {
      this.articles = res.articles;
      this.hasNextPage = res.hasNextPage;
    }

    this.loading = false;
  },
  methods: {
    async loadMoreArticles() {
      if (this.hasNextPage) {
        this.offset = this.offset + this.first;
        let res = await this.getArticles({}, this.first, this.offset);

        if (res) {
          this.articles.push(...res.articles);
          this.hasNextPage = res.hasNextPage;
        }
      }
    },
    async getArticles(filter, first = 9, offset = 0) {
      try {
        const res = await this.$apollo.query({
          query: GET_ARTICLES,
          variables: {
            filter: {
              published: { equalTo: true },
              tags: { equalTo: "rea" },
              lang: { equalTo: this.$i18n.locale },
              ...filter,
            },
            first: first,
            offset: offset,
          },
          ...setHeaderParams("USER"),
        });
        if (res) {
          return {
            articles: res.data.articles.nodes,
            hasNextPage: res.data.articles.pageInfo.hasNextPage,
          };
        }
      } catch (e) {}
    },
  },
};
</script>
