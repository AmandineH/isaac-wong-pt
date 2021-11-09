<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage: 'url(\'' + require('@/assets/images/corporate-government.jpg') + '\')',
        }"
      >
        <div
      class="absolute transform rotate-45 -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
        ></div>

        <h1 class="relative z-10 supheader-1">Perusahaan / <br />Pemerintah</h1>
      </div>
    </div>

    <div class="bg-gray-E8E8F0 -mt-100px pt-100px mb-20px">
      <div class="flex items-center mx-auto max-w-1300px p-20px">
        <img src="@/assets/utility/building-search.svg" alt="building-search" class="h-60px md:h-100px" />
        <p class="ml-20px text-gray-666666">
          Kami membantu perusahaan, pemerintah, LSM, dan organisasi lain dengan informasi, analisis, dan solusi yang disesuaikan dan ditargetkan untuk membantu kebutuhan real estat secara khusus.
        </p>
      </div>
    </div>

    <div class="mx-auto max-w-1300px md:flex">
      <div class="flex items-center flex-1 md:flex-col m-20px">
        <img src="@/assets/utility/data-search.svg" alt="data-search" class="h-70px mb-20px" />
        <p class="md:text-center ml-20px text-gray-666666">Kami menyediakan kemudahan dalam mengakses database properti, transaksi dan list di Asia and daerah luar Asia.</p>
      </div>
      <div class="flex items-center flex-1 md:flex-col m-20px">
        <img src="@/assets/utility/stats.svg" alt="stats" class="h-70px mb-20px" />
        <p class="md:text-center ml-20px text-gray-666666">Kami membangun alat yang dapat membantu dalam mengambil keputusan yang cerdas dan berwawasan luas di dunia real estate global.</p>
      </div>
      <div class="flex items-center flex-1 md:flex-col m-20px">
        <img src="@/assets/utility/idea.svg" alt="idea" class="h-70px mb-20px" />
        <p class="md:text-center ml-20px text-gray-666666">Kami membantu para pemain di lapangan melalui data yang khusus di buat untuk produk dan servis daripada real estate untuk membantu mencapai tujuan.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default-light",
};
</script>