<template>
  <div>
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

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-full">
        <div class="flex flex-col items-left">
          <div class="relative z-10 flex text-justify text-black">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.798167640012!2d103.85689231444971!3d1.2956953990549809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c4401f071f%3A0x3ce0fafa822c08f6!2sReal%20Estate%20Analytics!5e0!3m2!1sen!2ssg!4v1635401278030!5m2!1sen!2ssg"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>

           <div class="sm:flex flex-row"><!--start point to appear on the below for small devices -->
            <div class="header-1 text-left pl-8"> 
              <p>Real Estate Analytics<br><br>
                <span class="flex w-full text-gray-666666 header-2">
                  9 Temasek Boulevard,<br>Suntec Tower Two<br>#23-02, Singapore 038989
                </span>
              </p>
              <br>
            
               <!---phone image and number -->
              <div class="flex items-center text-gray-666666">
                <img src="@/assets/call.png" alt="call">
                <div class ="header-3 pl-4"><p>+65 6226-2723</p> 
                </div>
              </div>
                <br>

                <!---inquiries -->
              <div class="flex items-start text-gray-666666">
                <img src="@/assets/inquiries.png" alt="inquiries" />
                <div class ="header-3 pl-4"><br>
                  <p>For inquiries contact us at:</p>
                  <br> 
                  <p class="text-blue-03ABD7">Consumer</p>
                  <a href="mailto:consumer@realestateanalytics.sg">consumer@realestateanalytics.sg</a>
                  <br><br>
                  <p class="text-blue-03ABD7">Concierge</p>
                  <a href="mailto:conceirge@realestateanalytics.sg">conceirge@realestateanalytics.sg</a>
                  <br><br>
                  <p class="text-blue-03ABD7">Institutional and Government</p>
                  <a href="mailto:corporate@realestateanalytics.sg">corporate@realestateanalytics.sg</a>
                  <br><br>
                  <p class="text-blue-03ABD7">Media</p>
                  <a href="mailto:media@realestateanalytics.sg">media@realestateanalytics.sg</a>  
                </div><br>
              </div>

            </div> 
          </div><!--end -->

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