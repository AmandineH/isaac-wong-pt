<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage:
            'url(\'' + require('@/assets/images/contact.jpg') + '\')',
        }"
      >
        <div
          class="absolute transform rotate-45 -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
        ></div>

        <h1 class="relative z-10 supheader-1">{{ $t("contact.contactus") }}</h1>
      </div>
    </div>

    <div class="bg-gray-E8E8F0 -mt-100px pt-100px mb-20px">
      <div class="relative justify-end mx-auto max-w-1300px md:flex p-20px">
        <iframe
          :src="googleMaps"
          class="top-0 left-0 w-full md:w-1/2 min-h-300px md:absolute md:pl-20px"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <div class="md:w-1/2 md:px-20px mt-20px md:mt-0">
          <div class="mb-20px" v-for="(address, key) in addresses" :key="key">
            <p
              v-for="(line, index) in address.address || address"
              :key="index"
              class="text-gray-666666"
              :class="[index === 0 ? 'title-3 mb-20px' : 'body-4']"
            >
              {{ line }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="justify-end mx-auto max-w-1300px md:flex px-20px">
      <div class="md:w-1/2 md:px-20px">
        <div class="flex items-center mb-20px">
          <img src="@/assets/utility/phone.svg" alt="phone" class="h-30px" />
          <div class="ml-20px">
            <p
              v-for="(phone, key) in phones"
              :key="key"
              class="body-4 text-gray-666666"
            >
              {{ phone.countryCode || "" }} Office: {{ phone.phone || phone }}
            </p>
          </div>
        </div>

        <div class="flex items-start mb-20px">
          <img src="@/assets/utility/email.svg" alt="email" class="h-30px" />
          <div class="ml-20px">
            <p class="body-4 text-gray-666666">
              {{ $t("footer.forinquiries") }}
            </p>
            <p class="text-blue-00ACD7 body-4 mt-10px">
              {{ $t("footer.consumer") }}
            </p>
            <a
              class="body-4 text-gray-666666"
              :href="'mailto:' + emails.consumer"
              >{{ emails.consumer }}</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">
              {{ $t("footer.concierge") }}
            </p>
            <a
              class="body-4 text-gray-666666"
              :href="'mailto:' + emails.concierge"
              >{{ emails.concierge }}</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">
              {{ $t("footer.corporate") }}
            </p>
            <a
              class="body-4 text-gray-666666"
              :href="'mailto:' + emails.corporate"
              >{{ emails.corporate }}</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">
              {{ $t("footer.media") }}
            </p>
            <a
              class="body-4 text-gray-666666"
              :href="'mailto:' + emails.media"
              >{{ emails.media }}</a
            >
          </div>
        </div>

        <template v-if="additionalContacts.length > 0">
          <div
            class="flex items-start mb-20px"
            v-for="(additionalContact, key) in additionalContacts"
            :key="key"
          >
            <div class="h-30px w-30px"></div>
            <div class="ml-20px">
              <p class="title-3 mb-20px text-gray-666666">
                {{ additionalContact.name }}
              </p>
              <div
                v-for="(contact, index) in additionalContact.contacts"
                :key="index"
              >
                <p class="text-blue-00ACD7 body-4 mt-10px">
                  {{ contact.title }}
                </p>
                <p class="body-4 text-gray-666666" v-html="contact.contact"></p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// plugins
import { getCountryVariables } from "@/plugins/countries.js";

export default {
  layout: "default",
  computed: {
    countryCode() {
      return this.$store.state.countryCode;
    },
    googleMaps() {
      return getCountryVariables(this.countryCode, "googleMaps");
    },
    addresses() {
      return getCountryVariables(this.countryCode, "addresses");
    },
    phones() {
      return getCountryVariables(this.countryCode, "phones");
    },
    emails() {
      return getCountryVariables(this.countryCode, "emails") || {};
    },
    additionalContacts() {
      return getCountryVariables(this.countryCode, "additionalContacts") || [];
    },
  },
};
</script>