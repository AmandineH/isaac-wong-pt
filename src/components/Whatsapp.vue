<template>
  <div
    class="fixed z-40 flex flex-col items-end bottom-20px no-print"
    :class="isLg ? 'right-40px' : 'right-20px'"
  >
    <div
      v-if="!(tutorial && tutorial.helpWhatsapp)"
      class="flex bg-white p-10px pt-5px pr-5px mb-10px rounded-5px gap-5px"
      style="box-shadow: 0px 4px 10px 0px #7c7c7c40"
    >
      <a
        :href="`https://wa.me/+6597567270?text=${encodeURIComponent(
          'Hello, I would like to know more about your coaching services! \n\n1. In-Person Coaching \n2. ⁠Online Coaching \n3. ⁠Fitness Business Coaching \n\nName: \nGender: \nAge: \nPreferred Coaching Service (1, 2, or 3): \n\nUltimate Goal: \n\nPre-existing injuries / medical conditions / illnesses / diseases: \nExercise history:'
        )}`"
        target="_blank"
      >
        <div>
          <p class="body-bold-3 text-black">Ready to get started?</p>
          <p class="body-3 text-black">Chat on WhatsApp!</p>
        </div>
      </a>

      <img
        src="@/assets/utility/close-black.svg"
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
        h-50px
        w-50px
        whatsapp
      "
      style="box-shadow: 0px 4px 10px 0px #19567540"
    >
      <img
        src="@/assets/social/whatsapp.svg"
        alt="whatsapp"
        class="h-30px w-30px"
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
    countryCode() {
      return this.$store.state.locale.countryCode;
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
