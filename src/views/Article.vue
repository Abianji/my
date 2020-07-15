<template>
  <div>
    <AppBar></AppBar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppBar from "@/components/Layout/AppBar";
export default {
  components: {
    AppBar
  }
};
</script>

<style>
</style>