<template>
  <div>
    <img src="@/assets/images/about.jpg" alt="about" class="w-full min-h-600px" />

    <div class="relative">
      <div class="absolute w-full top-100px h-10px bg-blue-00ACD7"/>
      <div class="relative z-10 mx-auto max-w-1300px md:-mt-100px">
        <div class="text-white p-20px px-60px bg-blue-00ACD7 md:min-h-200px md:mx-20px">
          <h1 class="text-center uppercase title-1 text-blue-191f6C mb-10px">
            TENTANG KAMI <span class="text-white">MISI</span>
          </h1>
          <p>
            Kami memberikan transparansi untuk memungkinkan pengambilan keputusan yang lebih efisien dan cerdas di pasar real estate global, melalui informasi, analitik, dan solusi khusus yang memberdayakan klien kami.
          </p>
        </div>
        <!-- <Carousel class="md:mx-20px" :slides="[1, 2]" :controls="true">

          <template v-for="(slide, index) in [1, 2]" v-slot:[slide]>
            <div :key="index" v-if="slide === 1" class="text-white p-20px px-60px bg-blue-00ACD7">
              <h1 class="text-center uppercase title-1 text-blue-191f6C mb-10px">
                TENTANG KAMI <span class="text-white">MISI</span>
              </h1>
              <p>
                Kami memberikan transparansi untuk memungkinkan pengambilan keputusan yang lebih efisien dan cerdas di pasar real estate global, melalui informasi, analitik, dan solusi khusus yang memberdayakan klien kami.
              </p>
            </div>

            <div :key="index" v-if="slide === 2" class="text-white p-20px px-60px bg-blue-00ACD7">
              <h1 class="text-center uppercase title-1 text-blue-191f6C mb-10px">
                TENTANG KAMI <span class="text-white">VISI</span>
              </h1>
              <p>
                Menjadi global leader agar setiap orang dan organisasi dapat membuat keputusan terbaik di pasar real estate dunia
              </p>
            </div>
          </template>
        </Carousel> -->
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="flex flex-col items-center">
          <h1 class="text-center title-1 text-blue-191f6C">
            Tentang Kami
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/3 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <div>
            <div class="my-20px">
              Kami membuat organisasi dan perorangan untuk membuat keputusan terbaik dalam segala hal mengenai real estate. 
              Baik itu pembelian, penjualan, penyewaan, perantara, pengembangan, investasi, pemanfaatan, atau perencanaan real estate, 
              kami memiliki tools dan kemampuan yang memberikan solusi, analitik, dan informasi terbaik di kelasnya.

              Dikonseptualisasikan lebih dari 20 tahun yang lalu ketika teknologi belum siap, 
              Real Estate Analytics hari ini telah mengumpulkan beberapa analis, pengembang web, insinyur, dan ilmuwan terbaik untuk mencapai tujuan kami; 
              bahwa siapa pun dapat memperoleh manfaat dari real estat dengan membuat keputusan yang tepat dengan teknologi yang mudah digunakan dan data yang tepat.

              Kami saat ini menyediakan produk dan layanan untuk pasar real estate, serta menawarkan analisa, informasi, dan solusi real estate yang dirancang khusus, 
              kepada pemerintah, perusahaan, dan organisasi lainnya.
            </div>


           <!-- <div class="mx-auto md:w-2/3">
              <div class="flex items-center my-20px">
                <img src="@/assets/utility/mail-lock.svg" alt="mail-lock" class="h-100px" />
                <p class="ml-20px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean ac tellus id dui semper aliquam. Maecenas vitae felis
                  et orci molestie sagittis. Mauris at ligula eu est porta porta
                </p>
              </div>

              <div class="flex items-center">
                <img src="@/assets/utility/mail-add.svg" alt="mail-add" class="h-100px" />
                <p class="ml-20px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean ac tellus id dui semper aliquam. Maecenas vitae felis
                  et orci molestie sagittis. Mauris at ligula eu est porta porta
                  at eu est. Vestibulum tincidunt nunc metus, nec scelerisque
                  ligula vestibulum a. Curabitur facilisis vehicula nibh sit
                  amet aliquet
                </p>
              </div>
            </div>-->

            <div class="my-20px">
              Berpusat di Singapura, kami juga memiliki kantor di Hong Kong, Indonesia, dan Malaysia. Ayo konsultasikan kebutuhan properti Anda kepada kami.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Carousel from "@/components/Carousel.vue";

export default {
  layout: "default",
  components: {
    // Carousel,
  },
};
</script>