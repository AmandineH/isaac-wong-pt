<template>
  <div
    class="fixed z-40 flex flex-col items-end bottom-24px group"
    :class="isLg ? 'right-32px' : 'right-24px'"
  >
    <div
      v-if="!(tutorial && tutorial.helpWhatsapp)"
      class="flex bg-white p-8px rounded-5px gap-5px shadow-md mb-8px"
    >
      <a
        :href="`https://wa.me/+6597567270?text=${encodeURIComponent(
          'Hello, I would like to know more about your coaching services! \n\n1. In-Person Coaching \n2. ⁠Online Coaching \n3. ⁠Fitness Business Coaching \n\nName: \nGender: \nAge: \nPreferred Coaching Service (1, 2, or 3): \n\nUltimate Goal: \n\nPre-existing injuries / medical conditions / illnesses / diseases: \nExercise history:'
        )}`"
        target="_blank"
      >
        <div>
          <p class="text-sm-bold text-black">Ready to get started?</p>
          <p class="text-sm-regular text-black">Chat on WhatsApp!</p>
        </div>
      </a>

      <img
        src="@/assets/utility/close.svg"
        alt="Close"
        @click="updateTutorial('helpWhatsapp')"
        class="h-15px w-15px button"
      />
    </div>

    <a
      :href="`https://wa.me/+6597567270?text=${encodeURIComponent(
        'Hello, I would like to know more about your coaching services! \n\n1. In-Person Coaching \n2. ⁠Online Coaching \n3. ⁠Fitness Business Coaching \n\nName: \nGender: \nAge: \nPreferred Coaching Service (1, 2, or 3): \n\nUltimate Goal: \n\nPre-existing injuries / medical conditions / illnesses / diseases: \nExercise history:'
      )}`"
      target="_blank"
      class="
        flex
        items-center
        justify-center
        rounded-full
        button
        h-52px
        w-52px
        bg-primary-blue
        shadow-md
        group-hover:opacity-100
        opacity-80
      "
    >
      <img
        src="@/assets/social/whatsapp.svg"
        alt="whatsapp"
        class="h-32px w-32px"
      />
    </a>
  </div>
</template>

<script>
// plugins
import { getStorage, setStorage } from "@/plugins/storage.js";

export default {
  name: "Whatsapp",
  data() {
    return {
      tutorial: {},
    };
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
  mounted() {
    this.tutorial = getStorage("tutorial")
      ? JSON.parse(getStorage("tutorial"))
      : {};
  },
  methods: {
    updateTutorial(key) {
      this.tutorial = {
        ...this.tutorial,
        [key]: true,
      };

      setStorage("tutorial", JSON.stringify(this.tutorial));
    },
  },
};
</script>
