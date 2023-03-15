<script setup>
import Logo from '@/assets/logo.png'
</script>

<template>
  <h1>jacky131-cli</h1>
  <img :src="Logo"/>
  <router-link to="/hello-world">Hello World</router-link>
</template>

<style lang="scss" scoped>
h1 {
  color: $mainColor;
}
</style>
