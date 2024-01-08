<template>
  <div class="relative">
    <img
      src="@/assets/isaac-wong-pt/profile.jpg"
      alt="Isaac Wong"
      class=""
      :class="
        isLg
          ? 'right-0 w-1/3 object-center object-cover h-full absolute'
          : 'w-full h-400px object-center object-cover'
      "
    />

    <img
      src="@/assets/utility/arrow-orange.svg"
      alt="arrow"
      class="absolute transform rotate-180"
      :class="
        isLg
          ? '-bottom-50px w-400px right-40px'
          : 'top-370px w-150px right-20px'
      "
    />

    <div class="mx-auto max-w-1300px relative">
      <div :class="isLg ? 'px-40px py-80px w-2/3' : 'py-40px px-20px'">
        <p class="supheader-1 mb-20px text-black">Isaac Wong</p>

        <p class="body-2 mb-20px text-black">
          I've been a competitive athlete since I was 10, playing Basketball,
          Football and Floorball up until National Service where I found my love
          for fitness and strength training. Since then, I've been called up to
          the national Powerlifting and Weightlifting team, as well as competed
          competitively in hybrid fitness sports such as CrossFit and Hyrox.
        </p>

        <p class="body-2 mb-20px text-black">
          My coaching career began in 2016 after I finished my service in the
          Military. I did personal training and online coaching while
          concurrently studying for a degree in economics and data science. Upon
          graduation, I took up a post graduate research scholarship to pursue a
          PhD in Economics but ultimately left the programme 6 months later to
          pursue my love for fitness fulltime.
        </p>

        <p class="body-2 mb-20px text-black">
          I have not looked back since and feel extremely fortunate everyday to
          be put in a position to directly change someone else's life for the
          better!
        </p>

        <p class="body-2 mb-20px text-black">
          With more than 7 years of experience in the fitness industry as a
          coach with multiple fitness entities, I am confident of the skills
          that I've developed to help anyone achieve their goals! Whether you're
          looking to lose weight, build muscle or get stronger and fitter for a
          sport, I'll be more than happy to journey alongside you!
        </p>

        <p class="body-bold-2 mb-20px text-black">
          Do reach out if you think that I might be a good fit to serve you. See
          you soon!
        </p>

        <ul class="list-disc list-inside body-2 mb-20px text-black">
          <li>Personal Trainer 🇸🇬 (Singapore) | Online Coach 🌎 (Global)</li>
          <li>National Powerlifter & Weightlifter | 3-time Record Holder</li>
          <li>Competitive Hybrid Fitness Athlete (Hyrox, CrossFit)</li>
          <li>Sponsored Athlete for The Lions' Den</li>
          <li>
            Technical Advisor and Business Consultant for multiple fitness
            entities
          </li>
          <li>B.Sc. Quantitative Economics & Data Science</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
