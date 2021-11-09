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
            PT Real Estate Analytics Indonesia
          </h1>
          <p class="text-white body-2 md:w-200px">
            Kami membantu semua untuk mengambil keputusan terbaik di bidang real estate
          </p>
        </div>
      </div>
    </div>

    <div class="relative px-20px">
      <div class="absolute w-full top-100px h-10px bg-blue-00ACD7" />
      <div class="relative z-10 mx-auto max-w-1300px -mt-100px">
        <Carousel :slides="[1, 2]" :dots="true">
          <template v-for="(slide, index) in [1, 2]" v-slot:[slide]>
            <div :key="index" v-if="slide === 1">
              <div class="p-40px bg-gray-E8E8F0 text-gray-666666">
                <p>
                  Kami membuat organisasi dan perorangan untuk membuat keputusan terbaik dalam segala hal  mengenai real estate. 
                  Baik itu pembelian, penjualan, penyewaan, perantara, pengembangan, investasi, pemanfaatan, atau perencanaan real estate, 
                  kami memiliki tools dan kemampuan yang memberikan solusi, analitik, dan informasi terbaik di kelasnya.
                </p>
                <p>
                  Dikonseptualisasikan lebih dari 20 tahun yang lalu ketika teknologi belum siap, 
                  Real Estate Analytics hari ini telah mengumpulkan beberapa analis, pengembang web, insinyur, dan ilmuwan terbaik untuk mencapai tujuan kami; 
                  bahwa siapa pun dapat memperoleh manfaat dari real estat dengan membuat keputusan yang tepat dengan teknologi yang mudah digunakan dan data yang tepat.
                </p>
                <p>
                  Kami saat ini menyediakan produk dan layanan untuk pasar real estate, serta menawarkan analisa, informasi, dan solusi real estate yang dirancang khusus, kepada pemerintah, perusahaan, dan organisasi lainnya.
                </p>
                <p>
                  Berpusat di Singapura, kami juga memiliki kantor di Hong Kong, Indonesia, dan Malaysia. Ayo konsultasikan kebutuhan properti Anda kepada kami.
                </p>
              </div>
              <div class="md:flex">
                <div class="text-white md:w-1/2 p-40px bg-blue-191f6C">
                  <h1 class="title-2 mb-20px">Konsumen</h1>
                  <p class="body-3 mb-20px">
                    Dengan 8PROP, kami membantu pembeli, penjual, penyewa, agen, dan investor memilih rumah terbaik untuk memenuhi kebutuhan mereka dengan menyediakan platform informasi yang mereka butuhkan.
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
                  <h1 class="title-2 mb-20px">Perusahaan / Pemerintahan</h1>
                  <p class="body-3 mb-20px">
                    Kami membantu perusahaan, pemerintah, LSM, dan organisasi lain dengan informasi, analisis, dan solusi yang disesuaikan dan ditargetkan untuk membantu kebutuhan real estat secara khusus.
                  </p>
                  <a href="/corporate-government">
                    <button
                      class="flex items-center border border-blue-191f6C p-5px body-4"
                    >
                      Baca Lebih
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
                <h1 class="title-1 mb-10px">PT Real Estate Analytics Indonesia</h1>
                <p class="mb-20px body-3">
                  Kami membantu semua untuk mengambil keputusan terbaik di bidang real estate
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
                <h1 class="title-1 mb-10px">Konsumen</h1>
                <p class="mb-20px body-3">
                  Dengan 8PROP, kami membantu pembeli, penjual, penyewa, agen, dan investor memilih rumah terbaik untuk memenuhi kebutuhan mereka dengan menyediakan platform informasi yang mereka butuhkan.
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
                  Kami membantu perusahaan, pemerintah, LSM, dan organisasi lain dengan informasi, analisis, dan solusi yang disesuaikan dan ditargetkan untuk membantu kebutuhan real estat secara khusus.
                </p>
                <a href="/corporate-government">
                  <button
                    class="flex items-center border border-blue-00ACD7 p-5px body-3"
                  >
                    Baca Lebih
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

    <!-- <div class="py-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="flex flex-col items-center">
          <h1 class="text-center title-1 text-gray-666666 mx-20px">
            News, Stories and Recent Developments
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/4 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <ArticlesGrid :nbArticles="3" :loadMore="false" />
          <a href="/news">
            <button
              class="flex items-center border border-blue-00ACD7 p-5px body-4 text-gray-666666 mx-20px"
            >
              Click here for more stories
              <img src="@/assets/utility/arrow-light-blue.svg" alt="arrow" />
            </button>
          </a>
        </div>
      </div>
    </div> -->

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="relative overflow-hidden text-white bg-blue-00ACD7 p-40px">
          <div
            class="absolute transform rotate-45 -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
          ></div>

          <div class="relative z-10 items-center md:flex">
            <img
              src="@/assets/images/join-us.jpg"
              alt="join-us"
              class="md:h-250px mb-20px md:mb-0"
            />
            <div class="md:ml-20px">
              <p class="mb-20px">
                Di REA Indonesia, staff kami adalah asset. Kami mendukung mereka dalam perjalanan karir professional mereka dan kehidupan.
                Kami juga selalu mendukung staff untuk melanjutkan pendidikan. Kami menawarkan jam kerja yang flexible, asuransi kesehatan, lingkungan kerja yang 
                supportive. Kami selalu membantu staff untuk mencapai sukses. 
              </p>
              <a href="careers" class="flex justify-center md:block">
                <button
                  class="flex items-center border border-blue-191f6C p-5px body-3"
                >
                 Mari Bergabung Dengan Kami
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
// components
import Carousel from "@/components/Carousel.vue";
import ArticlesGrid from "@/components/ArticlesGrid.vue";

export default {
  layout: "default",
  components: {
    Carousel,
    ArticlesGrid
  },
};
</script>
