<template>
  <div>
    <div class="grid" :class="isLg ? 'grid-cols-3' : 'w-full grid-cols-2'">
      <div :class="isLg ? 'h-70vh' : 'h-40vh order-2'">
        <img
          src="@/assets/isaac-wong-pt/isaac-1.jpg"
          alt="Isaac Wong"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div :class="isLg ? 'h-70vh' : 'h-40vh order-3'">
        <img
          src="@/assets/isaac-wong-pt/isaac-2.jpg"
          alt="Isaac Wong"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div :class="isLg ? 'h-70vh' : 'col-span-2 h-30vh order-1'">
        <img
          src="@/assets/isaac-wong-pt/isaac-3.jpg"
          alt="Isaac Wong"
          class="object-cover object-center w-full h-full"
        />
      </div>
    </div>

    <div
      class="text-center bg-black"
      :class="isLg ? 'p-32px' : 'p-24px'"
    >
      <p
        class="text-white mb-8px"
        :class="isLg ? 'display-xl-bold' : 'display-lg-bold'"
      >
        Isaac Wong
      </p>
      <p class="text-white text-xs-medium">
        Personal Trainer | Online Coach | Mentor
        <br/>
        Team Singapore Powerlifter and Weightlifter | Hyrox Pro Athlete
      </p>
    </div>

    <div
      class="grid mx-auto max-w-1300px gap-32px"
      :class="isLg ? 'grid-cols-3 px-32px py-52px' : 'px-24px py-32px'"
    >
      <div :class="isLg ? 'col-span-2' : ''">
        <p class="text-black text-md-regular mb-16px">
          I've been a competitive athlete since I was 10, playing Basketball,
          Football and Floorball up until National Service where I found my love
          for fitness and strength training. Since then, I've been called up to
          the national Powerlifting and Weightlifting team, as well as competed
          competitively in hybrid fitness sports such as CrossFit and Hyrox.
        </p>

        <p class="text-black text-md-regular mb-16px">
          My coaching career began in 2016 after I finished my service in the
          Military. I did personal training and online coaching while
          concurrently studying for a degree in economics and data science. Upon
          graduation, I took up a post graduate research scholarship to pursue a
          PhD in Economics but ultimately left the programme 6 months later to
          pursue my love for fitness fulltime.
        </p>

        <p class="text-black text-md-regular mb-16px">
          I have not looked back since and feel extremely fortunate everyday to
          be put in a position to directly change someone else's life for the
          better!
        </p>

        <p class="text-black text-md-regular mb-16px">
          With close to a decade of professional coaching in the fitness industry, 
          I am confident of the skills that I've developed to help anyone achieve 
          their goals! Whether you're looking to lose weight, build muscle or get 
          stronger and fitter for a sport, I'll be more than happy to journey 
          alongside you!
        </p>

        <p class="text-black text-md-semibold mb-16px">
          Do reach out if you think that I might be a good fit to serve you. See
          you soon!
        </p>

        <ul class="text-black list-disc list-inside text-[15px]">
          <li class="pb-4px">Personal Trainer 🇸🇬 (Singapore) | Online Coach 🌎 (Global) | Mentorship 🌎 (Global)</li>
          <li class="pb-4px">National Powerlifter | 5-time National Record Holder | 2x National Champion🥇 | 🥈APAC’23 | 13th Ranked Worldwide</li>
          <li class="pb-4px">National Weightlifter</li>
          <li class="pb-4px">Hyrox Individual Pro Athlete</li>
          <li>Sponsored Athlete for The Lions’ Den and ActiveX Physiotherapy</li>
        </ul>
      </div>

      <div>
        <VideoPlayer
          :src="require('@/assets/isaac-wong-pt/135.mp4')"
          :thumbnail="require('@/assets/isaac-wong-pt/135-thumbnail.JPG')"
          class="w-full overflow-hidden rounded-12px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  components: {
    VideoPlayer,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
