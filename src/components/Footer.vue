<template>
  <footer class="text-white bg-gray-666666">
    <div class="justify-between block mx-auto max-w-1300px p-20px md:flex">
      <div class="hidden md:flex">
        <div
          class="flex flex-col justify-between border-r  border-blue-00ACD7 pr-20px mr-20px"
        >
          <img src="@/assets/rea/rea-white.svg" alt="rea" class="h-60px" />

          <div>
            <p v-for="line in address" :key="line" class="body-4">{{ line }}</p>
          </div>
          <p class="body-4">{{ $t("footer.phone") }}: {{ phone }}</p>
        </div>
        <div>
          <p class="body-4">{{ $t("footer.forinquiries") }}</p>
          <p class="text-blue-00ACD7 body-4 mt-10px">
            {{ $t("footer.consumer") }}
          </p>
          <a class="body-4" :href="'mailto:' + emails.consumer">{{
            emails.consumer
          }}</a>
          <p class="text-blue-00ACD7 body-4 mt-10px">
            {{ $t("footer.concierge") }}
          </p>
          <a class="body-4" :href="'mailto:' + emails.concierge">{{
            emails.concierge
          }}</a>
          <p class="text-blue-00ACD7 body-4 mt-10px">
            {{ $t("footer.corporate") }}
          </p>
          <a class="body-4" :href="'mailto:' + emails.corporate">{{
            emails.corporate
          }}</a>
          <p class="text-blue-00ACD7 body-4 mt-10px">
            {{ $t("footer.media") }}
          </p>
          <a class="body-4" :href="'mailto:' + emails.media">{{
            emails.media
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
            <img
              src="@/assets/social/facebook.svg"
              alt="Facebook"
              class="h-30px"
            />
          </a>
          <a
            href="https://www.instagram.com/8prop_eightprop/"
            target="_blank"
            class="cursor-pointer mr-10px"
          >
            <img
              src="@/assets/social/instagram.svg"
              alt="Instagram"
              class="h-30px"
            />
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
            <img
              src="@/assets/rea/rea-white.svg"
              alt="rea"
              class="flex h-40px md:hidden mb-20px"
            />
          </center>
          <p class="body-4">{{ $t("footer.copyright") }},</p>
          <p class="body-4">{{ $t("footer.allrightreserved") }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// plugins
import { getCountryVariables } from "@/plugins/countries.js";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    countryCode() {
      return this.$store.state.country.countryCode;
    },
    emails() {
      return getCountryVariables(this.countryCode, "emails") || {};
    },
    phone() {
      return getCountryVariables(this.countryCode, "phones")
        ? (getCountryVariables(this.countryCode, "phones") || [])[0].phone ||
            (getCountryVariables(this.countryCode, "phones") || [])[0]
        : null;
    },
    address() {
      return getCountryVariables(this.countryCode, "addresses")
        ? (getCountryVariables(this.countryCode, "addresses") || [])[0]
            .address ||
            (getCountryVariables(this.countryCode, "addresses") || [])[0]
        : null;
    },
  },
};
</script>
