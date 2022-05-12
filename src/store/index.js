import { getCountryVariables } from "@/plugins/countries.js";

export default {
  actions: {
    // Initialize stores on server
    async nuxtServerInit(storeParams, context) {
      const { commit, dispatch } = storeParams;
      const { req, app } = context;

      const countryCode = app.$identifyLoc(req.headers.host);

      // Get user country code
      app.store.commit("country/setCountryCode", countryCode);
      context.i18n.setLocale(getCountryVariables(countryCode, "locale"));
    },
  },
};
