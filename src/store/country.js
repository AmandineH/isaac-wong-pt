export const state = () => ({
  countryCode: null,
});

export const mutations = {
  setCountryCode(state, value) {
    state.countryCode = value;
  },
};
