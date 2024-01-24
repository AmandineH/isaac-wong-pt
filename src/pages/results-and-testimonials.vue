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
        From smashing personal bests to embracing a healthier lifestyle, their
        success stories speak volumes. Ready to be the next success story? Let's
        embark on your fitness journey together! 💪🌟
      </p>
    </div>

    <div class="flex flex-col mx-auto mb-32px gap-32px max-w-800px">
      <div
        v-for="(testimonial, key) in testimonials.slice(
          offset,
          first + (offset / first) * first
        )"
        :key="key"
        class="bg-black shadow-md rounded-12px p-16px"
      >
        <p class="text-white display-sm-bold mb-8px">
          <span class="uppercase">{{ testimonial.name }}</span>
          <span class="text-white text-xs-regular">{{
            testimonial.profile
          }}</span>
        </p>

        <p class="text-white text-md-regular mb-16px">
          "{{ testimonial.quote }}"
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
            class="overflow-hidden rounded-12px"
            :class="asset.class"
          >
            <VideoPlayer
              v-if="asset.type === 'video'"
              :src="asset.src"
              :thumbnail="asset.thumbnail"
              class="w-full h-full overflow-hidden"
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
      first: 5,
      offset: 0,
    };
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    testimonials() {
      return [
        {
          key: "isaac",
          name: "Isaac",
          profile: "20s, Fitness",
          quote:
            "My first client is myself. Leading by example was the first thing I learnt in the SAF's Officer Cadet School and this principle has stuck with me throughout these years as a Personal Trainer and Fitness Coach. It would not sit right with me to be here today asking my clients to commit to the things they need to do to enter the fittest days of their lives if I had not done so myself!",
          assets: [
            {
              key: "isaac-before-after-front",
              type: "img",
              src: require("@/assets/testimonials/isaac-before-after-front.JPG"),
            },
            {
              key: "isaac-before-after-mix",
              type: "img",
              src: require("@/assets/testimonials/isaac-before-after-mix.JPG"),
            },
          ],
        },
        {
          key: "allan",
          name: "My Dad, Allan",
          profile: "60s, Education",
          quote:
            "Couple of months ago, while climbing the stairs in school, I had so much pain in my knee that I had to stop halfway and take a break, to the point that some of the students had to check in on me. That's when I knew I had to do something. I have lost 13kg, can now do more pull ups than what I did in National Service and for the first time in many years, I can climb stairs and run pain free.",
          assets: [
            {
              key: "allan-before-after-front",
              type: "img",
              src: require("@/assets/testimonials/allan-before-after-front.JPG"),
            },
            {
              key: "allan-before-after-side",
              type: "img",
              src: require("@/assets/testimonials/allan-before-after-side.JPG"),
            },
            {
              key: "allan-before-after-back",
              type: "img",
              src: require("@/assets/testimonials/allan-before-after-back.JPG"),
            },
            {
              key: "allan-video",
              type: "video",
              src: require("@/assets/testimonials/allan.mp4"),
              thumbnail: require("@/assets/testimonials/allan-thumbnail.png"),
            },
          ],
        },
        {
          key: "alicia",
          name: "Alicia",
          profile: "40s, Cyber Security",
          quote:
            "After having my kid, I couldn't lose weight... I needed to do something different and that's where Isaac stepped into the picture.",
          assets: [
            {
              key: "alicia-before-after-front",
              type: "img",
              src: require("@/assets/testimonials/alicia-before-after-front.JPG"),
            },
            {
              key: "alicia-before-after-side",
              type: "img",
              src: require("@/assets/testimonials/alicia-before-after-side.JPG"),
            },
            {
              key: "alicia-before-after-back",
              type: "img",
              src: require("@/assets/testimonials/alicia-before-after-back.JPG"),
            },
            {
              key: "alicia-video",
              type: "video",
              src: require("@/assets/testimonials/alicia.mp4"),
              thumbnail: require("@/assets/testimonials/alicia-thumbnail.png"),
            },
          ],
        },
        {
          key: "ridhwan",
          name: "Ridhwan",
          profile: "30s, Creative",
          quote:
            "I was always active since young, but I desired a greater physique! That’s when I found Isaac. Since then, I have lost 11kg and 13% bodyfat!",
          assets: [
            {
              key: "ridhwan-before-after-front",
              type: "img",
              src: require("@/assets/testimonials/ridhwan-before-after-front.jpg"),
              class: "col-span-2 row-span-2",
            },
            {
              key: "ridhwan-before-after-side",
              type: "img",
              src: require("@/assets/testimonials/ridhwan-before-after-side.jpg"),
            },
            {
              key: "ridhwan-before-after-back",
              type: "img",
              src: require("@/assets/testimonials/ridhwan-before-after-back.jpg"),
            },
            {
              key: "ridhwan-video",
              type: "video",
              src: require("@/assets/testimonials/ridhwan.mp4"),
              thumbnail: require("@/assets/testimonials/ridhwan-thumbnail.png"),
              class: "col-span-3",
            },
          ],
          cols: 3,
        },
        {
          key: "justin",
          name: "Justin",
          profile: "30s, Marketing",
          quote:
            "Diet is a huge barrier that stops me from getting my dream body. I like to eat a lot of junk food and tend to stress eat a lot. I have engaged 2 personal trainers before but due to the lack of nutritional follow up outside of the 1-hour sessions, I did not see much progress. Isaac, on the other hand, has monitored my daily weight and nutritional intake to ensure I reach my goals. He also ensures that I am pushed safely to my limits by programming intelligently and ensuring I train with good technique.",
          assets: [
            {
              key: "justin-before-after-front",
              type: "img",
              src: require("@/assets/testimonials/justin-before-after-front.JPG"),
            },
            {
              key: "justin-before-after-side",
              type: "img",
              src: require("@/assets/testimonials/justin-before-after-side.JPG"),
            },
            {
              key: "justin-before-after-back",
              type: "img",
              src: require("@/assets/testimonials/justin-before-after-back.JPG"),
            },
            {
              key: "justin-video",
              type: "video",
              src: require("@/assets/testimonials/justin.mp4"),
              thumbnail: require("@/assets/testimonials/justin-thumbnail.png"),
            },
          ],
        },
        {
          key: "angela-keith",
          name: "Angela & Keith",
          profile: "30s, Law & 30s, Policy Manager",
          quote:
            "We were both looking for something to do together as a couple while getting fitter and transforming our bodies for the upcoming wedding celebrations!",
          assets: [
            {
              key: "angela-before-after-front",
              type: "img",
              src: require("@/assets/testimonials/angela-before-after-front.jpg"),
            },
            {
              key: "angela-before-after-side",
              type: "img",
              src: require("@/assets/testimonials/angela-before-after-side.jpg"),
            },
            {
              key: "angela-before-after-back",
              type: "img",
              src: require("@/assets/testimonials/angela-before-after-back.jpg"),
            },
            {
              key: "keith-before-after-front",
              type: "img",
              src: require("@/assets/testimonials/keith-before-after-front.jpg"),
            },
            {
              key: "keith-before-after-side",
              type: "img",
              src: require("@/assets/testimonials/keith-before-after-side.jpg"),
            },
            {
              key: "keith-before-after-back",
              type: "img",
              src: require("@/assets/testimonials/keith-before-after-back.jpg"),
            },
            {
              key: "angela-keith-video",
              type: "video",
              src: require("@/assets/testimonials/angela-keith.mp4"),
              thumbnail: require("@/assets/testimonials/angela-keith-thumbnail.png"),
              class: "col-span-3",
            },
          ],
          cols: 3,
        },
        {
          key: "jingxin",
          name: "Jingxin",
          profile: "20s, Data Analytics",
          quote:
            "My expectations have been greatly surpassed. I have not only dropped more weight than what I put on during the pandemic, but I have also gained significant muscle mass and strength! I now look much better and can feel more confident for my wedding! Big thanks to Isaac for turning my life around!",
          assets: [
            {
              key: "jingxin-before-after-front",
              type: "img",
              src: require("@/assets/testimonials/jingxin-before-after-front.JPG"),
            },
            {
              key: "jingxin-before-after-side",
              type: "img",
              src: require("@/assets/testimonials/jingxin-before-after-side.JPG"),
            },
            {
              key: "jingxin-before-after-back",
              type: "img",
              src: require("@/assets/testimonials/jingxin-before-after-back.JPG"),
            },
            {
              key: "jingxin-video",
              type: "video",
              src: require("@/assets/testimonials/jingxin.mp4"),
              thumbnail: require("@/assets/testimonials/jingxin-thumbnail.png"),
            },
          ],
        },
        {
          key: "roger",
          name: "Roger",
          profile: "20s, Data Science",
          quote:
            "I ended up in some unhealthy habits which put me in a bad place, both physically and mentally. But Isaac helped me to lose weight, helped me build discipline.",
          assets: [
            {
              key: "roger-before-after-front",
              type: "img",
              src: require("@/assets/testimonials/roger-before-after-front.JPG"),
            },
            {
              key: "roger-before-after-side",
              type: "img",
              src: require("@/assets/testimonials/roger-before-after-side.JPG"),
            },
            {
              key: "roger-before-after-back",
              type: "img",
              src: require("@/assets/testimonials/roger-before-after-back.JPG"),
            },
            {
              key: "roger-video",
              type: "video",
              src: require("@/assets/testimonials/roger.mp4"),
              thumbnail: require("@/assets/testimonials/roger-thumbnail.png"),
            },
          ],
        },
        {
          key: "christopher",
          name: "Christopher",
          profile: "20s, Psychology",
          quote:
            "Isaac has really helped me understand more about training and nutrition. Over the last 9 months, I have lost 14kg and 16% bodyfat!",
          assets: [
            {
              key: "christopher-before-after-front",
              type: "img",
              src: require("@/assets/testimonials/christopher-before-after-front.jpg"),
            },
            {
              key: "christopher-before-after-side",
              type: "img",
              src: require("@/assets/testimonials/christopher-before-after-side.jpg"),
            },
            {
              key: "christopher-video",
              type: "video",
              src: require("@/assets/testimonials/christopher.mp4"),
              thumbnail: require("@/assets/testimonials/christopher-thumbnail.png"),
              class: "col-span-2 row-span-2",
            },
            {
              key: "christopher-before-after-back",
              type: "img",
              src: require("@/assets/testimonials/christopher-before-after-back.jpg"),
              class: "col-span-2",
            },
          ],
          cols: 4,
        },
        {
          key: "jaden",
          name: "Jaden",
          profile: "30s, Strength Coach",
          quote:
            "My Squat went from 110kg to 135kg, my Bench Press from 70kg to 85kg and my Deadlift from 130kg to 180kg!",
          assets: [
            {
              key: "jaden-video",
              type: "video",
              src: require("@/assets/testimonials/jaden.mp4"),
              thumbnail: require("@/assets/testimonials/jaden-thumbnail.png"),
            },
          ],
          cols: 1,
        },
        {
          key: "darren",
          name: "Darren",
          profile: "20s, Financial Advisor",
          quote:
            "Having lost a lot of belly fat and gained significant muscle mass, I now feel a lot more confident for my wedding!",
          assets: [
            {
              key: "darren-video",
              type: "video",
              src: require("@/assets/testimonials/darren.mp4"),
              thumbnail: require("@/assets/testimonials/darren-thumbnail.png"),
            },
          ],
          cols: 1,
        },
      ];
    },
  },
};
</script>
