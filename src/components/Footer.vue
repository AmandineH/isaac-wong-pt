<template>
  <footer class="text-white bg-gray-666666">
    <div class="justify-between block mx-auto max-w-1300px p-20px md:flex">
      <div class="hidden md:flex">
        <div
          class="flex flex-col justify-between border-r border-blue-00ACD7 pr-20px mr-20px"
        >
          <img src="@/assets/rea/rea-white.svg" alt="rea" class="h-60px" />

          <div>
            <p v-for="line in address" :key="line" class="body-4">{{ line }}</p>
          </div>
          <p class="body-4">{{ $t("footer.phone") }}</p>
        </div>
        <div>
          <p class="body-4">{{ $t("footer.forinquiries") }}</p>
          <p class="text-blue-00ACD7 body-4 mt-10px">
            {{ $t("footer.consumer") }}
          </p>
          <a class="body-4" href="mailto:consumer@rea-sg.com">{{
            $t("footer.emailconsumer")
          }}</a>
          <p class="text-blue-00ACD7 body-4 mt-10px">
            {{ $t("footer.concierge") }}
          </p>
          <a class="body-4" href="mailto:concierge@rea-sg.com">{{
            $t("footer.emailconcierge")
          }}</a>
          <p class="text-blue-00ACD7 body-4 mt-10px">
            {{ $t("footer.corporate") }}
          </p>
          <a class="body-4" href="mailto:corporate@rea-sg.com">{{
            $t("footer.emailcorporate")
          }}</a>
          <p class="text-blue-00ACD7 body-4 mt-10px">
            {{ $t("footer.media") }}
          </p>
          <a class="body-4" href="mailto:media@rea-sg.com">{{
            $t("footer.emailmedia")
          }}</a>
        </div>
      </div>
      <div class="flex flex-col items-center justify-between md:items-end">
        <div class="flex mb-20px md:mb-0">
          <a
            href="https://www.facebook.com/8PROP/"
            target="_blank"
            class="cursor-pointer mr-10px"
          >
            <img src="@/assets/social/facebook.svg" alt="Facebook" class="h-30px" />
          </a>
          <a
            href="https://www.instagram.com/8prop_eightprop/"
            target="_blank"
            class="cursor-pointer mr-10px"
          >
            <img src="@/assets/social/instagram.svg" alt="Instagram" class="h-30px" />
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
        <div class="text-center md:text-right">
          <center>
            <img src="@/assets/rea/rea-white.svg" alt="rea" class="flex h-40px md:hidden mb-20px" />
          </center>
          <p class="body-4">©2021 Real Estate Analytics Pte Ltd,</p>
          <p class="body-4">All Right Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    address() {
      return [
        this.$t("footer.addressline1"),
        this.$t("footer.addressline2"),
        this.$t("footer.addressline3"),
        this.$t("footer.addressline4"),
      ];
    },
  },
};
</script>
