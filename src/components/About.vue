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
          My name is Isaac Wong. Since 2017, I have been helping clients and
          athletes reach their fitness goals through science-based, sustainable
          & data-driven methods. Having been a competitive athlete across
          football, basketball and floorball throughout my schooling years, I
          have always been active and passionate about sports in general.
          However, with regards to exercising, my interest in bodyweight
          training was first sparked in 2014 when I was preparing to take the
          GCE 'A' Level examinations. Bodyweight training in the form of
          push-ups and pull-ups were a way for me to relax during that period. ​
        </p>

        <p class="body-2 mb-20px text-black">
          I believe that being physically fit is something that everyone should
          be able to enjoy! With over 15 years of competitive sports experience
          and more than half a decade of professional fitness coaching under my
          belt, I believe that I have acquired the necessary skills to help any
          individual achieve his/her fitness goals!
        </p>

        <ul class="list-disc list-inside body-2 mb-20px text-black">
          <li>Certified Personal Trainer & Competitive athlete</li>
          <li>B.Sc. Quantitative Economics & Data Science</li>
          <li>
            Believer of science-based, sustainable & data-driven protocols
          </li>
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
