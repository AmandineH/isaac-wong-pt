<template>
  <div>
    <div class="hidden md:block">
      <div class="mx-auto max-w-1300px p-20px">
        <div class="flex items-end justify-between">
          <a href="/">
            <img src="@/assets/rea/rea.svg" alt="rea" class="h-50px mb-10px" />
          </a>
          <div class="flex">
            <a
              v-for="menuItem in menu"
              :key="menuItem.id"
              :href="menuItem.href"
              class="my-20px ml-40px body-3 text-blue-191f6C"
            >
              {{ menuItem.label }}
            </a>
          </div>
        </div>
        <div class="flex">
          <div class="w-1/4 h-2px bg-blue-191f6C"></div>
          <div class="flex-grow h-2px bg-blue-00ACD7"></div>
        </div>
      </div>
    </div>

    <div class="block md:hidden">
      <div class="flex justify-between p-20px">
        <img
          src="@/assets/utility/hamburger.svg"
          alt="hamburger"
          class="h-30px"
          @click="isOpen = true"
        />

        <a href="/">
          <img src="@/assets/rea/rea.svg" alt="rea" class="h-30px" />
        </a>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex flex-col justify-between bg-white text-blue-191f6C"
    >
      <div class="flex flex-col flex-grow p-20px">
        <div class="flex justify-between">
          <img
            src="@/assets/utility/hamburger.svg"
            alt="hamburger"
            class="h-30px"
            @click="isOpen = false"
          />

          <a href="/">
            <img src="@/assets/rea/rea.svg" alt="rea" class="h-30px" />
          </a>
        </div>

        <div class="flex flex-col justify-center flex-grow mb-50px">
          <a
            v-for="menuItem in menu"
            :key="menuItem.id"
            :href="menuItem.href"
            class="text-center my-20px body-3"
          >
            {{ menuItem.label }}
          </a>
        </div>
      </div>

      <div class="flex justify-center p-20px bg-gray-666666">
        <a
          href="https://www.facebook.com/8PROP/"
          target="_blank"
          class="cursor-pointer mr-10px"
        >
          <img
            src="@/assets/social/facebook.svg"
            alt="Facebook"
            class="h-30px"
          />
        </a>
        <a
          href="https://www.instagram.com/8prop_eightprop/"
          target="_blank"
          class="cursor-pointer mr-10px"
        >
          <img
            src="@/assets/social/instagram.svg"
            alt="Instagram"
            class="h-30px"
          />
        </a>
        <a
          href="https://linkedin.com/company/real-estate-analytics-8prop"
          target="_blank"
          class="cursor-pointer"
        >
          <img
            src="@/assets/social/linkedin.svg"
            alt="linked-in"
            class="h-30px"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  data() {
    return {
      isOpen: false,
      menu: [
        {
          id: "about-us",
          label: this.$t("menu.aboutus"),
          href: "/about",
        },
        {
          id: "news-developments",
          label: this.$t("menu.newsdevelopments"),
          href: "/news",
        }, // TODO: only is countryCode = SG
        {
          id: "careers",
          label: this.$t("menu.careers"),
          href: "/careers",
        },
        {
          id: "contact-us",
          label: this.$t("menu.contactus"),
          href: "/contact",
        },
      ],
    };
  },
  // computed: {
  //   ...mapState(['countryCode']),
  // },
};
</script>
