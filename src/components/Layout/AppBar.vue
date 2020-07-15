<template>
  <div>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="#f5f5f5"
    >
      <v-list nav color="#f5f5f5">
        <v-list-item
          v-for="(item, i) in barItems"
          :key="i"
          link
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app elevate-on-scroll :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="!$vuetify.breakpoint.lgAndUp" />
            <v-toolbar-title style="cursor: pointer" class="font-weight-bold headline">
              <v-icon large>mdi-home-roof</v-icon>
              <span>Maple</span>
            </v-toolbar-title>
          </v-col>
          <v-col class="text-right" v-if="$vuetify.breakpoint.lgAndUp">
            <v-btn
              text
              v-for="(item, i) in barItems"
              :key="i"
              link
              :to="item.to"
              :href="item.href"
              :target="item.target"
            >{{ item.title }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    barItems: [
      {
        title: "Home",
        href: "http://localhost:8080",
        target: "_black",
        to: "/"
      },
      {
        title: "Todo",
        href: "http://localhost:8080",
        target: "_black",
        to: "/todo"
      },
      {
        title: "Music",
        href: "http://localhost:8080",
        target: "_black",
        to: "/music"
      },
      {
        title: "Life",
        href: "http://localhost:8080",
        target: "_black",
        to: "/life"
      },
      {
        title: "About",
        href: "http://localhost:8080",
        target: "_black",
        to: "/about"
      }
    ]
  })
};
</script>

<style>
</style>