<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import axios from '@u/axios.js';
const store =  useStore();
onMounted(() => {
  axios.get('/test/getUserInfo').then(res => {
    console.log(res)
  });
  console.log(store)
});
</script>

<template>
  <div class="wrap">
    <h1>Hello World</h1>
    <router-link to="/">Home</router-link>    
  </div>

</template>

<style lang="scss" scoped>
h1 {
  color: $mainColor;
  @include border;
}
.wrap{
  height: 2000px;
}

</style>
