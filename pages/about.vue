<template>
  <div>
    <img
      src="@/assets/images/about.jpg"
      alt="about"
      class="w-full min-h-600px"
    />

    <div class="relative">
      <div class="absolute w-full top-50px h-10px bg-blue-00ACD7" />
      <div class="relative z-10 mx-auto max-w-1300px md:-mt-50px">
        <div
          class="text-white p-20px px-60px bg-blue-00ACD7 md:min-h-100px md:mx-20px"
        >
          <h1 class="text-center uppercase title-1 text-blue-191f6C mb-10px">
            OUR <span class="text-white">MISSION</span>
          </h1>
          <p>
            8PROP is dedicated to empowering everyone with the best-in-class
            property analytics to succeed in life. With a transparent
            data-driven approach, 8PROP creates ease of access to properties in
            the global markets – anywhere, any time.
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
            Our Connected Journey
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/3 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <div class="w-full my-20px">
            <p>
              Everyone needs a place to live, play and work. In fact, it is
              essential and our right to life. We need a place to flourish -
              emotionally, mentally and physically. No matter who we are or
              where we come from, every one of us deserves the opportunity for a
              better future.
            </p>

            <p>
              As such, we should be empowered to make the best with what we have
              in our life's journey - locally and globally. Whether you are
              buying, selling, renting or investing properties (residential,
              office, commercial, shared places) - they are roofs over our
              heads, a safe place for us to thrive in.
            </p>
          </div>

          <h1 class="text-center title-1 text-blue-191f6C">
            Our Technology and Data Research Principles
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/3 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <div class="w-full my-20px">
            <p>
              Equipped with cutting-edge technology and a data-driven
              statistical approach, we believe that everyone can be empowered to
              make smart, holistic property decisions in their life. Harness the
              power of proptech at your fingertips without the constraint of
              physical boundaries.
            </p>
            <p>
              We provide unbiased data and research analysis about the real
              estate market in a transparent way.
            </p>

            <p>
              We benchmarks findings against various datasets whenever possible
              to ensure accuracy and context relevancy.
            </p>

            <p>
              We respect the integrity of data and use it honestly. We do not
              manipulate data to create a desired result.
            </p>
          </div>

          <h1 class="text-center title-1 text-blue-191f6C">
            Why 8PROP?
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/3 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <div class="w-full my-20px">
            <p>
              Objective and Unbiased Approach: We are objective and unbiased.
              Our analysis and research methods are audited regularly, and we
              are independent of any real estate, media or banking interests.
            </p>
            <p>
              Timely Insights: We transform mountains of data into valuable
              insights and regularly update our database to ensure that they are
              relevant, subject to market We implement processes to uphold the
              highest standards of data quality, deployed on platforms that
              enable us to store, sort and analyse data quickly and deliver it
              in simple and easy to use formats.
            </p>
            <p>
              Globally Local We understand global trends and local insights so
              that you can make smart, holistic choices. Whichever part of Asia
              you are in, we can help minimise the guesswork and reduce
              ambiguity in your property decisions.
            </p>
            <p>
              Bold and Creative: We take courage in exploring new opportunities,
              go over and beyond our comfort zone to creatively pioneer new
              territories so that we can continuously build a transparent and
              seamless real estate ecosystem.
            </p>
            <p>
              Continuous Improvement: We are building a culture of continuous
              improvement - processes, tools, products, services, etc to ensure
              that we deliver transformational results.
            </p>
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