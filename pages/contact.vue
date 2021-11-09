<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage: 'url(\'' + require('@/assets/images/contact.jpg') + '\')',
        }"
      >
        <div
        class="absolute transform rotate-45 -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
        ></div>

        <h1 class="relative z-10 supheader-1">Hubungi Kami</h1>
      </div>
    </div>


    <div class="bg-gray-E8E8F0 -mt-100px pt-100px mb-20px">
      <div class="relative justify-end mx-auto max-w-1300px md:flex p-20px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.282841808727!2d106.80657751476916!3d-6.226389795492856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1505affffff%3A0x301b8a0f5d2c33ed!2sEquity%20Tower!5e0!3m2!1sen!2ssg!4v1636442773957!5m2!1sen!2ssg"
          class="top-0 left-0 w-full md:w-1/2 min-h-300px md:absolute md:pl-20px"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <div class="md:w-1/2 md:px-20px mt-20px md:mt-0">
          <p class="title-3 mb-20px text-gray-666666">PT Real Estate Analytics Indonesia</p>
          <div>
            <p class="body-4 text-gray-666666">Equity Tower Lt 49</p>
            <p class="body-4 text-gray-666666">Jl Jenderal Sudirman Kav 52-53</p>
            <p class="body-4 text-gray-666666">Senayan, Kebayoran Baro</p>
            <p class="body-4 text-gray-666666">Jakarta Selatan</p>
          </div>
        </div>
      </div>
    </div>

    <div class="justify-end mx-auto max-w-1300px md:flex px-20px">
      <div class="md:w-1/2 md:px-20px">
        <div class="flex items-center mb-20px">
          <img src="@/assets/utility/phone.svg" alt="phone" class="h-30px">
          <p class="body-4 text-gray-666666 ml-20px">+62857 950 111 98</p>
        </div>

        <div class="flex items-start mb-20px">
          <img src="@/assets/utility/email.svg" alt="email" class="h-30px">
          <div class="ml-20px">
            <p class="body-4 text-gray-666666">Untuk pertanyaan dapat menghubungi kami:</p>
            <p class="text-blue-00ACD7 body-4 mt-10px">Konsumer</p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:consumer@rea-id.com"
              >consumer@rea-id.com</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">Pelayanan</p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:concierge@rea-id.com"
              >concierge@rea-id.com</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">Instituti dan Pemerintah</p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:corporate@rea-id.com"
              >corporate@rea-id.com</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">Media</p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:media@rea-id.com"
              >media@rea-id.com</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default-light",
};
</script>