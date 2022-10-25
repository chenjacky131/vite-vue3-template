import { createStore } from "vuex";
const lodeModules = () => { //  批量加载modules里面的模块
  const files = import.meta.globEager('./modules/**/*.js')
  const modules = {}
  for(const key in files){
    modules[key.replace(/(\.\/modules\/|\.js)/g,'')] = files[key].default;
  }
  Object.keys(modules).forEach(item => {
    modules[item]['namespaced'] = true
  });
  return modules;
}
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
  modules: lodeModules(),
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
