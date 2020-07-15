<template>
  <div>
    <AppBar></AppBar>

    <v-main>
      <v-container>
        <div>
          <v-card>
            <v-img
              src="https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_1280.jpg"
              gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
              :aspect-ratio="16 / 9"
              height="300px"
              dark
            >
              <v-card-text class="fill-height d-flex align-end">
                <v-row class="flex-column">
                  <v-col cols="12" md="10" lg="8" xl="7">
                    <h2
                      class="text-h3 py-3"
                      style="line-height: 1.2"
                    >Great Travel Blogs From Around The World To Inspire You</h2>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-img>
          </v-card>
        </div>

        <div>
          <v-row>
            <v-col cols="12" lg="12" xl="8">
              <div>
                <div class="pt-16">
                  <h2 class="text-h4 font-weight-bold pb-4">Recommended For You</h2>

                  <v-row>
                    <v-col cols="12" md="12" lg="12" v-for="i in 1" :key="i">
                      <div>
                        <v-card flat>
                          <v-img
                            src="https://cdn.pixabay.com/photo/2017/05/19/06/22/desktop-2325627_960_720.jpg"
                            :aspect-ratio="16 / 9"
                            gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                            height="300px"
                            class="elevation-2"
                            style="border-radius: 16px"
                          ></v-img>

                          <v-card-text>
                            <div class="text-h5 font-weight-bold primary--text">
                              How to write an awesome blog
                              post in 5 steps
                            </div>

                            <div class="text-body-1 py-4">
                              Ultrices sagittis orci a scelerisque. Massa
                              placerat duis ultricies lacus sed turpis
                            </div>

                            <div class="d-flex align-center">
                              <v-avatar color="accent" size="36">
                                <v-icon dark>mdi-home-roof</v-icon>
                              </v-avatar>

                              <div class="pl-2">Maple · 15 Jul 2020</div>
                            </div>

                            <div class="text-body-1 py-5">
                              <p>You can help templatemo by telling your friends about our HTML CSS templates. Praesent velit ante, congue ac dignissim in, vehicula sit amet urna. Fusce in dapibus quam, eget finibus velit. Nullam erat odio, vulputate id est ut, consequat rutrum justo. Vivamus vel leo vel nunc tincidunt mattis. Sed neque diam, semper suscipit dictum a, sodales ac metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                              <p>Morbi vel pharetra massa, non iaculis tortor. Nulla porttitor tincidunt felis et feugiat. Vivamus fermentum ligula justo, sit amet blandit nisl volutpat id. Fusce sagittis ultricies felis, non luctus mauris lacinia quis. Ut fringilla lacus ac tempor ullamcorper. Mauris iaculis placerat ex et mattis.</p>
                              <p>Quisque vel sem eu turpis ullamcorper euismod. Praesent quis nisi ac augue luctus viverra. Sed et dui nisi. Fusce vitae dapibus justo. Pellentesque accumsan est ac posuere imperdiet. Curabitur eros mi, lacinia at euismod quis, dapibus vel ligula. Ut sodales erat vitae nunc tempor mollis. Donec tempor lobortis tortor, in feugiat massa facilisis sed. Ut dignissim viverra pretium. In eu justo maximus turpis feugiat finibus scelerisque nec eros. Cras nec lectus tempor nibh vestibulum eleifend et ac elit.</p>
                              <p>Sed vitae luctus libero. Nam sem neque, finibus id sem pharetra, cursus porttitor ligula. Praesent aliquam fermentum dui, vitae venenatis libero vulputate ac. Fusce bibendum scelerisque magna eget iaculis. Phasellus non arcu eu sem convallis semper. Duis vulputate dignissim rhoncus.</p>
                            </div>
                          </v-card-text>
                        </v-card>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>

            <v-col>
              <div class="pt-16">
                <SiderBar></SiderBar>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>

    <Footer></Footer>
  </div>
</template>

<script>
import AppBar from "@/components/Layout/AppBar";
import Footer from "@/components/Layout/Footer";
import SiderBar from "@/components/Layout/Sidebar";

export default {
  components: {
    SiderBar,
    AppBar,
    Footer
  }
};
</script>

<style>
</style>