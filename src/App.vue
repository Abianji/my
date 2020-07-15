<template>
  <v-app id="inspire" style="background: #f4f6f9">
    <!-- <AppBar></AppBar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer></Footer>-->

    <router-view></router-view>
  </v-app>
</template>

<script>
// import AppBar from "./components/Layout/AppBar";
// import Footer from "./components/Layout/Footer";

export default {
  name: "App",

  data: () => ({
    dialog: false
  }),
  components: {
    // AppBar,
    // Footer
  }
};
</script>

<style>
</style>