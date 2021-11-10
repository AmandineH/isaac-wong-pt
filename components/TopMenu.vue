<template>
  <div>
    <div
      class="hidden md:block"
      :class="[dark ? 'absolute top-0 w-full' : '']"
    >
      <div class="mx-auto max-w-1300px p-20px">
        <div class="flex items-end justify-between">
          <a href="/">
            <img
              v-if="dark"
              src="@/assets/rea/rea-white.svg"
              alt="rea"
              class="h-50px mb-10px"
            />
            <img
              v-else
              src="@/assets/rea/rea.svg"
              alt="rea"
              class="h-50px mb-10px"
            />
          </a>
          <div class="flex">
            <a
              href="/about"
              class="my-20px ml-40px body-3"
              :class="[dark ? 'text-white' : 'text-blue-191f6C']"
            >
              About us
            </a>
            <a
              href="/news"
              class="my-20px ml-40px body-3"
              :class="[dark ? 'text-white' : 'text-blue-191f6C']"
            >
              News & Developments
            </a>
            <a
              href="/careers"
              class="my-20px ml-40px body-3"
              :class="[dark ? 'text-white' : 'text-blue-191f6C']"
            >
              Careers
            </a>
            <a
              href="/contact"
              class="my-20px ml-40px body-3"
              :class="[dark ? 'text-white' : 'text-blue-191f6C']"
            >
              Contact us
            </a>
          </div>
        </div>
        <div class="flex">
          <div class="w-1/4 h-2px bg-blue-191f6C"></div>
          <div class="flex-grow h-2px bg-blue-00ACD7"></div>
        </div>
      </div>
    </div>

    <div
      class="block md:hidden"
      :class="[dark ? 'absolute top-0 w-full' : '']"
    >
      <div class="flex justify-between p-20px">
        <img
          v-if="dark"
          src="@/assets/utility/hamburger-white.svg"
          alt="hamburger"
          class="h-30px"
          @click="isOpen = true"
        />
        <img
          v-else
          src="@/assets/utility/hamburger.svg"
          alt="hamburger"
          class="h-30px"
          @click="isOpen = true"
        />

        <a href="/">
          <img
            v-if="dark"
            src="@/assets/rea/rea-white.svg"
            alt="rea"
            class="h-30px"
          />
          <img
            v-else
            src="@/assets/rea/rea.svg"
            alt="rea"
            class="h-30px"
          />
        </a>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex flex-col justify-between"
      :class="[
        dark ?  'bg-gray-666666 text-white' : 'bg-white text-blue-191f6C'
      ]"
    >
      <div class="flex flex-col flex-grow p-20px">
        <div class="flex justify-between">
          <img
            v-if="dark"
            src="@/assets/utility/hamburger-white.svg"
            alt="hamburger"
            class="h-30px"
            @click="isOpen = false"
          />
          <img
            v-else
            src="@/assets/utility/hamburger.svg"
            alt="hamburger"
            class="h-30px"
            @click="isOpen = false"
          />

          <a href="/">
            <img
              v-if="dark"
              src="@/assets/rea/rea-white.svg"
              alt="rea"
              class="h-30px"
            />
            <img
              v-else
              src="@/assets/rea/rea.svg"
              alt="rea"
              class="h-30px"
            />
          </a>
        </div>

        <div class="flex flex-col justify-center flex-grow mb-50px">
          <a
            href="/about"
            class="text-center my-20px body-3"
          >
            About us
          </a>
          <a
            href="/news"
            class="text-center my-20px body-3"
          >
            News & Developments
          </a>
          <a
            href="/careers"
            class="text-center my-20px body-3"
          >
            Careers
          </a>
          <a
            href="/contact"
            class="text-center my-20px body-3"
          >
            Contact us
          </a>
        </div>
      </div>

      <div class="flex justify-center p-20px bg-gray-666666">
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
