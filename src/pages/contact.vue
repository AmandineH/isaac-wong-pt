<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="
          relative
          overflow-hidden
          text-white
          bg-center bg-no-repeat bg-cover
          p-20px
          md:m-20px
          h-200px
          md:h-400px
        "
        :style="{
          backgroundImage:
            'url(\'' + require('@/assets/images/contact.jpg') + '\')',
        }"
      >
        <div
          class="
            absolute
            transform
            rotate-45
            -left-1000px
            md:-left-750px
            -top-500px
            w-1000px
            bg-blue-0689BC
            h-1000px
          "
        ></div>

        <h1 class="relative z-10 supheader-1">{{ $t("contact.contactus") }}</h1>
      </div>
    </div>

    <div class="bg-gray-E8E8F0 -mt-100px pt-100px mb-20px">
      <div class="relative justify-end mx-auto max-w-1300px md:flex p-20px">
        <iframe
          :src="googleMapsEmbed"
          class="
            top-0
            left-0
            w-full
            md:w-1/2
            min-h-300px
            md:absolute md:pl-20px
          "
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <div class="md:w-1/2 md:px-20px mt-20px md:mt-0">
          <div class="mb-20px">
            <p class="title-3 mb-20px text-gray-666666">
              {{ $t("index.realestateanalytics") }}
            </p>
            <div>
              <p class="body-4 text-gray-666666">
                {{ $t("footer.addressline1") }}
              </p>
              <p class="body-4 text-gray-666666">
                {{ $t("footer.addressline2") }}
              </p>
              <p class="body-4 text-gray-666666">
                {{ $t("footer.addressline3") }}
              </p>
              <p class="body-4 text-gray-666666">
                {{ $t("footer.addressline4") }}
              </p>
            </div>
          </div>
          <div v-if="countryCode === 'SG'">
            <p class="title-3 mb-20px text-gray-666666">
              Real Estate Analytics HK Limited
            </p>
            <div>
              <p class="body-4 text-gray-666666">
                904-907 Dah Sing Financial Centre
              </p>
              <p class="body-4 text-gray-666666">
                248 Queen's Road East, Wanchai, HK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="justify-end mx-auto max-w-1300px md:flex px-20px">
      <div class="md:w-1/2 md:px-20px">
        <div class="flex items-center mb-20px">
          <img src="@/assets/utility/phone.svg" alt="phone" class="h-30px" />
          <div class="ml-20px">
            <p class="body-4 text-gray-666666">
              {{ countryCode }} Office: {{ $t("contact.phonenumber") }}
            </p>
            <p class="body-4 text-gray-666666" v-if="countryCode === 'SG'">
              HK Office :+852 2639 3698
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
              href="mailto:consumer@rea-sg.com"
              >{{ $t("footer.emailconsumer") }}</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">
              {{ $t("footer.concierge") }}
            </p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:concierge@rea-sg.com"
              >{{ $t("footer.emailconcierge") }}</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">
              {{ $t("footer.corporate") }}
            </p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:corporate@rea-sg.com"
              >{{ $t("footer.emailcorporate") }}</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">
              {{ $t("footer.media") }}
            </p>
            <a class="body-4 text-gray-666666" href="mailto:media@rea-sg.com">{{
              $t("footer.companyname")
            }}</a>
          </div>
        </div>

        <div class="flex items-start mb-20px" v-if="countryCode !== 'SG'">
          <div class="h-30px w-30px"></div>
          <div class="ml-20px">
            <p class="title-3 mb-20px text-gray-666666">
              {{ $t("contact.consumerfeedbackservice") }}
            </p>
            <p class="text-blue-00ACD7 body-4 mt-10px">Contact Number</p>
            <a href="tel:085311111010" class="body-4 text-gray-666666"
              >{{ $t("contact.phonenumber") }}
            </a>
            <p class="text-blue-00ACD7 body-4 mt-10px">Email</p>
            <a
              href="mailto:cpengaduan.konsumen@kemendag.go.id"
              class="body-4 text-gray-666666"
              >{{ $t("contact.localemail") }}</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">Website</p>
            <a href="simpktn.kemendag.go.id" class="body-4 text-gray-666666"
              >{{ $t("contact.localwebsite") }}</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">Mail Address</p>
            <a href="mailto:media@rea-id.com" class="body-4 text-gray-666666"
              >{{ $t("contact.localsnailmail") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "default",
  computed: {
    ...mapState(["countryCode", "googleMapsEmbed"]),
  },
};
</script>