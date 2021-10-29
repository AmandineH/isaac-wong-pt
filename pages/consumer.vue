<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden p-20px text-white md:m-20px bg-center bg-no-repeat bg-cover min-h-200px"
        :style="{
          backgroundImage: 'url(\'' + require('@/assets/consumer.png') + '\')',
        }"
      >
        <div
          class="absolute bg-blue-0D86C0 w-full left-100px md:-left-500px h-1000px -bottom-100px md:bottom-0 transform rotate-45"
        ></div>

        <h1 class="supheader-1 relative z-10">Consumer</h1>
      </div>
    </div>

    <div class="bg-gray-E8E3DD -mt-100px pt-100px mb-20px">
      <div class="mx-auto max-w-1300px md:flex p-20px items-center">
        <img src="@/assets/8prop.png" alt="8prop" class="h-50px md:h-100px" />
        <p class="mt-20px md:mt-0 md:ml-20px text-gray-666666">
          With 8PROP, we help buyers, sellers, renters, agents and investors choose the best possible homes to meet their needs by providing them with the information platform they need.  Whether it is to find/list homes, compare prices, take an in-depth 360 virtual tour of the home, learn more about the estate, get a quick automated estimate value of the home that uses data analytics across the similar transactions around the neighbourhood, evaluate the investment opportunity over time, and more.  Users can get all this on the 8PROP site, visit <a href="https://8prop.com/">https://8prop.com/</a>
        </p>
      </div>
    </div>

    <div class="mx-auto max-w-1300px md:flex">
      <div class="m-20px md:w-1/2">
        <h1 class="text-blue-191F6B title-1 mb-10px">8PROP 360</h1>
        <p>If you’re looking to sell your home or you’re an agent looking to help your clients get the best price for their home, can we recommend getting 8PROP 360 to give potential buyers (or renters!) a better view of the amazing home.  It’ll also increase the number of actual qualified interested buyers, reducing the time spent on house tours, thereby giving you more time to decide the best price. Visit <a href="https://8prop.com/360">https://8prop.com/360</a></p>
      </div>
      <div class="m-20px md:w-1/2">
        <h1 class="text-blue-191F6B title-1 mb-10px">8PROP Concierge</h1>
        <p>If you need help finding a home or a real estate investment, let our concierge service help you!  We have licensed professionals standing by to listen to your needs and find the best possible options for you to choose from.  Using the extensive information that is already at our fingertips, we can search and give you the best and unbiased advice and possibilities that will meet your specific requirements, making your life so much easier.  Try us!</p>
      </div>
    </div>
    <div class="mx-auto max-w-1300px md:flex">
      <div class="m-20px md:w-1/2">
        <h1 class="text-blue-191F6B title-1 mb-10px">8PROP Valuation</h1>
        <p>Leveraging our extensive real estate data from the market, our licensed valuers can give you an accurate, full and comprehensive valuation of your property within 24hours.  This will help you justify your price and make the most of your investment. Visit <a href="https://8prop.com/xpert" >https://8prop.com/xpert</a></p>
      </div>
      <div class="m-20px md:w-1/2">
        <h1 class="text-blue-191F6B title-1 mb-10px">8PROP Marketplace</h1>
        <p>Providing an aggregated, up-to-date listing of available homes, both new and resale, in the market, 8PROP Listing will allow home buyers to quickly find the best options that meets their needs in a clear, quick way without conflicting and repeated entries of the same property.  And if they need some assistance, they can always call on our 8PROP Concierge service to make the whole process even easier. </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default-light",
};
</script>