<template>
  <div
    class="mx-auto max-w-1300px relative"
    :class="isLg ? 'px-40px py-80px' : 'py-40px'"
  >
    <img
      src="@/assets/utility/arrow-green.svg"
      alt="arrow"
      class="absolute transform rotate-180"
      :class="
        isLg ? 'top-100px w-500px right-40px' : 'top-150px w-200px right-20px'
      "
    />

    <div class="relative">
      <div :class="isLg ? 'mb-40px' : 'px-20px mb-20px'">
        <p class="text-black supheader-1 mb-20px text-center">
          Let's do it together
        </p>
        <p class="text-black body-2 text-center">
          There are many different ways to get fit and stay fit. Lose weight,
          run a marathon or get that beach body—take a look below at the
          different ways I can help achieve your fitness goals. Please contact
          me directly for a quote!
        </p>
      </div>

      <div v-if="isLg" class="flex gap-20px">
        <div
          v-for="(product, key) in products"
          :key="key"
          class="flex-1 bg-black flex flex-col rounded-10px overflow-hidden"
        >
          <img :src="product.src" class="w-full mb-10px" />
          <div class="p-20px flex-grow flex flex-col justify-between gap-40px">
            <div>
              <p class="text-center text-white header-1 mb-20px">
                {{ product.label }}
              </p>
              <div class="flex flex-col gap-10px">
                <p
                  v-for="(feature, key) in product.features"
                  :key="key"
                  class="text-white body-2 flex gap-10px items-center"
                >
                  <img src="@/assets/utility/check.svg" />
                  {{ feature }}
                </p>
              </div>
            </div>

            <div class="flex justify-center">
              <a
                :href="`https://wa.me/+6597567270?text=${product.message}`"
                target="_blank"
                class="
                  text-white
                  border-2px border-green-2B986B
                  hover:bg-green-2B986B
                  px-40px
                  py-10px
                  rounded-5px
                  bg-green-2B986B33
                "
                >Get Started</a
              >
            </div>
          </div>
        </div>
      </div>
      <Carousel v-else :slides="products" :autoplay="false">
        <template #slide="{ slide }">
          <div class="px-20px h-full">
            <div
              class="h-full bg-black rounded-10px flex flex-col overflow-hidden"
            >
              <img :src="slide.src" class="w-full mb-10px" />
              <div
                class="p-20px flex-grow flex flex-col justify-between gap-40px"
              >
                <div>
                  <p class="text-center text-white header-1 mb-20px">
                    {{ slide.label }}
                  </p>
                  <div class="flex flex-col gap-10px">
                    <p
                      v-for="(feature, key) in slide.features"
                      :key="key"
                      class="text-white body-2 flex gap-10px items-center"
                    >
                      <img src="@/assets/utility/check.svg" />
                      {{ feature }}
                    </p>
                  </div>
                </div>

                <div class="flex justify-center">
                  <a
                    :href="`https://wa.me/+6597567270?text=${slide.message}`"
                    target="_blank"
                    class="
                      text-white
                      border-2px border-green-2B986B
                      hover:bg-green-2B986B
                      px-40px
                      py-10px
                      rounded-5px
                    "
                    >Get Started</a
                  >
                </div>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  components: {
    Carousel,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
    products() {
      return [
        {
          key: "personal-training",
          src: require("@/assets/services/personal-training.jpg"),
          label: "Personal Training",
          features: [
            "1:1 in-person coaching",
            "Customized training plan",
            "Customized nutrition plan",
            "Out-of-session monitoring",
            "Daily support",
          ],
          message: `${encodeURIComponent(
            "Hi, I would like to know more about Personal Training. \nName: \nAge: \nActivity level:"
          )}`,
        },
        {
          key: "virtual-personal-training",
          src: require("@/assets/services/virtual-personal-training.jpg"),
          label: "Virtual Personal Training",
          features: [
            "1:1 virtual coaching",
            "Customized training plan",
            "Customized nutrition plan",
            "Out-of-session monitoring",
            "Daily support",
          ],
          message: `${encodeURIComponent(
            "Hi, I would like to know more about Virtual Personal Training. \nName: \nAge: \nActivity level:"
          )}`,
        },
        {
          key: "online-coaching",
          src: require("@/assets/services/online-coaching.jpg"),
          label: "Online Coaching",
          features: [
            "Customized training plan",
            "Customized nutrition plan",
            "Daily monitoring and support",
          ],
          message: `${encodeURIComponent(
            "Hi, I would like to know more about Online Coaching. \nName: \nAge: \nActivity level:"
          )}`,
        },
      ];
    },
  },
};
</script>
