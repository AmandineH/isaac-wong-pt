<template>
  <div
    class="mx-auto max-w-1300px"
    :class="isLg ? 'py-52px px-32px' : 'py-32px px-24px'"
  >
    <div :class="isLg ? 'mb-32px' : 'mb-24px'">
      <p class="text-center text-black display-md-bold">
        They made it, you can too
      </p>
      <p class="mx-auto text-center text-gray-500 text-md-regular max-w-800px">
        Commit. Transform. Perform
      </p>
    </div>

    <div class="flex flex-col mx-auto gap-32px max-w-800px">
      <div
        v-for="(category, index) in categories.filter(
          (category) =>
            !$route.query.category || $route.query.category === category.key
        )"
        :key="category.key"
      >
        <p
          v-if="category.label"
          class="mb-24px display-md-bold underline text-center"
        >
          {{ category.label }}
        </p>

        <div class="flex flex-col gap-32px mb-24px">
          <div
            v-for="testimonial in category.testimonials.slice(
              category.offset,
              category.first +
                (category.offset / category.first) * category.first
            )"
            :key="`${category.key}-${testimonial.key}`"
          >
            <div class="bg-black shadow-md rounded-12px p-16px">
              <p class="text-white display-sm-bold mb-8px">
                <span class="uppercase">{{ testimonial.name }}</span>
                <span class="text-white text-xs-regular">{{
                  testimonial.profile
                }}</span>
              </p>

              <client-only>
                <p
                  class="text-white text-sm-bold mb-8px"
                  v-if="testimonial.category.length > 0"
                >
                  Service(s):
                  <span
                    v-for="(category, key) in testimonial.category"
                    :key="key"
                  >
                    {{
                      category
                        .split("-")
                        .join(" ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())
                    }}
                    <span v-if="key !== testimonial.category.length - 1"
                      >,</span
                    >
                  </span>
                </p>
              </client-only>

              <p class="text-white text-md-regular mb-16px">
                {{ testimonial.quote }}
              </p>

              <div class="grid grid-cols-2 gap-16px">
                <div
                  v-for="(asset, key) in testimonial.assets"
                  :key="key"
                  class="overflow-hidden rounded-6px md:rounded-12px"
                >
                  <div v-if="asset.type === 'video'" class="w-full h-full">
                    <VideoPlayer
                      :key="`${asset.key}-${isLg}`"
                      :src="isLg ? asset.srcDesktop || asset.src : asset.src"
                      :thumbnail="asset.thumbnail"
                      class="w-full h-full overflow-hidden flex items-center"
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

          <Pagination
            v-if="category.testimonials.length > 1"
            :initialValue="category.offset / category.first + 1"
            :pageSize="category.first"
            :totalCount="category.testimonials.length"
            @on-change="(value) => (category.offset = value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import VideoPlayer from "@/components/VideoPlayer.vue";
import Pagination from "@/components/Pagination.vue";

// data
import {
  isaacTestimonial,
  ptTestimonials,
  onlineTestimonials,
  mentorshipTestimonials,
} from "@/data/testimonials.js";

export default {
  head() {
    return this.$metadata.head({
      title: "Results & Testimonials",
    });
  },
  components: {
    VideoPlayer,
    Pagination,
  },
  data() {
    return {
      categories: [
        {
          label: "",
          testimonials: [isaacTestimonial],
          first: 1,
          offset: 0,
        },
        {
          key: "personal-training",
          label: "Personal Training",
          testimonials: ptTestimonials,
          first: 3,
          offset: 0,
        },
        {
          key: "online-coaching",
          label: "Online Coaching",
          testimonials: onlineTestimonials,
          first: 3,
          offset: 0,
        },
        {
          key: "mentorship",
          label: "Mentorship",
          testimonials: mentorshipTestimonials,
          first: 1,
          offset: 0,
        },
      ],
    };
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
