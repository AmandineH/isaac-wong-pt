<template>
  <div>
    <div class="bg-black">
      <div
        class="mx-auto max-w-1300px relative"
        :class="isLg ? 'px-40px py-80px' : 'py-40px px-20px'"
      >
        <img
          src="@/assets/utility/arrow-blue.svg"
          alt="arrow"
          class="absolute transform rotate-180"
          :class="
            isLg ? 'top-20px w-400px right-40px' : 'top-30px w-200px right-20px'
          "
        />

        <div class="" :class="isLg ? 'mb-40px' : 'mb-20px'">
          <p class="text-white supheader-1 text-center">
            They made it, you can too
          </p>
        </div>

        <div class="grid grid-cols-1 gap-40px">
          <div v-for="(testimonial, key) in testimonials" :key="key">
            <p class="text-white title-1 mb-10px">
              {{ testimonial.name }}
              <span class="text-blue-536FFD body-2">{{
                testimonial.profile
              }}</span>
            </p>
            <p class="text-white body-2 mb-20px">"{{ testimonial.quote }}"</p>

            <div v-if="isLg" class="grid gap-20px mb-20px grid-cols-3">
              <div
                v-for="(asset, key) in testimonial.assets"
                :key="key"
                class="rounded-10px overflow-hidden"
                :class="asset.type === 'video' ? 'col-span-3' : 'col-span-1'"
              >
                <div
                  v-if="asset.type === 'video'"
                  class="button relative"
                  @click="playClip(asset.key)"
                >
                  <video :id="asset.key" controls class="h-full w-full">
                    <source :src="asset.src" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div
                    :id="'play-' + asset.key"
                    class="
                      absolute
                      inset-0
                      z-10
                      flex
                      items-center
                      justify-center
                      bg-center bg-no-repeat bg-cover
                    "
                    :style="{
                      backgroundImage: 'url(\'' + asset.thumbnail + '\')',
                    }"
                  >
                    <div class="absolute inset-0 bg-black opacity-50" />
                    <img
                      src="@/assets/utility/play.svg"
                      class="h-50px w-50px relative"
                    />
                  </div>
                </div>
                <img
                  v-else
                  :src="asset.src"
                  class="w-full h-full object-center object-contain"
                />
              </div>
            </div>

            <Carousel
              v-else
              :slides="testimonial.assets"
              :colorCode="'#FFFFFF'"
              :activeColorCode="'#536FFD'"
              class="mb-20px"
            >
              <template #slide="{ slide }">
                <div
                  class="rounded-10px overflow-hidden flex items-center h-full"
                  :class="slide.type === 'video' ? 'col-span-3' : 'col-span-1'"
                >
                  <div
                    v-if="slide.type === 'video'"
                    class="button relative"
                    @click="playClip(slide.key)"
                  >
                    <video :id="slide.key" controls class="h-full w-full">
                      <source :src="slide.src" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div
                      :id="'play-' + slide.key"
                      class="
                        absolute
                        inset-0
                        z-10
                        flex
                        items-center
                        justify-center
                        bg-center bg-no-repeat bg-cover
                      "
                      :style="{
                        backgroundImage: 'url(\'' + slide.thumbnail + '\')',
                      }"
                    >
                      <div class="absolute inset-0 bg-black opacity-50" />
                      <img
                        src="@/assets/utility/play.svg"
                        class="h-50px w-50px relative"
                      />
                    </div>
                  </div>
                  <img
                    v-else
                    :src="slide.src"
                    class="w-full h-full object-center object-contain"
                  />
                </div>
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>

    <Contact />
  </div>
</template>

<script>
// components
import Carousel from "@/components/Carousel.vue";
import Contact from "@/components/Contact.vue";

export default {
  components: {
    Carousel,
    Contact,
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
          profile: "26, Fitness",
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
          key: "alicia",
          name: "Alicia",
          profile: "42, Banking & Finance",
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
          key: "roger",
          name: "Roger",
          profile: "29, Data Scientist",
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
          key: "allan",
          name: "Allan",
          profile: "61, Senior Lecturer",
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
          key: "jingxin",
          name: "Jingxin",
          profile: "25, Data Analyst",
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
          key: "justin",
          name: "Justin",
          profile: "34, Sales Engineer",
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
          key: "jaden",
          name: "Jaden",
          profile: "31, Strength Coach",
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
        },
        {
          key: "darren",
          name: "Darren",
          profile: "26, Financial Advisor",
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
        },
      ];
    },
  },
  methods: {
    playClip(id) {
      let clip = document.getElementById(id);

      if (clip) {
        clip.play();

        let pauseButton = document.getElementById("play-" + id);
        if (pauseButton) {
          pauseButton.classList.add("hidden");
        }
      }
    },
  },
};
</script>
