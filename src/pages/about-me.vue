<template>
  <div>
    <About />

    <div
      class="mx-auto max-w-1300px"
      :class="isLg ? 'px-32px pb-52px pt-32px' : 'px-24px pb-32px pt-24px'"
    >
      <div :class="isLg ? 'mb-32px' : 'mb-24px'">
        <p class="text-center text-black display-md-bold">
          Join Me on Instagram
        </p>
        <p
          class="mx-auto text-center text-gray-500 text-md-regular max-w-800px"
        >
          For a daily dose of motivation, killer workouts, and a peek into my
          fitness journey right! 🏋️‍♀️💙
        </p>
      </div>

      <!-- Place <div> tag where you want the feed to appear -->
      <div id="curator-feed-default-feed-layout">
        <a href="https://curator.io" target="_blank" class="crt-logo crt-tag"
          >Powered by Curator.io</a
        >
      </div>

      <!-- The Javascript can be moved to the end of the html page before the </body> tag -->
      <script type="text/javascript">
        /* curator-feed-default-feed-layout */
        (function () {
          var i,
            e,
            d = document,
            s = "script";
          i = d.createElement("script");
          i.async = 1;
          i.charset = "UTF-8";
          i.src =
            "https://cdn.curator.io/published/4847c0f6-2e5d-4366-aa8b-e282fad0437c.js";
          e = d.getElementsByTagName(s)[0];
          e.parentNode.insertBefore(i, e);
        })();
      </script>
    </div>
  </div>
</template>

<script>
// components
import About from "@/components/About.vue";

export default {
  head() {
    return this.$metadata.head({
      title: "About Me",
    });
  },
  components: {
    About,
  },
  computed: {
    isLg() {
      return this.$store.state.layout.isLg;
    },
  },
};
</script>
