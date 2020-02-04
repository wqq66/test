export default {
  state: {
    token: null
  },

  getters: {
    getToken(state) {
      if (!state.token) {
        state.token = localStorage.getItem("token");
      }
      return state.token;
    }
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  }
};
