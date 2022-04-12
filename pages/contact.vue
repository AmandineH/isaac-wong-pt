<template>
  <div>
    <div class="mx-auto max-w-1300px">
      <div
        class="relative overflow-hidden text-white bg-center bg-no-repeat bg-cover p-20px md:m-20px h-200px md:h-400px"
        :style="{
          backgroundImage:
            'url(\'' + require('@/assets/images/contact.jpg') + '\')',
        }"
      >
        <div
          class="absolute transform rotate-45 -left-1000px md:-left-750px -top-500px w-1000px bg-blue-0689BC h-1000px"
        ></div>

        <h1 class="relative z-10 supheader-1">Contact Us</h1>
      </div>
    </div>

    <div class="bg-gray-E8E8F0 -mt-100px pt-100px mb-20px">
      <div class="relative justify-end mx-auto max-w-1300px md:flex p-20px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.798167640012!2d103.85689231444971!3d1.2956953990549809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c4401f071f%3A0x3ce0fafa822c08f6!2sReal%20Estate%20Analytics!5e0!3m2!1sen!2ssg!4v1635401278030!5m2!1sen!2ssg"
          class="top-0 left-0 w-full md:w-1/2 min-h-300px md:absolute md:pl-20px"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <div class="md:w-1/2 md:px-20px mt-20px md:mt-0">
          <div class="mb-20px">
            <p class="title-3 mb-20px text-gray-666666">
              Real Estate Analytics Singapore
            </p>
            <div>
              <p class="body-4 text-gray-666666">9 Temasek Boulevard</p>
              <p class="body-4 text-gray-666666">Suntec Tower Two</p>
              <p class="body-4 text-gray-666666">#23-02, Singapore 038989</p>
            </div>
          </div>
          <div>
            <p class="title-3 mb-20px text-gray-666666">
              Real Estate Analytics HK Limited
            </p>
            <div>
              <p class="body-4 text-gray-666666">
                904-907 Dah Sing Financial Centre
              </p>
              <p class="body-4 text-gray-666666">
                248 Queen's Road East, Wanchai, HK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="justify-end mx-auto max-w-1300px md:flex px-20px">
      <div class="md:w-1/2 md:px-20px">
        <div class="flex items-center mb-20px">
          <img src="@/assets/utility/phone.svg" alt="phone" class="h-30px" />
          <div class="ml-20px">
            <p class="body-4 text-gray-666666">SG Office: +65 6226-2723</p>
            <p class="body-4 text-gray-666666">HK Office :+852 2639 3698</p>
          </div>
        </div>

        <div class="flex items-start mb-20px">
          <img src="@/assets/utility/email.svg" alt="email" class="h-30px" />
          <div class="ml-20px">
            <p class="body-4 text-gray-666666">For inquiries contact us at:</p>
            <p class="text-blue-00ACD7 body-4 mt-10px">Consumer</p>
            <a class="body-4 text-gray-666666" href="mailto:consumer@rea-sg.com"
              >consumer@rea-sg.com</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">Concierge</p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:concierge@rea-sg.com"
              >concierge@rea-sg.com</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">
              Institution and Government
            </p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:corporate@rea-sg.com"
              >corporate@rea-sg.com</a
            >
            <p class="text-blue-00ACD7 body-4 mt-10px">Media</p>
            <a class="body-4 text-gray-666666" href="mailto:media@rea-sg.com"
              >media@rea-sg.com</a
            >
          </div>
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