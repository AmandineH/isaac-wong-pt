<template>
  <footer class="bg-black">
    <div class="mx-auto max-w-1300px" :class="isLg ? 'p-32px' : 'p-24px'">
      <div
        class="grid mb-24px"
        :class="isLg ? 'grid-cols-3 gap-24px' : 'grid-cols-2 gap-24px'"
      >
        <nuxt-link :to="'/'">
          <img
            src="@/assets/isaac-wong-pt/isaac-wong-pt.jpg"
            alt="Isaac Wong Personal Training"
            class="w-full max-w-240px"
          />
        </nuxt-link>

        <div v-if="isLg">
          <p class="text-white text-md-bold mb-8px">Quick Links</p>

          <div class="flex flex-col gap-8px items-start">
            <nuxt-link
              v-for="(item, key) in menu"
              :key="key"
              :to="item.href"
              class="
                text-white text-md-regular
                border-b-4px
                hover:border-primary-blue
                border-transparent
              "
              >{{ item.label }}</nuxt-link
            >
          </div>
        </div>

        <div>
          <div class="mb-24px">
            <p class="text-white text-md-bold mb-8px">Contact</p>

            <div class="flex">
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
                  hover:bg-primary-blue
                  h-52px
                  w-52px
                "
              >
                <img
                  :src="contact.src"
                  class="h-32px w-32px"
                  :alt="contact.alt"
                />
              </a>
            </div>
          </div>

          <div>
            <p class="text-white text-md-bold mb-8px">Find Me On</p>
            <div class="flex mb-8px">
              <a
                v-for="(social, key) in socials"
                :key="key"
                :href="social.href"
                target="_blank"
                class="
                  flex
                  items-center
                  justify-center
                  rounded-full
                  button
                  hover:bg-primary-blue
                  h-52px
                  w-52px
                "
              >
                <img
                  :src="social.src"
                  class="h-24px w-24px"
                  :alt="social.alt"
                />
              </a>
            </div>

            <p class="text-white text-md-regular">@isaacwongpt</p>
          </div>
        </div>
      </div>

      <hr class="border-t border-white mb-24px" />

      <p class="text-white text-xs-regular text-center">
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
          label: "Sponsorships & Collaborations",
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
