import { createStore } from "vuex";
import moduleA from "./modules/moduleA";
export default createStore({
  state: {
    name: 'tom'
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  getters: {
    hi: state => `Hello ${state.name}`
  },
  modules: {
    a: moduleA
  },
  actions: {
    async GET_NAME({commit}, payload) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('SET_NAME', payload.name);
        }, 3000);
      });
    }
  }
})
