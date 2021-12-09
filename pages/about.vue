<template>
  <div>
    <img
      src="@/assets/images/about.jpg"
      alt="about"
      class="w-full min-h-600px"
    />

    <div class="relative">
      <div class="absolute w-full top-50px h-10px bg-blue-00ACD7" />
      <div
        class="relative z-10 mx-auto max-w-1300px md:-mt-50px md:flex p-20px"
      >
        <div class="flex-1 text-white bg-blue-191f6C px-20px py-20px">
          <h1 class="title-1 mb-10px">OUR MISSION</h1>
          <p class="body-3">
            Provide easy access to organized real estate data with empowering
            tailored solutions.
          </p>
        </div>
        <div class="flex-1 text-white bg-blue-00ACD7 px-20px py-20px">
          <h1 class="title-1 mb-10px">OUR VISION</h1>
          <p class="body-3">
            Be the global leading provider of critical information to solve
            known and unknown problems related to real estate.
          </p>
        </div>
        <div class="flex-1 text-white bg-gray-666666 px-20px py-20px">
          <h1 class="title-1 mb-10px">OUR PRINCIPLES</h1>
          <p class="body-3">Integrity, Tenacity, Creativity</p>
        </div>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <ul class="list-disc list-outside ml-20px">
          <li>
            REA empowers people and organizations to make the best decisions
            involving real estate.
          </li>
          <li>
            REA endeavors to make its data, tools and products available on a
            global scale, building out from Asia Pacific.
          </li>
          <li>
            HQ in Singapore, Present in Malaysia, Hong Kong and Indonesia.
          </li>
          <li>
            Founded in 2019 by Dr. JM Paul, P Yan, J Yao. Chairman Pr. R
            Edelstein.
          </li>
          <li>
            A dedicated team of dozens of Data scientists, IT specialists, UX
            experts, RE Developer, valuers, agents, statisticians, architects,
            geographers, MBAs, urban economists.
          </li>
          <li>
            REA develops technologies enabling transparency, efficiency and
            innovative solutions. It has developed an Asian metadatabase that is
            comprehensive, organized and accessible. A set of unique proprietary
            smart tools allow for transparent, granular and fully scalable use.
            Users are empowered with a set of innovative and powerful
            applications.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import Carousel from "@/components/Carousel.vue";

export default {
  layout: "default",
  components: {
    // Carousel,
  },
};
</script>