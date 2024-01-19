<template>
  <div class="bg-black sticky top-0 z-50">
    <div
      v-if="isLg"
      class="
        flex
        items-center
        justify-between
        mx-auto
        max-w-1300px
        px-40px
        py-20px
      "
    >
      <div class="flex items-center gap-50px">
        <nuxt-link :to="'/'">
          <img
            src="@/assets/isaac-wong-pt/isaac-wong-pt.png"
            alt="Isaac Wong Personal Training"
            class="h-50px"
          />
        </nuxt-link>

        <div class="flex gap-20px">
          <nuxt-link
            v-for="(item, key) in menu"
            :key="key"
            :to="item.href"
            class="
              relative
              flex
              items-center
              body-2
              hover:text-orange-EE642A
              h-50px
            "
            :class="
              $route.name &&
              ($route.name.startsWith(item.key) ||
                (item.key === 'home' && $route.path === '/'))
                ? 'text-white'
                : 'text-gray-ACACAC'
            "
            >{{ item.label }}

            <div
              v-if="
                $route.name &&
                ($route.name.startsWith(item.key) ||
                  (item.key === 'home' && $route.path === '/'))
              "
              class="absolute w-full -bottom-20px bg-orange-EE642A h-2px"
          /></nuxt-link>
        </div>
      </div>

      <div class="flex items-center gap-10px">
        <p class="text-gray-ACACAC body-3">Contact</p>

        <div class="flex items-center gap-5px">
          <a
            v-for="(contact, key) in contacts"
            :key="key"
            :href="contact.href"
            target="_blank"
            class="
              relative
              flex
              items-center
              justify-center
              rounded-full
              group
              button
              hover:bg-orange-EE642A
              h-50px
              w-50px
            "
          >
            <img :src="contact.src" class="h-30px w-30px" :alt="contact.alt" />
          </a>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="flex items-center justify-between px-20px py-10px">
        <nuxt-link :to="'/'">
          <img
            src="@/assets/isaac-wong-pt/isaac-wong-pt.png"
            alt="Isaac Wong Personal Training"
            class="h-50px"
          />
        </nuxt-link>

        <div class="flex gap-5px">
          <a
            :href="contacts[0].href"
            target="_blank"
            class="
              relative
              flex
              items-center
              justify-center
              rounded-full
              group
              button
              hover:bg-orange-EE642A
              h-50px
              w-50px
            "
          >
            <img
              :src="contacts[0].src"
              class="h-30px w-30px"
              :alt="contacts[0].alt"
            />
          </a>

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
              class="h-30px w-30px"
            />
          </button>
        </div>
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
            bg-black
            top-70px
            p-20px
            gap-40px
          "
        >
          <div
            class="
              flex flex-col
              items-center
              flex-grow
              overflow-y-auto
              gap-20px
            "
          >
            <nuxt-link
              v-for="(item, key) in menu"
              :key="key"
              :to="item.href"
              class="border-b-2px body-2 pb-5px"
              :class="[
                $route.name &&
                ($route.name.startsWith(item.key) ||
                  (item.key === 'home' && $route.path === '/'))
                  ? 'border-orange-EE642A text-white'
                  : 'border-transparent text-gray-ACACAC',
              ]"
            >
              {{ item.label }}
            </nuxt-link>
          </div>

          <div class="flex flex-col items-center">
            <p class="text-center text-white body-2 mb-10px">Contact</p>

            <div class="flex justify-center gap-5px mb-10px">
              <a
                v-for="(contact, key) in contacts"
                :key="key"
                :href="contact.href"
                target="_blank"
                class="
                  relative
                  flex
                  items-center
                  justify-center
                  rounded-full
                  group
                  button
                  hover:bg-orange-EE642A
                  h-50px
                  w-50px
                "
              >
                <img
                  :src="contact.src"
                  class="h-30px w-30px"
                  :alt="contact.alt"
                />
              </a>
            </div>

            <div class="flex flex-col gap-5px">
              <p class="text-center text-gray-ACACAC body-3">
                Whatsapp: +6597567270
              </p>
              <p class="text-center text-gray-ACACAC body-3">
                Email: isaacwongpt@gmail.com
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <p class="text-center text-white body-2 mb-10px">Find me on</p>

            <div class="flex justify-center gap-5px mb-10px">
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
                  hover:bg-orange-EE642A
                  h-50px
                  w-50px
                "
              >
                <img
                  :src="social.src"
                  class="h-30px w-30px"
                  :alt="social.alt"
                />
              </a>
            </div>

            <p class="text-center text-gray-ACACAC body-3">@isaacwongpt</p>
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
          key: "products",
          href: "/products",
          label: "Products",
        },
      ];
    },
    contacts() {
      return [
        {
          key: "whatsapp",
          href: `https://wa.me/+6597567270?text=${encodeURIComponent(
            "Hello, I would like to know more about your coaching services! \n\n1. In-Person Coaching \n2. ⁠Online Coaching \n3. ⁠Fitness Business Coaching \n\nName: \nGender: \nAge: \nPreferred Coaching Service (1, 2, or 3): \n\nUltimate Goal: \n\nPre-existing injuries / medical conditions / illnesses / diseases: \nExercise history:"
          )}`,
          src: require("@/assets/social/whatsapp.svg"),
          alt: "Whatsapp",
        },
        {
          key: "email",
          href: "mailto:isaacwongpt@gmail.com",
          src: require("@/assets/social/email.svg"),
          alt: "Email",
        },
      ];
    },
    socials() {
      return [
        {
          key: "instagram",
          href: "https://www.instagram.com/isaacwongpt/",
          src: require("@/assets/social/instagram.svg"),
          alt: "Instagram",
        },
        {
          key: "tiktok",
          href: "https://www.tiktok.com/@isaacwongpt",
          src: require("@/assets/social/tiktok.svg"),
          alt: "TikTok",
        },
        {
          key: "facebook",
          href: "https://www.facebook.com/isaacwongpt",
          src: require("@/assets/social/facebook.svg"),
          alt: "Facebook",
        },
        {
          key: "linkedin",
          href: "https://www.linkedin.com/in/isaacwongpt/",
          src: require("@/assets/social/linkedin.svg"),
          alt: "LinkedIn",
        },
      ];
    },
  },
};
</script>
