<template>
  <div>
    <img src="@/assets/images/about.jpg" alt="about" class="w-full min-h-600px" />

    <div class="relative">
      <div class="absolute w-full top-100px h-10px bg-blue-00ACD7"/>
      <div class="relative z-10 mx-auto max-w-1300px md:-mt-100px">
        <Carousel class="md:mx-20px" :slides="[1, 2]" :controls="true">

          <template v-for="(slide, index) in [1, 2]" v-slot:[slide]>
            <div :key="index" v-if="slide === 1" class="text-white p-20px px-60px bg-blue-00ACD7">
              <h1 class="text-center uppercase title-1 text-blue-191f6C mb-10px">
                ABOUT <span class="text-white">MISSION</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
                tellus id dui semper aliquam. Maecenas vitae felis et orci
                molestie sagittis. Mauris at ligula eu est porta porta at eu est.
                Vestibulum tincidunt nunc metus, nec scelerisque ligula vestibulum
                a. Curabitur facilisis vehicula nibh sit amet aliquet. Donec
                laoreet congue tellus, vel facilisis erat pretium vel. Etiam
                interdum odio nisi, a semper eros interdum non. Fusce in faucibus
                quam.
              </p>
            </div>

            <div :key="index" v-if="slide === 2" class="text-white p-20px px-60px bg-blue-00ACD7">
              <h1 class="text-center uppercase title-1 text-blue-191f6C mb-10px">
                ABOUT <span class="text-white">VISION</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
                tellus id dui semper aliquam. Maecenas vitae felis et orci
                molestie sagittis. Mauris at ligula eu est porta porta at eu est.
                Vestibulum tincidunt nunc metus, nec scelerisque ligula vestibulum
                a. Curabitur facilisis vehicula nibh sit amet aliquet. Donec
                laoreet congue tellus, vel facilisis erat pretium vel. Etiam
                interdum odio nisi, a semper eros interdum non. Fusce in faucibus
                quam.
              </p>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="flex flex-col items-center">
          <h1 class="text-center title-1 text-blue-191f6C">
            About Us
            <div class="flex mx-auto w-300px mt-10px">
              <span class="w-1/3 h-2px bg-blue-191f6C"></span>
              <span class="flex-grow h-2px bg-blue-00ACD7"></span>
            </div>
          </h1>
          <div>
            <div class="my-20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              tellus id dui semper aliquam. Maecenas vitae felis et orci
              molestie sagittis. Mauris at ligula eu est porta porta at eu est.
              Vestibulum tincidunt nunc metus, nec scelerisque ligula vestibulum
              a. Curabitur facilisis vehicula nibh sit amet aliquet. Donec
              laoreet congue tellus, vel facilisis erat pretium vel. Etiam
              interdum odio nisi, a semper eros interdum non. Fusce in faucibus
              quam. Curabitur bibendum neque ipsum, non auctor orci scelerisque
              at. Donec convallis ac massa sit amet pulvinar. Vivamus sit amet
              diam est.
            </div>

            <div class="mx-auto md:w-2/3">
              <div class="flex items-center my-20px">
                <img src="@/assets/utility/mail-lock.svg" alt="mail-lock" class="h-100px" />
                <p class="ml-20px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean ac tellus id dui semper aliquam. Maecenas vitae felis
                  et orci molestie sagittis. Mauris at ligula eu est porta porta
                  at eu est. Vestibulum tincidunt nunc metus, nec scelerisque
                  ligula vestibulum a. Curabitur facilisis vehicula nibh sit
                  amet aliquet
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
            </div>

            <div class="my-20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              tellus id dui semper aliquam. Maecenas vitae felis et orci
              molestie sagittis. Mauris at ligula eu est porta porta at eu est.
              Vestibulum tincidunt nunc metus, nec scelerisque ligula vestibulum
              a. Curabitur facilisis vehicula nibh sit amet aliquet
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  layout: "default",
  components: {
    Carousel,
  },
};
</script>