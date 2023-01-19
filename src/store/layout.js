export const state = () => ({
  isLg: null,
});

export const mutations = {
  setIsLg(state, value) {
    state.isLg = value >= 1024;
  },
};
