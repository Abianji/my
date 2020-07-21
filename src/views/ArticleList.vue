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
                    <h2 class="text-h3 py-3" style="line-height: 1.2">Write casually</h2>
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
                  <h2 class="text-h4 font-weight-bold pb-4">Article</h2>

                  <v-row>
                    <v-col cols="12" md="12" lg="12" v-for="i in 1" :key="i">
                      <div>
                        <v-card flat>
                          <v-img
                            :src="src"
                            :aspect-ratio="16 / 9"
                            gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                            height="300px"
                            class="elevation-2"
                            style="border-radius: 16px"
                          ></v-img>

                          <v-card-text>
                            <div class="text-h5 font-weight-bold primary--text">Title</div>

                            <div class="text-body-1 py-4">Abstract</div>

                            <div class="d-flex align-center">
                              <v-avatar color="accent" size="36">
                                <v-icon dark>mdi-home-roof</v-icon>
                              </v-avatar>

                              <div class="pl-2">DDXX · 2020</div>
                            </div>

                            <div v-html="content" class="text-body-1 py-5"></div>
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
export default {};
</script>

<style>
</style>