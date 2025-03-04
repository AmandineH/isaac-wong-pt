<template>
  <div
    class="mx-auto max-w-1300px relative"
    :class="isLg ? 'px-32px py-52px' : 'py-32px'"
  >
    <div :class="isLg ? 'mb-32px' : 'mb-24px'">
      <p class="text-black display-md-bold text-center">
        Let me help you reach your goals!
      </p>
    </div>

    <div
      class="flex gap-16px"
      :class="isLg ? 'items-center' : 'flex-col md:flex-row md:justify-center md:flex-wrap px-24px'"
    >
      <div
        v-for="(product, key) in products"
        :key="key"
        class="
          group
          border-4px
          rounded-12px
          bg-black
          border-transparent
          hover:border-primary-blue
          overflow-hidden
        "
        :class="[product.class, isLg ? '' : 'w-full md:w-[calc(50%-8px)]']"
      >
          <div class="flex flex-col overflow-hidden w-full h-full">
            <div class="relative">
              <img
                :src="product.src"
                class="w-full max-h-200px object-center object-cover"
              />
              <div class="absolute inset-0 bg-black opacity-50" />
              <p
                class="
                  text-center text-white
                  display-xs-bold
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  uppercase
                  p-16px
                "
                v-html="product.label"
              ></p>
            </div>

            <div class="p-16px flex flex-col flex-grow">
              <div class="flex flex-col flex-grow gap-8px mb-24px">
                <p
                  v-for="(feature, key) in product.features"
                  :key="key"
                  class="text-white body-2 flex gap-8px items-center"
                >
                  <img src="@/assets/utility/check.svg" />
                  {{ feature }}
                </p>
              </div>

              <div>
                <a
                  :href="`https://wa.me/+6597567270?text=${encodeURIComponent(
                    'Hello, I would like to know more about your coaching services! \n\n1. In-Person Coaching \n2. ⁠Online Coaching \n3. ⁠Fitness Business Coaching \n\nName: \nGender: \nAge: \nPreferred Coaching Service (1, 2, or 3): \n\nUltimate Goal: \n\nPre-existing injuries / medical conditions / illnesses / diseases: \nExercise history:'
                  )}`"
                  target="_blank"
                  class="w-full"
                >
                  <div
                    class="
                      text-md-semibold text-white
                      bg-primary-blue
                      opacity-100
                      hover:opacity-80
                      px-32px
                      py-16px
                      rounded-8px
                      uppercase
                      text-center
                    "
                  >
                    Get Started
                  </div>
                </a>

                <a 
                  class="flex text-gray-200 hover:underline justify-center pt-12px cursor-pointer text-sm"
                  :href="`/results-and-testimonials?category=${product.key}`"
                >
                  View Testimonials
                </a>
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
          key: "online-coaching",
          src: require("@/assets/services/virtual-personal-training.jpg"),
          label: "Online Coaching",
          features: [
            "Customized training plan",
            "Customized nutrition plan",
            "Daily monitoring and support",
            "Option for Virtual Personal Training",
          ],
          class: this.isLg ? "flex-1" : "order-2",
        },
        {
          key: "personal-training",
          src: require("@/assets/services/personal-training.jpg"),
          label: "PERSONAL TRAINING<br/>(In-Person | 1:1, 1:2)",
          features: [
            "1:1 in-person coaching",
            "Customized training plan",
            "Customized nutrition plan",
            "Out-of-session monitoring",
            "Daily support",
          ],
          class: this.isLg ? "w-2/5 flex-shrink-0" : "order-1",
        },
        {
          key: "mentorship",
          src: require("@/assets/services/online-coaching.jpg"),
          label: "MENTORSHIP FOR COACHES | FITNESS BUSINESS CONSULTANCY",
          features: [
            "Customized solutions to grow your fitness business",
            "Technical advisory for training / nutrition programming",
            "Enquire to find out more!",
          ],
          class: this.isLg ? "flex-1" : "order-3",
        },
      ];
    },
  },
};
</script>
