<template>
  <div
    class="mx-auto max-w-1300px"
    :class="isLg ? 'px-40px py-80px' : 'py-40px'"
  >
    <div :class="isLg ? 'mb-40px' : 'px-20px mb-20px'">
      <p class="text-black supheader-1 mb-20px">Let's do it together</p>
      <p class="text-black body-2">
        There are many different ways to get fit and stay fit. Lose weight, run
        a marathon or get that beach body—take a look below at the different
        ways I can help achieve your fitness goals. During personal training
        sessions, I will ensure that you lift with good form and are pushed in a
        safe environment while keeping things enjoyable. There will be regular
        out of session check-ins regarding nutrition and your general wellbeing
        to ensure interpersonal accountability.
        <br />If location is a limiting factor, I offer Virtual Personal Traning
        as well. Here I will still be able to check your form and push you at
        the comfort of your own location. For more experienced clients, who
        require just a traning and nutrition plan to follow, I offer online
        coaching too. Do contact me if you think I might be the right fit for
        you!
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
            <nuxt-link
              :to="'/contact'"
              class="
                text-white
                border border-green-2B986B
                hover:bg-green-2B986B
                px-40px
                py-10px
                rounded-5px
              "
              >Get Started</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <Carousel v-else :slides="products">
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
                  href="https://wa.me/+6588888888"
                  target="_blank"
                  class="
                    text-white
                    border border-green-2B986B
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
          src: require("@/assets/services/personal-training.png"),
          label: "Personal Training",
          features: [
            "1:1 in-person coaching",
            "Customized training plan",
            "Customized nutrition plan",
            "Out-of-session monitoring",
            "Daily support",
          ],
        },
        {
          key: "virtual-personal-training",
          src: require("@/assets/services/virtual-personal-training.png"),
          label: "Virtual Personal Training",
          features: [
            "1:1 virtual coaching",
            "Customized training plan",
            "Customized nutrition plan",
            "Out-of-session monitoring",
            "Daily support",
          ],
        },
        {
          key: "online-coaching",
          src: require("@/assets/services/online-coaching.png"),
          label: "Online Coaching",
          features: [
            "Customized training plan",
            "Customized nutrition plan",
            "Daily monitoring and support",
          ],
        },
      ];
    },
  },
};
</script>
