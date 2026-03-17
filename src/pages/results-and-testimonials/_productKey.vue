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
      <div>
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
            v-for="testimonial in category.testimonials.slice(
              offset,
              offset + first
            )"
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
                <p
                  v-if="testimonial.category?.length"
                  class="text-white text-sm-bold mb-8px"
                >
                  Service(s):
                  <span v-for="(cat, key) in testimonial.category" :key="key">
                    {{
                      cat
                        .split("-")
                        .join(" ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())
                    }}
                    <span v-if="key !== testimonial.category.length - 1"
                      >,
                    </span>
                  </span>
                </p>
              </client-only>

              <p
                v-html="testimonial.quote"
                class="text-white text-md-regular mb-16px"
              />

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
        },
        {
          key: "personal-training",
          label: "Personal Training",
          testimonials: ptTestimonials,
        },
        {
          key: "online-coaching",
          label: "Online Coaching",
          testimonials: onlineTestimonials,
        },
        {
          key: "mentorship",
          label: "Coach's Mentorship / Fitness Business Consultancy",
          testimonials: mentorshipTestimonials,
        },
      ],
    };
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },

    category() {
      return this.categories.find(
        (element) => element.key === this.$route.params.productKey
      );
    },
    totalCount() {
      return Math.ceil(this.category.testimonials.length / this.first);
    },
  },
  methods: {
    onPageChange(value) {
      this.offset = value;

      // scroll to top of page
      window.scrollTo(0, 0);
    },
  },
};
</script>