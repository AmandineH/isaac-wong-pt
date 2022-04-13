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
        v-if="countryCode === 'SG'"
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
      <div class="relative z-10 mx-auto max-w-1300px md:-mt-100px" v-else>
        <div
          class="
            text-white
            p-20px
            px-60px
            bg-blue-00ACD7
            md:min-h-200px md:mx-20px
          "
        >
          <h1 class="text-center uppercase title-1 text-blue-191f6C mb-10px">
            {{ $t("about.aboutour") }}
            <span class="text-white">{{ $t("about.mission") }}</span>
          </h1>
          <p>{{ $t("about.ourmissiontext") }}</p>
        </div>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px" v-if="countryCode === 'SG'">
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
      <div class="flex flex-col items-center" v-else>
        <h1 class="text-center title-1 text-blue-191f6C">
          {{ $t("about.aboutus") }}
          <div class="flex mx-auto w-300px mt-10px">
            <span class="w-1/3 h-2px bg-blue-191f6C"></span>
            <span class="flex-grow h-2px bg-blue-00ACD7"></span>
          </div>
        </h1>
        <div>
          <div class="my-20px">
            <p>{{ $t("about.aboutuspara1") }}</p>
            <br>
            <p>{{ $t("about.aboutuspara2") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["countryCode"]),
  },
  layout: "default",
};
</script>