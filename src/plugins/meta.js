export default ({ app }, inject) => {
  inject("metadata", {
    head: (options) => {
      /**
       * Generates meta and link tags for the app's head.
       *
       * @returns {object} Meta and link tags for the app's head.
       */

      const { title, description, image } = options || {};

      return {
        title: `${
          title ? `${title} - ` : ""
        }Isaac Wong Personal Training - Fitness Coach | Team Singapore 🇸🇬 Powerlifter & Weightlifter`,
        meta: [
          { charset: "utf-8" },
          {
            hid: "viewport",
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          {
            hid: "description",
            name: "description",
            property: "description",
            content:
              description ||
              "Reach your fitness goals - Since 2017, I've been transforming my clients into fitter, healthier versions of themselves. Let's shape up together.",
          },
          {
            hid: "og:description",
            name: "og:description",
            property: "og:description",
            content:
              description ||
              "Reach your fitness goals - Since 2017, I've been transforming my clients into fitter, healthier versions of themselves. Let's shape up together.",
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            property: "twitter:description",
            content:
              description ||
              "Reach your fitness goals - Since 2017, I've been transforming my clients into fitter, healthier versions of themselves. Let's shape up together.",
          },
          {
            hid: "og:image",
            name: "og:image",
            property: "og:image",
            itemprop: "image",
            content:
              image ||
              "@/assets/isaac-wong-pt/isaac-wong-pt-white-with-wordmark.png",
          },
          {
            hid: "og:image:width",
            name: "og:image:width",
            property: "og:image:width",
            content: 600,
          },
          {
            hid: "og:image:height",
            name: "og:image:height",
            property: "og:image:height",
            content: 600,
          },
          {
            hid: "twitter:image",
            name: "twitter:image",
            property: "twitter:image",
            itemprop: "image",
            content:
              image ||
              "@/assets/isaac-wong-pt/isaac-wong-pt-white-with-wordmark.png",
          },
        ],
        link: [
          {
            rel: "icon",
            type: "image/png",
            href: "https://isaac-wong-pt.netlify.app/isaac-wong-pt/isaac-wong-pt.ico",
            media: "(prefers-color-scheme: dark)",
          },
          {
            rel: "icon",
            type: "image/png",
            href: "https://isaac-wong-pt.netlify.app/isaac-wong-pt/isaac-wong-pt-black.ico",
            media: "(prefers-color-scheme: light)",
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap",
          },
        ],
      };
    },
  });
};
