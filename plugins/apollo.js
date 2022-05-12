// store
import { defaultCountryCode } from "@/plugins/countries.js";
import { getStorage } from "@/plugins/storage.js";

export const setHeaderParams = (countryCode, options) => {
  const { tenant, origin, token, language } = options || {};
  const cc = (
    typeof countryCode === "string" ? countryCode : defaultCountryCode
  ).toLowerCase();
  const tt = (typeof tenant === "string" ? tenant : "8prop").toLowerCase();

  return {
    context: {
      headers: {
        Language: (process.client ? getStorage("locale") : language) || "en-US",
        "Country-Code": cc,
        Tenant: tt,
        ...(origin ? { Origin: origin } : null),
        ...(token ? { Authorization: `Bearer ${token}` } : null),
      },
    },
  };
};
