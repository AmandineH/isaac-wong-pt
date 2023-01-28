<template>
  <div class="bg-white">
    <div class="mx-auto max-w-1300px" :class="isLg ? 'p-40px' : 'p-20px'">
      <div>
        <p class="text-black body-1 mb-20px text-center">
          Ready to get started?
        </p>

        <div class="flex justify-center gap-10px mb-10px">
          <a
            v-for="(contact, key) in contacts"
            :key="key"
            :href="contact.href"
            target="_blank"
            class="
              text-orange-EE642A
              hover:text-white
              border-2px border-orange-EE642A
              bg-orange-EE642A33
              hover:bg-orange-EE642A
              rounded-5px
              flex
              items-center
              gap-10px
              group
            "
            :class="isLg ? 'px-40px py-10px' : 'px-20px py-5px'"
          >
            {{ contact.label }}
            <img
              :src="contact.srcInactive"
              class="h-30px w-30px group-hover:hidden"
              :alt="contact.alt"
            />
            <img
              :src="contact.src"
              class="h-30px w-30px group-hover:flex hidden"
              :alt="contact.alt"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    contacts() {
      return [
        {
          key: "whatsapp",
          href: `https://wa.me/+6597567270?text=${encodeURIComponent(
            "Hi, I would like to know more about your Personal Training services. \nName: \nAge: \nActivity level: %0a"
          )}`,
          src: require("@/assets/social/whatsapp.svg"),
          srcInactive: require("@/assets/social/whatsapp-orange.svg"),
          alt: "Whatsapp",
          label: "Whatsapp",
        },
        {
          key: "email",
          href: "mailto:isaacwongpt@gmail.com",
          src: require("@/assets/social/email.svg"),
          srcInactive: require("@/assets/social/email-orange.svg"),
          alt: "Email",
          label: "Email",
        },
      ];
    },
  },
};
</script>
