<template>
  <div>
    <div
      class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px h-200px md:h-400px"
      :style="{
        backgroundImage: 'url(\'' + require('@/assets/images/career.jpg') + '\')',
      }"
    >
      <div
        class="absolute w-full transform rotate-45 bg-blue-0689BC left-50px md:-left-500px h-1000px -bottom-50px md:bottom-100px"
      ></div>

      <h1 class="relative z-10 supheader-1">Careers</h1>
    </div>

    <div class="bg-gray-E8E8F0 -mt-100px pt-100px mb-20px">
      <div class="mx-auto max-w-1300px p-20px">
        <p class="body-4 text-gray-666666">At Real Estate Analytics we recognize our employees are our greatest asset and we support them in their professional growth and personal lives.  We encourage our team to continue their education, giving them time to achieve this.  Beyond a hybrid work environment, we provide good medical coverage, flexible working hours, nurture a supportive environment, and more.  We are committed to doing what we can to help our employees succeed.</p> 
      </div>
    </div>

    <div class="p-20px">
      <div class="mx-auto max-w-1300px">
        <div class="flex flex-col items-center">
          <h1 class="text-center title-1 text-gray-666666">
            Positions available
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/4 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <div class="my-20px">
            <div
              v-for="(position, key) in positions" :key="key"
              class="items-center justify-between md:flex bg-gray-E8E8F0 p-20px mb-20px">
              <div class="w-3/4">
                <h1 class="title-1 text-blue-191f6C mb-10px">{{ position.positionTitle }}</h1>
                <p class="body-4 text-blue-333333 mb-10px">{{ position.positionDescription }}</p>
                <p class="flex items-center body-4 text-blue-333333"><img
                src="@/assets/utility/location.svg"
                alt="location" /> {{ position.positionLocation }}</p>
              </div>
              <a href="mailto:careers@realestateanalytics.sg">
                <button
                  class="flex items-center border border-blue-00ACD7 p-5px body-4 text-gray-666666 mt-20px md:mt-0"
                >
                  Apply now
                  <img src="@/assets/utility/arrow-light-blue.svg" alt="arrow" />
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
export default {
  layout: "default-light",
  data() {
    return {
      positions: [
        {
          id: 1,
          positionTitle: "Data Science Engineer",
          positionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean actellus id dui semper aliquam. Maecenas vitae felis et orcimolestie sagittis. Mauris at ligula eu est porta porta at eu est. Vestibulum tincidunt nunc metus, nec scelerisque ligula vestibuluma.",
          positionLocation: "Singapore",
        },
        {
          id: 2,
          positionTitle: "Growth Manager",
          positionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean actellus id dui semper aliquam. Maecenas vitae felis et orcimolestie sagittis. Mauris at ligula eu est porta porta at eu est. Vestibulum tincidunt nunc metus, nec scelerisque ligula vestibuluma.",
          positionLocation: "Australia",
        }
      ]
    }
  }
};
</script>