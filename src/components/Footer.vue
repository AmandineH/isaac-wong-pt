<template>
  <footer class="bg-black">
    <div class="mx-auto max-w-1300px" :class="isLg ? 'p-40px' : 'p-20px'">
      <div
        class="grid mb-20px"
        :class="
          isLg ? 'grid-cols-4 gap-20px' : 'grid-cols-2 gap-x-20px gap-y-40px'
        "
      >
        <nuxt-link
          :to="'/'"
          :class="isLg ? 'order-1' : 'order-2 flex justify-end'"
        >
          <img
            src="@/assets/isaac-wong-pt/isaac-wong-pt.jpg"
            alt="Isaac Wong Personal Training"
            :class="isLg ? 'h-200px' : 'h-100px'"
          />
        </nuxt-link>

        <div :class="isLg ? 'order-2' : 'order-1'">
          <p class="text-white body-2 mb-10px">Contact</p>

          <div class="flex gap-5px mb-10px">
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
            <p class="text-gray-ACACAC body-3">Whatsapp: +6597567270</p>
            <p class="text-gray-ACACAC body-3">Email: isaacwongpt@gmail.com</p>
          </div>
        </div>

        <div
          class="flex flex-col order-3 gap-20px"
          :class="isLg ? '' : 'col-span-2'"
        >
          <nuxt-link
            v-for="(item, key) in menu"
            :key="key"
            :to="item.href"
            class="text-gray-ACACAC body-3 hover:text-orange-EE642A"
            >{{ item.label }}</nuxt-link
          >
        </div>

        <div class="order-4" :class="isLg ? '' : 'col-span-2'">
          <p class="text-white body-2 mb-10px">Find me on</p>

          <div class="flex gap-5px mb-10px">
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
              <img :src="social.src" class="h-30px w-30px" :alt="social.alt" />
            </a>
          </div>

          <p class="text-gray-ACACAC body-3">@isaacwongpt</p>
        </div>
      </div>

      <p class="text-white fine-prints-2" :class="isLg ? '' : 'text-center'">
        © Isaac Wong Personal Training
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    contacts() {
      return [
        {
          key: "whatsapp",
          href: `https://wa.me/+6597567270?text=${encodeURIComponent(
            "Hi, I would like to know more about your Personal Training services. \nName: \nGender: \nAge: \nPre-existing medical conditions / illnesses / diseases: \nExercise history: \nGoals:"
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
