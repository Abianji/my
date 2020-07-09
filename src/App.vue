<template>
  <v-app id="inspire" style="background: #f4f6f9">
    <AppBar></AppBar>

    <v-main>
      <v-sheet dark>
        <v-img
          src="https://cdn.pixabay.com/photo/2020/04/17/14/16/mountains-5055387_1280.jpg"
          height="100vh"
          width="100vw"
        >
          <v-container class="fill-height"></v-container>
        </v-img>
      </v-sheet>

      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import AppBar from "./components/Layout/AppBar";
import Footer from "./components/Layout/Footer";

export default {
  name: "App",

  data: () => ({
    dialog: false
  }),
  components: {
    AppBar,
    Footer
  }
};
</script>

<style>
</style>