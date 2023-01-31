<template>
  <div>
    <div
      class="
        bg-center bg-no-repeat bg-cover
        h-80vh
        flex
        items-center
        justify-center
        relative
      "
      :style="{
        backgroundImage:
          'url(\'' +
          (isLg
            ? require('@/assets/services/services-banner.jpg')
            : require('@/assets/services/services-banner-mobile.jpg')) +
          '\')',
      }"
    >
      <div class="absolute inset-0 bg-black opacity-50" />
      <div
        class="relative"
        :class="isLg ? 'px-40px py-80px' : 'px-20px py-40px'"
      >
        <p
          class="text-white supheader-1 mb-20px"
          :class="isLg ? '' : 'text-center'"
        >
          Results Based. Enjoyment. Data Driven.
        </p>

        <div class="flex gap-20px justify-center">
          <a
            :href="`https://wa.me/+6597567270?text=${encodeURIComponent(
              'Hi, I would like to know more about your Personal Training services. \nName: \nGender: \nAge: \nPre-existing injuries / medical conditions / illnesses / diseases: \nExercise history: \nGoals:'
            )}`"
            target="_blank"
            class="
              text-orange-EE642A
              border-2px border-orange-EE642A
              hover:bg-orange-EE642A
              px-40px
              py-10px
              rounded-5px
              hover:text-black
            "
            >Get in Touch</a
          >
        </div>
      </div>
    </div>

    <Products />

    <div class="mx-auto max-w-1300px" :class="isLg ? 'p-40px' : 'p-20px'">
      <div class="flex gap-20px" :class="isLg ? '' : 'flex-col'">
        <div>
          <p class="text-black supheader-1 mb-20px">How I can help you?</p>
          <p class="text-black body-2">
            I will provide you with the tools and support that you need to reach
            your health and fitness goal. I will create customized workout plans
            tailored to your individual needs and fitness level and provide
            instruction on proper form and technique. Additionally, I will be
            here to motivate and encourage you to stay on track and push
            yourself to reach your goals.
          </p>
        </div>

        <div
          class="rounded-10px overflow-hidden relative"
          :class="isLg ? 'w-1/3 flex-shrink-0' : 'w-full'"
          @click="playClip('explaination')"
        >
          <video :id="'explaination'" controls class="h-full w-full">
            <source
              src="@/assets/isaac-wong-pt/explaination.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div
            :id="'play-' + 'explaination'"
            class="
              absolute
              inset-0
              z-10
              flex
              items-center
              justify-center
              bg-center bg-no-repeat bg-cover
              button
            "
            :style="{
              backgroundImage:
                'url(\'' +
                require('@/assets/isaac-wong-pt/explaination-thumbnail.png') +
                '\')',
            }"
          >
            <div class="absolute inset-0 bg-black opacity-30" />
            <img
              src="@/assets/utility/play.svg"
              class="h-50px w-50px relative"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-green-2B986B33">
      <div
        class="mx-auto max-w-1300px grid gap-20px"
        :class="isLg ? 'p-40px grid-cols-2' : 'p-20px grid-cols-1'"
      >
        <div
          v-for="(help, key) in helps"
          :key="key"
          class="flex items-center"
          :class="isLg ? 'gap-20px' : 'flex-col gap-10px'"
        >
          <div class="w-50px flex items-center justify-center flex-shrink-0">
            <img :src="help.src" class="h-50px" />
          </div>
          <div>
            <p
              class="body-bold-1 text-black"
              :class="isLg ? '' : 'text-center'"
            >
              {{ help.label }}
            </p>
            <p class="body-2 text-black" :class="isLg ? '' : 'text-center'">
              {{ help.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <Contact />
  </div>
</template>

<script>
// components
import Products from "@/components/Products.vue";
import Contact from "@/components/Contact.vue";

export default {
  components: {
    Products,
    Contact,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    helps() {
      return [
        {
          src: require("@/assets/services/gym.svg"),
          label: "Customized training plan",
          description:
            "To help you reach your fitness goals more efficiently and effectively",
        },
        {
          src: require("@/assets/services/time.svg"),
          label: "Flexible workouts and location",
          description:
            "Convenient and accessible workout options, adjusted for any fitness level",
        },
        {
          src: require("@/assets/services/plate.svg"),
          label: "Customized nutrition plan",
          description:
            "Meet your specific dietary needs based on your lifestyle and preferences",
        },
        {
          src: require("@/assets/services/chat.svg"),
          label: "Daily monitoring and support",
          description:
            "Helps you to stay on track with training and nutrition plan, as well as to make adjustments when needed",
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
    pauseClip(id) {
      let clip = document.getElementById(id);

      if (clip) {
        clip.pause();

        let pauseButton = document.getElementById("play-" + id);
        if (pauseButton) {
          pauseButton.classList.remove("hidden");
        }
      }
    },
  },
};
</script>
