<template>
  <div>
    <img
      src="@/assets/images/home.jpg"
      alt="home"
      class="w-full min-h-80vh"
    />

    <div class="relative">
      <!-- TODO: CARROUSEL (AMANDINE) -->
      <div class="absolute w-full top-50px h-30px bg-gray-E8E8F0"/>
      <div class="relative z-10 mx-auto max-w-1300px -mt-50px">
        <div class=" mx-20px">
          <div class="p-20px bg-gray-E8E8F0 text-gray-666666">
            <p>We empower people and organizations to make the best decisions when it comes to real estate. Whether it is buying, selling, renting, brokering, developing, investing, leveraging or planning real estate, we have the tools and capabilities that deliver the best-in-class solutions, analytics and information. </p>
            <p>Conceptualized over 20 years ago when technology wasn’t ready, Real Estate Analytics has today brought together some of the best analysts, web developers, engineers and scientists to achieve our goal; that anyone can benefit from real estate by making the right decisions with easy-to-use technology and the right data. </p>
            <p>We now provide products and services for the residential real estate market, as well as offer specially tailored real estate analytics, information, and solutions, to governments, companies, and other organizations.</p>
            <p>Headquartered in Singapore, we have offices in Hong Kong, Indonesia, and Malaysia.  Come speak to us about your real estate needs. </p>
          </div>
          <div class="flex">
            <div class="w-1/2 text-white p-20px bg-blue-191f6C">
              <h1 class="title-2 mb-20px">Consumer</h1>
              <p class="body-3">With 8PROP, we help buyers, sellers, renters, agents and investors choose the best possible homes to meet their needs by providing them with the information platform they need. </p>
            </div>
            <div class="w-1/2 text-white p-20px bg-blue-00ACD7">
              <h1 class="title-2 mb-20px">Corporate/Government </h1>
              <p class="body-3">We assist companies, governments, NGOs and other organizations with tailored and targeted information, analytics and solutions to help with specific real estate needs. </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="flex flex-col items-center">
          <h1 class="text-center title-1 text-gray-666666">
            News, stories and recent developments
            <div class="flex w-300px">
              <span class="w-1/4 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <div class="my-20px">
            Stories Layout
            <!-- TODO: -->
          </div>
          <button
            class="flex items-center border border-blue-00ACD7 px-5px body-4 text-gray-666666"
          >
            Click here for more stories
            <img src="@/assets/arrow-light-blue.png" alt="arrow" />
          </button>
        </div>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="relative overflow-hidden text-white bg-blue-00ACD7 p-20px">
          <div
            class="absolute w-full bg-blue-0689BC"
            style="transform: rotate(-45deg);left: -500px;height: 1000px;bottom: 0;"
          ></div>

          <div class="relative z-10 flex">
            <img src="@/assets/images/join-us.jpg" alt="join-us" class="h-300px" />
            <div class="ml-20px">
              <p class="mb-20px">
                At Real Estate Analytics we recognize our employees are our
                greatest asset and we support them in their professional growth
                and personnal lives. We encourage our team to continue their
                education, giving them time to achieve this. beyond a hybrid
                work environnement, we provide a good medical coverage, flexible
                working hours, nuture a supportive environment , and more. We
                are committed to doing what we can to help our employees
                succeed.
              </p>
              <button
                class="flex items-center border border-blue-191f6C px-5px body-3"
              >
                Come join us
                <img src="@/assets/arrow-dark-blue.png" alt="arrow" />
              </button>
            </div>
          </div><!--- -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
};
</script>
