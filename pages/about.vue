<template>
  <div>
    <img src="@/assets/about.png" alt="about" class="w-full min-h-80vh" />

    <div class="relative">
      <div class="absolute top-50px h-30px bg-blue-03ABD7 w-full"/>
      <div class="relative z-10 mx-auto max-w-1300px -mt-50px">
        <div class="mx-20px">
          <!-- TODO: CARROUSEL (AMANDINE) -->
          <div class="p-20px bg-blue-03ABD7 text-white">
            <h1 class="header-1 uppercase text-blue-191F6B text-center mb-10px">
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
        </div>
      </div>
    </div>

    <div class="p-20px pt-40px">
      <div class="mx-auto max-w-1300px">
        <div class="flex flex-col items-center">
          <h1 class="title-1 text-blue-191F6B text-center">
            About Us
            <div class="flex w-300px">
              <span class="w-1/3 h-2px bg-blue-191F6B"></span>
              <span class="flex-grow h-2px bg-blue-03ABD7"></span>
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

            <div class="w-2/3 mx-auto">
              <div class="my-20px flex items-center">
                <img src="@/assets/mail-in.png" alt="mail-in" />
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
                <img src="@/assets/mail-plus.png" alt="mail-plus" />
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
export default {
  layout: "default",
};
</script>