const state = {
  num: "123"
};
const mutations = {
  SET_NUM: (state, num) => {
    state.num = num;
  }
};
const actions = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
