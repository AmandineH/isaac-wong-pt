<template>
  <div>
    <div
      class="flex items-center overflow-hidden text-white bg-center bg-no-repeat bg-cover min-h-400px"
      :style="{
        backgroundImage: 'url(\'' + require('@/assets/images/home.jpg') + '\')',
      }"
    >
      <div>
        <div class="mx-auto max-w-1300px p-40px">
          <h1 class="title-1 text-blue-00ACD7 mb-10px">
            Real Estate Analytics
          </h1>
          <p class="text-white body-2 md:w-200px">
            We empower everyone to make the best real estate decisions
          </p>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="absolute w-full top-100px h-10px bg-blue-00ACD7" />
      <div class="relative z-10 mx-auto max-w-1300px -mt-100px">
        <Carousel class="md:mx-20px" :slides="[1, 2]" :dots="true">
          <template v-for="(slide, index) in [1, 2]" v-slot:[slide]>
            <div :key="index" v-if="slide === 1">
              <div class="p-40px bg-gray-E8E8F0 text-gray-666666">
                <p>
                  We empower people and organizations to make the best decisions
                  when it comes to real estate. Whether it is buying, selling,
                  renting, brokering, developing, investing, leveraging or
                  planning real estate, we have the tools and capabilities that
                  deliver the best-in-class solutions, analytics and
                  information.
                </p>
                <p>
                  Conceptualized over 20 years ago when technology wasn’t ready,
                  Real Estate Analytics has today brought together some of the
                  best analysts, web developers, engineers and scientists to
                  achieve our goal; that anyone can benefit from real estate by
                  making the right decisions with easy-to-use technology and the
                  right data.
                </p>
                <p>
                  We now provide products and services for the residential real
                  estate market, as well as offer specially tailored real estate
                  analytics, information, and solutions, to governments,
                  companies, and other organizations.
                </p>
                <p>
                  Headquartered in Singapore, we have offices in Hong Kong,
                  Indonesia, and Malaysia. Come speak to us about your real
                  estate needs.
                </p>
              </div>
              <div class="md:flex">
                <div class="text-white md:w-1/2 p-40px bg-blue-191f6C">
                  <h1 class="title-2 mb-20px">Consumer</h1>
                  <p class="body-3 mb-20px">
                    We help everyone choose the best possible homes to meet their needs
                  </p>
                  <a href="/consumer">
                    <button
                      class="flex items-center border border-blue-00ACD7 p-5px body-4"
                    >
                      Read more
                      <img
                        src="@/assets/utility/arrow-light-blue.svg"
                        alt="arrow"
                      />
                    </button>
                  </a>
                </div>
                <div class="text-white md:w-1/2 p-40px bg-blue-00ACD7">
                  <h1 class="title-2 mb-20px">Corporate/Government</h1>
                  <p class="body-3 mb-20px">
                    We assist companies and governments with tailored and targeted information
                  </p>
                  <a href="/corporate-government">
                    <button
                      class="flex items-center border border-blue-191f6C p-5px body-4"
                    >
                      Read more
                      <img
                        src="@/assets/utility/arrow-dark-blue.svg"
                        alt="arrow"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div :key="index" v-if="slide === 2" class="md:flex">
              <div
                class="flex-1 text-white bg-blue-191f6C px-20px pb-20px group"
              >
                <center>
                  <img
                    src="@/assets/utility/arrow-white.svg"
                    alt="arrow"
                    class="transform rotate-90 opacity-0 group-hover:opacity-100 pb-20px pt-10px"
                  />
                </center>
                <h1 class="title-1 mb-10px">Real Estate Anlytics</h1>
                <p class="mb-20px body-3">
                  We empower everyone to make the best real estate decisions
                </p>
                <a href="/about">
                  <button
                    class="flex items-center border border-blue-00ACD7 p-5px body-3"
                  >
                    Read More
                    <img
                      src="@/assets/utility/arrow-light-blue.svg"
                      alt="arrow"
                    />
                  </button>
                </a>
              </div>
              <div
                class="flex-1 text-white bg-blue-00ACD7 px-20px pb-20px group"
              >
                <center>
                  <img
                    src="@/assets/utility/arrow-white.svg"
                    alt="arrow"
                    class="transform rotate-90 opacity-0 group-hover:opacity-100 pb-20px pt-10px"
                  />
                </center>
                <h1 class="title-1 mb-10px">Consumer</h1>
                <p class="mb-20px body-3">
                  With 8PROP, we help buyers, sellers, renters, agents and
                  investors choose the best possible homes to meet their needs
                  by providing them with the information platform they need.
                </p>
                <a href="/consumer">
                  <button
                    class="flex items-center border border-blue-191f6C p-5px body-3"
                  >
                    Read More
                    <img
                      src="@/assets/utility/arrow-dark-blue.svg"
                      alt="arrow"
                    />
                  </button>
                </a>
              </div>
              <div
                class="flex-1 text-white bg-gray-666666 px-20px pb-20px group"
              >
                <center>
                  <img
                    src="@/assets/utility/arrow-white.svg"
                    alt="arrow"
                    class="transform rotate-90 opacity-0 group-hover:opacity-100 pb-20px pt-10px"
                  />
                </center>
                <h1 class="title-1 mb-10px">Corporate/Government</h1>
                <p class="mb-20px body-3">
                  We assist companies, governments, NGOs and other organizations
                  with tailored and targeted information, analytics and
                  solutions to help with specific real estate needs.
                </p>
                <a href="/corporate-government">
                  <button
                    class="flex items-center border border-blue-00ACD7 p-5px body-3"
                  >
                    Read More
                    <img
                      src="@/assets/utility/arrow-light-blue.svg"
                      alt="arrow"
                    />
                  </button>
                </a>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="flex flex-col items-center">
          <h1 class="text-center title-1 text-gray-666666">
            News, stories and recent developments
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/4 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <div class="my-20px">Stories Layout</div>
          <a href="/news">
            <button
              class="flex items-center border border-blue-00ACD7 p-5px body-4 text-gray-666666"
            >
              Click here for more stories
              <img src="@/assets/utility/arrow-light-blue.svg" alt="arrow" />
            </button>
          </a>
        </div>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="relative overflow-hidden text-white bg-blue-00ACD7 p-40px">
          <div
            class="absolute w-full transform rotate-45 bg-blue-0689BC left-50px md:-left-500px h-1000px bottom-500px md:bottom-100px"
          ></div>

          <div class="relative z-10 items-center md:flex">
            <img
              src="@/assets/images/join-us.jpg"
              alt="join-us"
              class="md:h-250px mb-20px md:mb-0"
            />
            <div class="md:ml-20px">
              <p class="mb-20px">
                At Real Estate Analytics we recognize our employees are our
                greatest asset and we support them in their professional growth
                and personnal lives. We encourage our team to continue their
                education, giving them time to achieve this. Beyond a hybrid
                work environnement, we provide a good medical coverage, flexible
                working hours, nuture a supportive environment, and more. We
                are committed to doing what we can to help our employees
                succeed.
              </p>
              <a href="careers" class="flex justify-center md:block">
                <button
                  class="flex items-center border border-blue-191f6C p-5px body-3"
                >
                  Come join us
                  <img src="@/assets/utility/arrow-dark-blue.svg" alt="arrow" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  layout: "default",
  components: {
    Carousel,
  },
};
</script>
