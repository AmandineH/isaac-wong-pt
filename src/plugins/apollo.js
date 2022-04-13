// store
import { defaultCountryCode } from "@/plugins/countries.js";

export const setHeaderParams = (countryCode) => {
  const cc =
    (typeof countryCode === "string" ? countryCode : defaultCountryCode).toUpperCase();

  return {
    context: {
      headers: {
        "Country-Code": cc,
      },
    },
  };
};
