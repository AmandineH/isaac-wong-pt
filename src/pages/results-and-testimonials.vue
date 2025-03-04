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

    <div class="flex flex-col mx-auto mb-32px gap-32px max-w-800px">
        <div
          v-for="(testimonial, key) in testimonials.slice(
            offset,
            first + (offset / first) * first
          )"
          :key="testimonial.key"
        >
          <client-only>
            <p 
              v-if="testimonial.firstOfType"
              class="pb-24px display-md-bold underline text-center"
            >
              {{ 
                testimonial.category[testimonial.category.length - 1]
                  .split('-').join(' ').replace(/\b\w/g, (char) => char.toUpperCase()) 
              }}
            </p>
          </client-only>

          <div class="bg-black shadow-md rounded-12px p-16px">
            <p class="text-white display-sm-bold mb-8px">
              <span class="uppercase">{{ testimonial.name }}</span>
              <span class="text-white text-xs-regular">{{ testimonial.profile }}</span>
            </p>

            <client-only>
              <p class="text-white text-sm-bold mb-8px" v-if="testimonial.category.length > 0">
                Service(s): 
                <span
                  v-for="(category, key) in testimonial.category"
                  :key="key"
                >
                  {{ category.split('-').join(' ').replace(/\b\w/g, (char) => char.toUpperCase()) }}
                  <span v-if="key !== (testimonial.category.length - 1)">,</span>
                </span>
              </p>
            </client-only>

            <p class="text-white text-md-regular mb-16px">
              {{ testimonial.isNotQuote ? '' : '"' }}{{ testimonial.quote }}{{ testimonial.isNotQuote ? '' : '"' }}
            </p>

            <div
              class="grid grid-cols-2 gap-16px"
              :style="`grid-template-columns: repeat(${
                testimonial.cols || 2
              }, minmax(0, 1fr));`"
            >
              <div
                v-for="(asset, key) in testimonial.assets"
                :key="key"
                class="overflow-hidden rounded-6px md:rounded-12px"
                :class="asset.class"
              >
                <VideoPlayer
                  v-if="asset.type === 'video'"
                  :key="asset.key"
                  :src="asset.src"
                  :thumbnail="asset.thumbnail"
                  class="w-full h-full max-h-[174px] md:max-h-[470px] overflow-hidden flex items-center"
                />
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

    <Pagination
      :initialValue="offset / first + 1"
      :pageSize="first"
      :totalCount="testimonials.length"
      @on-change="(value) => (offset = value)"
    />
  </div>
</template>

<script>
// components
import VideoPlayer from "@/components/VideoPlayer.vue";
import Pagination from "@/components/Pagination.vue";

// data
import { ptTestimonials, onlineTestimonials, mentorshipTestimonials, sortedTestimonials } from "@/data/testimonials.js";

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
      first: 10,
      offset: 0,
    };
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    testimonials() {
      const category = this.$route.query.category;
      if (category) {
        let filteredTestimonials = [];
        if (category === 'online-coaching') filteredTestimonials = onlineTestimonials;
        if (category === 'mentorship') filteredTestimonials = mentorshipTestimonials;
        if (category === 'personal-training') filteredTestimonials = ptTestimonials;

        return filteredTestimonials.map((t, index) => ({ ...t, firstOfType: (index === 0 ? true : false) }));
      }

      let nextCategory = '';
      return sortedTestimonials.map((t_, index) => {
        const t = { ...t_ };
        if (t.category.length < 1) return t;
        if (index === 10) nextCategory = '';
        if (t.category[t.category.length - 1] !== nextCategory) {
          nextCategory = t.category[t.category.length - 1];
          t.firstOfType = true;
        } else {
          t.firstOfType = false;
        }

        return t;
      });
    },
  },
};
</script>
