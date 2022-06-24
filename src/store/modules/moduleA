const moduleA = {
  state: () => ({
    sex: 'man'
  }),
  mutations: {
    SET_SEX: (state, sex) => {
      state.sex = sex
    }
  },
  getters: {
    hello: state => `Hello ${state.sex}`
  },
  actions: {
    async GET_SEX({commit}, payload) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('SET_SEX', payload.sex);
        }, 3000);
      });
    }
  }
}
export default moduleA;