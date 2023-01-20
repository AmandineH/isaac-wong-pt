<template>
  <div class="bg-black">
    <div
      v-if="isLg"
      class="flex items-center justify-between mx-auto  max-w-1300px px-40px py-20px"
    >
      <div class="flex items-center gap-50px">
        <nuxt-link :to="'/'">
          <img
            src="@/assets/isaac-wong-pt/isaac-wong-pt.jpg"
            alt="Isaac Wong Personal Training"
            class="h-50px"
          />
        </nuxt-link>

        <div class="flex gap-20px">
          <nuxt-link
            v-for="(item, key) in menu"
            :key="key"
            :to="item.href"
            class="relative flex items-center  text-gray-ACACAC body-2 hover:text-orange-EE642A h-50px"
            >{{ item.label }}

            <div
              v-if="
                $route.name &&
                ($route.name.startsWith(item.key) ||
                  (item.key === 'home' && $route.path === '/'))
              "
              class="absolute w-full -bottom-20px bg-orange-EE642A h-5px"
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
            class="relative flex items-center justify-center rounded-full  group button hover:bg-orange-EE642A h-50px w-50px"
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
            src="@/assets/isaac-wong-pt/isaac-wong-pt.jpg"
            alt="Isaac Wong Personal Training"
            class="h-50px"
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
            class="h-30px w-30px"
          />
        </button>
      </div>

      <transition name="slide">
        <div
          v-if="$route.query.menu"
          class="fixed inset-x-0 bottom-0 z-50 flex flex-col bg-black  top-70px p-20px"
        >
          <div
            class="flex flex-col items-center flex-grow overflow-y-auto  gap-20px mb-40px"
          >
            <nuxt-link
              v-for="(item, key) in menu"
              :key="key"
              :to="item.href"
              class="text-white border-b-5px"
              :class="[
                $route.name &&
                ($route.name.startsWith(item.key) ||
                  (item.key === 'home' && $route.path === '/'))
                  ? 'body-bold-2 border-orange-EE642A'
                  : 'body-2 border-transparent',
              ]"
            >
              {{ item.label }}
            </nuxt-link>
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
          key: "services",
          href: "/services",
          label: "Services",
        },
        {
          key: "results-and-testimonials",
          href: "/results-and-testimonials",
          label: "Results & Testimonials",
        },
        {
          key: "contact",
          href: "/contact",
          label: "Contact",
        },
      ];
    },
    contacts() {
      return [
        {
          key: "whatsapp",
          href: "https://wa.me/+6588888888",
          src: require("@/assets/social/whatsapp.svg"),
          alt: "Whatsapp",
        },
        {
          key: "email",
          href: "mailto:",
          src: require("@/assets/social/email.svg"),
          alt: "Email",
        },
      ];
    },
  },
};
</script>
