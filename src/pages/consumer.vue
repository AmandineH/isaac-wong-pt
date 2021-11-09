<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage: 'url(\'' + require('@/assets/images/consumer.jpg') + '\')',
        }"
      >
        <div
          class="absolute transform rotate-45 -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
        ></div>

        <h1 class="relative z-10 supheader-1">Konsumen</h1>
      </div>
    </div>

    <div class="bg-gray-E8E8F0 -mt-100px pt-100px mb-20px">
      <div class="items-center mx-auto max-w-1300px md:flex p-20px">
        <img src="@/assets/8prop/8prop.svg" alt="8prop" class="h-50px md:h-100px" />
        <p class="mt-20px md:mt-0 md:ml-20px text-gray-666666">
         Dengan 8PROP, kami membantu pembeli, penjual, penyewa, agen, dan investor memilih rumah terbaik untuk memenuhi kebutuhan mereka dengan menyediakan platform informasi yang mereka butuhkan. 
         Apakah itu untuk mencari rumah, membandingkan harga, melihat 360 virtual tur, belajar lebih jauh mengenai real estate, mendapatkan estimasi nilai tempat tinggal anda dengan menggunakan data analis yang membandingkan dengan transaksi di lingkungan sekitar, 
         mengevaluasi kesempatan untuk berinvestasi jangka panjang dan masih banyak lagi.
         Pengguna web ini bisa mendapatkan semua itu dalam 8PROP site, kunjungi <a href="https://8prop.com/" class="text-blue-0689BC">https://8prop.com/</a>
        </p>
      </div>
    </div>

    <div class="mx-auto max-w-1300px md:flex">
      <div class="m-20px md:w-1/2">
        <h1 class="text-blue-191f6C title-1 mb-10px">8PROP 360</h1>
        <p>Jika anda sedang mencari rumah atau agen yang sedang menolong klien untuk mendapatkan harga terbaik dari rumah mereka, kami merekomendasi 8PROP 360 untuk memberikan calon pembeli (atau penyewa) panorama terbaik dari rumah klien
          Ini juga akan meningkatkan jumlah dari peminat , mengurangi waktu berkunjung ke lokasi, dan memberi anda lebih banyak waktu untuk mengambil keputusan. Visit <a href="https://8prop.com/360" class="text-blue-0689BC">https://8prop.com/360</a></p>
      </div>
      <div class="m-20px md:w-1/2">
        <h1 class="text-blue-191f6C title-1 mb-10px">8PROP Pelayanan Kami</h1>
        <p>Jika anda memerlukan bantuan untuk mencari rumah atau investasi di bidang real estate, biarlah kami membantu anda. Kami memiliki professionals yang mengerti kebutuhan anda dan mencari pilihan pilihan terbaik untuk anda pilih. Dengan informasi yang kami miliki, kami mampu memberikan pilihan terbaik dan nasehat yang tidak bias yang dapat memenuhi keperluan anda. Coba lah layanan kami untuk kenyamanan anda</p>
      </div>
    </div>
    <div class="mx-auto max-w-1300px md:flex">
      <div class="m-20px md:w-1/2">
        <h1 class="text-blue-191f6C title-1 mb-10px">8PROP Valuasi</h1>
         <p>Dengan data kami yang sangat luas, valuasi berijin kami dapat memberikan anda valuasi yang akurat, komprehesive dalam 24 jam. Ini akan membantu anda dalam mempertimbangkan harga property dan investasi anda. Kunjungi <a href="https://8prop.com/xpert" class="text-blue-0689BC">https://8prop.com/xpert</a></p>       
      </div>
      <div class="m-20px md:w-1/2">
        <h1 class="text-blue-191f6C title-1 mb-10px">8PROP Pasaran</h1>
        <p>Dengan menyediakan list yang terkini, baik rumah baru maupun yang di jual kembali di pasaran, list 8PROP akan membantu pembeli rumah untuk menemukan pilihan terbaik secepatnya dan tanpa konflik. Kami selalu siap membantu kapan di butuhkan</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default-light",
};
</script>