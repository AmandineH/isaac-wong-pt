<template>
  <div class="mx-auto max-w-1300px" :class="isLg ? 'py-52px' : 'py-32px'">
    <!-- Header -->
    <div :class="isLg ? 'mb-32px px-32px' : 'mb-24px px-24px'">
      <p class="text-center text-black display-md-bold">
        They made it, you can too
      </p>
      <p class="mx-auto text-center text-gray-500 text-md-regular max-w-800px">
        Commit. Transform. Perform
      </p>
    </div>

    <!-- Categories -->
    <div class="flex flex-col gap-32px">
      <div
        v-for="testimonial in category.paginatedTestimonials"
        v-if="category.paginatedTestimonials.length"
        :key="`${category.key}-${testimonial.key}`"
      >
        <p
          v-if="category.label"
          class="text-center display-xs-bold sticky top-[60px] z-30 py-16px bg-primary-blue text-white uppercase mb-24px"
          :class="isLg ? 'px-32px' : 'px-24px'"
        >
          {{ category.label }}
        </p>

        <div
          class="flex flex-col mx-auto gap-32px max-w-800px"
          :class="isLg ? 'px-32px' : 'px-24px'"
        >
          <div
            v-for="testimonial in category.paginatedTestimonials"
            :key="`${category.key}-${testimonial.key}`"
          >
            <!-- Testimonial Card -->
            <div class="bg-black shadow-md rounded-12px p-16px">
              <p class="text-white display-sm-bold mb-8px">
                <span class="uppercase">{{ testimonial.name }}</span>
                <span class="text-white text-xs-regular">
                  {{ testimonial.profile }}
                </span>
              </p>

              <client-only>
                <div v-if="testimonial.category?.length">
                  <p class="text-white text-sm-bold mb-8px">
                    Service(s):
                    <span v-for="(cat, key) in testimonial.category" :key="key">
                      {{
                        cat
                          .split("-")
                          .join(" ")
                          .replace(/\b\w/g, (c) => c.toUpperCase())
                      }}
                      <span v-if="key !== testimonial.category.length - 1"
                        >,</span
                      >
                    </span>
                  </p>
                </div>
              </client-only>

              <p
                v-html="testimonial.quote"
                class="text-white text-md-regular mb-16px"
              ></p>

              <div class="grid grid-cols-2 gap-16px">
                <div
                  v-for="(asset, key) in testimonial.assets"
                  :key="key"
                  class="overflow-hidden rounded-6px md:rounded-12px"
                  :class="asset.class"
                >
                  <div v-if="asset.type === 'video'" class="w-full h-full">
                    <VideoPlayer
                      :key="`${asset.key}-${isLg}`"
                      :src="isLg ? asset.srcDesktop || asset.src : asset.src"
                      :thumbnail="asset.thumbnail"
                      class="flex items-center w-full h-full overflow-hidden"
                    />
                  </div>

                  <img
                    v-else
                    :src="asset.src"
                    class="object-contain object-center w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="isLg ? 'px-32px' : 'px-24px'">
        <Pagination
          :initialValue="offset / first + 1"
          :pageSize="first"
          :totalCount="totalCount * first"
          @on-change="onPageChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import Pagination from "@/components/Pagination.vue";

import {
  isaacTestimonial,
  ptTestimonials,
  onlineTestimonials,
  mentorshipTestimonials,
} from "@/data/testimonials.js";

export default {
  components: {
    VideoPlayer,
    Pagination,
  },

  data() {
    return {
      first: 8,
      offset: 0,
      categories: [
        {
          key: "featured",
          label: "",
          testimonials: [isaacTestimonial],
          perPage: 1,
        },
        {
          key: "personal-training",
          label: "Personal Training",
          testimonials: ptTestimonials,
          perPage: 3,
        },
        {
          key: "online-coaching",
          label: "Online Coaching",
          testimonials: onlineTestimonials,
          perPage: 3,
        },
        {
          key: "mentorship",
          label: "Coach's Mentorship / Fitness Business Consultancy",
          testimonials: mentorshipTestimonials,
          perPage: 1,
        },
      ],
    };
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },

    paginatedCategories() {
      return this.categories
        .filter(
          (element) =>
            !this.$route.query.category ||
            element.key === this.$route.query.category
        )
        .map((category) => {
          const totalCountForCategory = Math.floor(
            category.testimonials.length / category.perPage
          );

          let pageNumber = this.offset / this.first;

          // Clamp to last page if category runs out
          pageNumber = Math.min(
            pageNumber,
            Math.max(totalCountForCategory - 1, 0)
          );

          const start = pageNumber * category.perPage;
          const end = start + category.perPage;

          return {
            ...category,
            paginatedTestimonials: category.testimonials
              ? category.testimonials.slice(start, end)
              : [],
          };
        });
    },

    // Pagination length driven by the LONGEST category
    totalCount() {
      return Math.max(
        ...this.categories
          .filter(
            (element) =>
              !this.$route.query.category ||
              element.key === this.$route.query.category
          )
          .map((c) => Math.floor(c.testimonials.length / c.perPage))
      );
    },
  },
  methods: {
    onPageChange(value) {
      this.offset = value;

      // scroll to top of page
      window.scrollTo({
        top: 0,
        behavior: "smooth", // optional
      });
    },
  },
};
</script>