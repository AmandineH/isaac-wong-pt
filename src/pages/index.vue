<template>
  <div>
    <div class="relative bg-black overflow-hidden">
      <video
        autoplay
        loop
        muted
        class="w-full"
        :class="isLg ? 'absolute top-0' : ''"
      >
        <source src="@/assets/isaac-wong-pt/trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="bg-black-00000033 relative z-10">
        <div class="mx-auto max-w-1300px" :class="isLg ? 'h-80vh' : ''">
          <div
            :class="isLg ? 'max-w-500px px-40px py-80px' : 'px-20px py-40px'"
          >
            <p class="text-white supheader-1 mb-10px">Isaac Wong</p>
            <p class="text-white header-2 opacity-70">
              Certified Personal Trainer
            </p>

            <p class="text-white mb-20px body-2 mt-20px">
              Reach your fitness goals - I believe that being physically fit is
              something that everybody should be able to enjoy. With over 15
              years of competitive sports experience and more than half a decade
              of profesional coaching under my belt, I have acquired the
              necessary skills and expertise to helf any individual achieve his
              or her fitness goals.
            </p>
            <div class="flex" :class="isLg ? ' justify-end' : 'justify-center'">
              <nuxt-link
                :to="'/contact'"
                class="text-white bg-orange-EE642A px-40px py-10px rounded-5px"
                >Contact Me</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div
        class="mx-auto max-w-1300px"
        :class="isLg ? 'px-40px py-80px' : 'px-20px py-40px'"
      >
        <p class="text-black supheader-1 mb-20px">Let's do it together</p>
        <p class="text-black mb-40px body-2">
          There are many different ways to get fit and stay fit. Lose weight,
          run a marathon or get that beach body—take a look below at the
          different ways I can help achieve your fitness goals. During personal
          training sessions, I will ensure that you lift with good form and are
          pushed in a safe environment while keeping things enjoyable. There
          will be regular out of session check-ins regarding nutrition and your
          general wellbeing to ensure interpersonal accountability.
          <br />If location is a limiting factor, I offer Virtual Personal
          Traning as well. Here I will still be able to check your form and push
          you at the comfort of your own location. For more experienced clients,
          who require just a traning and nutrition plan to follow, I offer
          online coaching too. Do contact me if you think I might be the right
          fit for you!
        </p>

        <div class="flex gap-20px">
          <div
            v-for="(product, key) in products"
            :key="key"
            class="flex-1 bg-black flex flex-col rounded-10px overflow-hidden"
          >
            <img :src="product.src" class="w-full mb-10px" />
            <div
              class="p-20px flex-grow flex flex-col justify-between gap-40px"
            >
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
                  >Contact Me</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
