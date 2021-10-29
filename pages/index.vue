<template>
  <div>
    <img
      src="@/assets/home-page.png"
      alt="home-page"
      class="w-full min-h-80vh"
    />

    <div class="relative">
      <!-- TODO: CARROUSEL (AMANDINE) -->
      <div class="absolute top-50px h-30px bg-gray-E8E3DD w-full"/>
      <div class="relative z-10 mx-auto max-w-1300px -mt-50px">
        <div class=" mx-20px">
          <div class="p-20px bg-gray-E8E3DD text-gray-666666">
            <p>We empower people and organizations to make the best decisions when it comes to real estate. Whether it is buying, selling, renting, brokering, developing, investing, leveraging or planning real estate, we have the tools and capabilities that deliver the best-in-class solutions, analytics and information. </p>
            <p>Conceptualized over 20 years ago when technology wasn’t ready, Real Estate Analytics has today brought together some of the best analysts, web developers, engineers and scientists to achieve our goal; that anyone can benefit from real estate by making the right decisions with easy-to-use technology and the right data. </p>
            <p>We now provide products and services for the residential real estate market, as well as offer specially tailored real estate analytics, information, and solutions, to governments, companies, and other organizations.</p>
            <p>Headquartered in Singapore, we have offices in Hong Kong, Indonesia, and Malaysia.  Come speak to us about your real estate needs. </p>
          </div>
          <div class="flex">
            <div class="p-20px w-1/2 bg-blue-191F6B text-white">
              <h1 class="title-2 mb-20px">Consumer</h1>
              <p class="body-3">With 8PROP, we help buyers, sellers, renters, agents and investors choose the best possible homes to meet their needs by providing them with the information platform they need. </p>
            </div>
            <div class="p-20px w-1/2 bg-blue-03ABD7 text-white">
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
          <h1 class="title-1 text-gray-666666 text-center">
            News, stories and recent developments
            <div class="flex w-300px">
              <span class="w-1/4 h-2px bg-blue-191F6B"></span>
              <span class="flex-grow h-2px bg-blue-03ABD7"></span>
            </div>
          </h1>
          <div class="my-20px">
            Stories Layout
            <!-- TODO: -->
          </div>
          <button
            class="
              border border-blue-03ABD7
              px-5px
              body-4
              flex
              items-center
              text-gray-666666
            "
          >
            Click here for more stories
            <img src="@/assets/arrow-light-blue.png" alt="arrow" />
          </button>
        </div>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="bg-blue-03ABD7 relative overflow-hidden p-20px text-white">
          <div
            class="absolute bg-blue-0D86C0 w-full"
            style="transform: rotate(-45deg);left: -500px;height: 1000px;bottom: 0;"
          ></div>

          <div class="relative z-10 flex">
            <img src="@/assets/join-us.png" alt="join-us" />
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
                class="
                  border border-blue-191F6B
                  px-5px
                  body-3
                  flex
                  items-center
                "
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
