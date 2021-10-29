<template>
  <div class="mx-auto max-w-1300px">
    <div
      class="relative overflow-hidden p-20px text-white m-20px bg-center bg-no-repeat bg-cover min-h-200px"
      :style="{
        backgroundImage: 'url(\'' + require('@/assets/join-us.png') + '\')',
      }"
    >
      <div
        class="absolute bg-blue-0D86C0 w-full"
        style="transform: rotate(-45deg); left: -500px; height: 1000px; bottom: 0;"
      ></div>

      <h1 class="supheader-1 relative z-10">Contact us</h1>
    </div>

    <div class="md:flex p-20px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.798167640012!2d103.85689231444971!3d1.2956953990549809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c4401f071f%3A0x3ce0fafa822c08f6!2sReal%20Estate%20Analytics!5e0!3m2!1sen!2ssg!4v1635401278030!5m2!1sen!2ssg"
        class="w-full md:w-1/2 min-h-200px"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div class="md:w-1/2 md:ml-20px mt-20px md:mt-0">
        <p class="title-3 mb-20px text-gray-666666">Real Estate Analytics</p>
        <div class="my-20px">
          <p class="body-4 text-gray-666666">9 Temasex Boulevard</p>
          <p class="body-4 text-gray-666666">Suntec Tower Two</p>
          <p class="body-4 text-gray-666666">#23-02, Singapore 038989</p>
        </div>

                        
        <div class="my-20px flex items-center">
          <img src="@/assets/call.png" alt="call" class="h-30px">
          <p class="body-4 text-gray-666666 ml-20px">+65 6226-2723</p>
        </div>

        <div class="my-20px flex items-start">
          <img src="@/assets/inquiries.png" alt="inquiries" class="h-30px">
          <div class="ml-20px">
            <p class="body-4 text-gray-666666">For inquiries contact us at:</p>
            <p class="text-blue-03ABD7 body-4">Consumer</p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:consumer@realestateanalytics.sg"
              >consumer@realestateanalytics.sg</a
            >
            <p class="text-blue-03ABD7 body-4">Concierge</p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:concierge@realestateanalytics.sg"
              >concierge@realestateanalytics.sg</a
            >
            <p class="text-blue-03ABD7 body-4">Institution and Government</p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:corporate@realestateanalytics.sg"
              >corporate@realestateanalytics.sg</a
            >
            <p class="text-blue-03ABD7 body-4">Media</p>
            <a
              class="body-4 text-gray-666666"
              href="mailto:media@realestateanalytics.sg"
              >media@realestateanalytics.sg</a
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