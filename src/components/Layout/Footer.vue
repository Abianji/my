<template>
  <div>
    <v-footer color="primary" dark app absolute>
      <v-container>
        <v-row align="start">
          <v-col cols="12" md="3">
            <h4 class="text-h5 font-weight-bold">Maple</h4>
            <p class="text-body-1">This is Maple's home,that's it.</p>
          </v-col>

          <v-col cols="12" md="3">
            <v-list flat color="transparent">
              <v-subheader class="text-h6">DDXX</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in ddxx"
                  :key="i"
                  :href="item.href"
                  dense
                  target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-body-1" v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="3">
            <v-list flat color="transparent">
              <v-subheader class="text-h6">Links</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in links"
                  :key="i"
                  :href="item.href"
                  dense
                  target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-body-1" v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="3">
            <div>
              <h5 class="text-h6 font-weight-bold">Nothing</h5>
              <p
                class="text-body-1"
              >A child is a book,want to understand him,will have to walk into their souls.</p>
            </div>

            <v-row>
              <v-col cols="12">
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                  <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <div class="text-center mt-6">
          Copyright &copy;
          <a
            class="white--text"
            href="https://github.com/Abianji/my"
            target="_blank"
            rel="noopener noreferrer"
          >DDXX</a>
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    ddxx: [
      {
        text: "Github",
        href: "https://github.com/Abianji/my"
      },
      {
        text: "Phphub",
        href: "https://laravel-china.org/"
      },
      {
        text: "Vuetify",
        href: "https://vuetifyjs.com/zh-Hans/"
      }
    ],
    links: [
      {
        text: "Reserve",
        href: "#"
      },
      {
        text: "Reserve",
        href: "#"
      },
      {
        text: "Reserve",
        href: "#"
      }
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>