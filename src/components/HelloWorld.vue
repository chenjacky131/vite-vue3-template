<script setup>
import {useStore} from 'vuex';
const store = useStore();
console.log(store.state.name) //  get state
store.commit('SET_NAME', 'jack')  //  set state
console.log(store.getters.hi) //  get getters
store.dispatch('GET_NAME', {
  name: 'jack2'
})
defineProps({
  msg: String,
});

</script>

<template>
  <h1>jacky131-cli</h1>
</template>

<style lang="scss" scoped>
h1 {
  color: $mainColor;
}
</style>
