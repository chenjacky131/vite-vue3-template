<script setup>
import { onMounted } from 'vue';
import axios from '@/utils/axios.js';
onMounted(() => {
  axios.get('/test/getUserInfo').then(res => {
    console.log(res)
  })  
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
