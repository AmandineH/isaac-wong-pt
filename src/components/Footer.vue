<template>
  <footer class="bg-black">
    <div class="mx-auto max-w-1300px" :class="isLg ? 'p-40px' : 'p-20px'">
      <div class="flex justify-between gap-20px">
        <nuxt-link :to="'/'">
          <img
            src="@/assets/isaac-wong-pt/isaac-wong-pt.jpg"
            alt="Isaac Wong Personal Training"
            :class="isLg ? 'h-200px' : 'h-100px'"
          />
        </nuxt-link>

        <div class="flex gap-20px">
          <a
            v-for="(contact, key) in contacts"
            :key="key"
            :href="contact.href"
            target="_blank"
            class="relative flex items-center justify-center rounded-full  group button hover:bg-white h-50px w-50px"
          >
            <img :src="contact.src" class="h-15px w-15px" :alt="contact.alt" />
          </a>
        </div>

        <div class="flex gap-20px">
          <a
            v-for="(social, key) in socials"
            :key="key"
            :href="social.href"
            target="_blank"
            class="relative flex items-center justify-center rounded-full  group button hover:bg-white h-50px w-50px"
          >
            <img :src="social.src" class="h-15px w-15px" :alt="social.alt" />
          </a>
        </div>
      </div>

      <hr class="border-white opacity-50 border-t-1px mb-20px" />
      <p class="text-white fine-prints-2">© Isaac Wong Personal Training</p>
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
          href: "",
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
          href: "",
          src: require("@/assets/social/tiktok.svg"),
          alt: "TikTok",
        },
        {
          key: "facebook",
          href: "",
          src: require("@/assets/social/facebook.svg"),
          alt: "Facebook",
        },
        {
          key: "linkedin",
          href: "",
          src: require("@/assets/social/linkedin.svg"),
          alt: "LinkedIn",
        },
      ];
    },
  },
};
</script>
