export const state = () => ({
  isLg: null,
  isSm: null,
});

export const mutations = {
  setIsLg(state, value) {
    state.isLg = value >= 1024;
  },
  setIsSm(state, value) {
    state.isSm = value < 768;
  }
};
