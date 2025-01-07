<template>
  <div class="bg-white sticky top-0 z-50">
    <div v-if="isLg" class="flex gap-52px mx-auto max-w-1300px px-32px">
      <div class="py-8px">
        <nuxt-link :to="'/'">
          <img
            src="@/assets/isaac-wong-pt/isaac-wong-pt-black.png"
            alt="Isaac Wong Personal Training"
            class="h-44px"
          />
        </nuxt-link>
      </div>

      <div class="flex gap-16px">
        <nuxt-link
          v-for="(item, key) in menu"
          :key="key"
          :to="item.href"
          class="border-b-4px flex items-end py-8px"
          :class="
            $route.name &&
            ($route.name.startsWith(item.key) ||
              (item.key === 'home' && $route.path === '/'))
              ? 'border-primary-blue text-sm-semibold text-primary-blue'
              : 'border-transparent hover:border-primary-blue text-sm-regular text-black'
          "
          >{{ item.label }}
        </nuxt-link>
      </div>
    </div>

    <div v-else>
      <div class="flex items-center justify-between px-24px py-8px">
        <nuxt-link :to="'/'">
          <img
            src="@/assets/isaac-wong-pt/isaac-wong-pt-black.png"
            alt="Isaac Wong Personal Training"
            class="h-44px"
          />
        </nuxt-link>

        <button
          @click="
            $router.push({
              query: {
                ...$route.query,
                menu: $route.query.menu ? undefined : true,
              },
            })
          "
          class="button"
        >
          <img
            :src="
              $route.query.menu
                ? require('@/assets/utility/close.svg')
                : require('@/assets/utility/menu.svg')
            "
            alt="Menu"
            class="h-32px w-32px"
          />
        </button>
      </div>

      <transition name="slide">
        <div
          v-if="$route.query.menu"
          class="
            fixed
            inset-x-0
            bottom-0
            z-50
            flex flex-col
            bg-white
            top-60px
            p-24px
          "
        >
          <div
            class="
              flex flex-col
              items-center
              gap-16px
              flex-grow
              overflow-y-auto
            "
          >
            <nuxt-link
              v-for="(item, key) in menu"
              :key="key"
              :to="item.href"
              class="border-b-4px"
              :class="[
                $route.name &&
                ($route.name.startsWith(item.key) ||
                  (item.key === 'home' && $route.path === '/'))
                  ? 'border-primary-blue text-md-semibold text-primary-blue'
                  : 'border-transparent hover:border-primary-blue text-md-regular text-black',
              ]"
            >
              {{ item.label }}
            </nuxt-link>
          </div>

          <div class="flex flex-col items-center">
            <p class="text-center text-black text-md-regular mb-8px">
              Find me on
            </p>

            <div class="flex justify-center mb-8px gap-16px">
              <a
                v-for="(social, key) in socials"
                :key="key"
                :href="social.href"
                target="_blank"
                class="
                  relative
                  flex
                  items-center
                  justify-center
                  rounded-full
                  group
                  button
                  hover:bg-primary-blue
                  h-52px
                  w-52px
                  group
                "
              >
                <img
                  :src="social.src"
                  class="h-24px w-24px flex group-hover:hidden"
                  :alt="social.alt"
                />

                <img
                  :src="social.srcSelected"
                  class="h-24px w-24px hidden group-hover:flex"
                  :alt="social.alt"
                />
              </a>
            </div>

            <p class="text-center text-md-regular text-black">@isaacwongpt</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    menu() {
      return [
        {
          key: "home",
          href: "/",
          label: "Home",
        },
        {
          key: "about-me",
          href: "/about-me",
          label: "About Me",
        },
        {
          key: "coaching-services",
          href: "/coaching-services",
          label: "Coaching Services",
        },
        {
          key: "results-and-testimonials",
          href: "/results-and-testimonials",
          label: "Results & Testimonials",
        },
        {
          key: "sponsorships-collaborations",
          href: "/sponsorships-collaborations",
          label: "Sponsorships / Collaborations",
        },
        {
          key: "products",
          href: "/products",
          label: "Products",
        },
      ];
    },
    socials() {
      return [
        {
          key: "instagram",
          href: "https://www.instagram.com/isaacwongpt/",
          src: require("@/assets/social/instagram-black.svg"),
          alt: "Instagram",
        },
        {
          key: "tiktok",
          href: "https://www.tiktok.com/@isaacwongpt",
          src: require("@/assets/social/tiktok-black.svg"),
          alt: "TikTok",
        },
        {
          key: "facebook",
          href: "https://www.facebook.com/isaacwongpt",
          src: require("@/assets/social/facebook-black.svg"),
          alt: "Facebook",
        },
        {
          key: "linkedin",
          href: "https://www.linkedin.com/in/isaacwongpt/",
          src: require("@/assets/social/linkedin-black.svg"),
          alt: "LinkedIn",
        },
      ];
    },
  },
};
</script>
