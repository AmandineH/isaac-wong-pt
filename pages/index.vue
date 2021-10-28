<template>
  <div>
    <img
      src="@/assets/home-page.png"
      alt="home-page"
      class="w-full min-h-80vh"
    />

    <div class="h-30px bg-gray-E8E3DD relative mb-80px">
      <div class="mx-auto max-w-1300px">
        <div class="absolute flex -top-80px mx-20px">
          <!-- TODO: Carrousel -->
          <div class="bg-blue-191F6B text-white px-20px pb-20px group">
            <center>
              <img
                src="@/assets/arrow-white.png"
                alt="arrow"
                class="group-hover:opacity-100 opacity-0"
              />
            </center>
            <h1 class="title-1 mb-10px">Real Estate Anlytics</h1>
            <p class="mb-10px body-3">
              We empower everyone to make the best real estate decisions
            </p>
            <button
              class="border border-blue-03ABD7 px-5px body-3 flex items-center"
            >
              Read More
              <img src="@/assets/arrow-light-blue.png" alt="arrow" />
            </button>
          </div>
          <div class="bg-blue-03ABD7 text-white px-20px pb-20px group">
            <center>
              <img
                src="@/assets/arrow-white.png"
                alt="arrow"
                class="group-hover:opacity-100 opacity-0"
              />
            </center>
            <h1 class="title-1 mb-10px">Real Estate Anlytics</h1>
            <p class="mb-10px body-3">
              We empower everyone to make the best real estate decisions
            </p>
            <button
              class="border border-blue-191F6B px-5px body-3 flex items-center"
            >
              Read More
              <img src="@/assets/arrow-dark-blue.png" alt="arrow" />
            </button>
          </div>
          <div class="bg-gray-666666 text-white px-20px pb-20px group">
            <center>
              <img
                src="@/assets/arrow-white.png"
                alt="arrow"
                class="group-hover:opacity-100 opacity-0"
              />
            </center>
            <h1 class="title-1 mb-10px">Real Estate Anlytics</h1>
            <p class="mb-10px body-3">
              We empower everyone to make the best real estate decisions
            </p>
            <button
              class="border border-blue-03ABD7 px-5px body-3 flex items-center"
            >
              Read More
              <img src="@/assets/arrow-light-blue.png" alt="arrow" />
            </button>
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
