<template>
  <div class="home">
    <AppBar></AppBar>

    <v-main>
      <v-container>
        <div>
          <v-card>
            <v-img
              src="https://cdn.pixabay.com/photo/2019/10/29/14/46/landscape-4587079_1280.jpg"
              gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
              :aspect-ratio="16 / 9"
              height="500px"
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
                  <v-col class="d-flex align-center">
                    <!-- <v-avatar class="elevation-4" color="accent">
                  <v-icon large color>mdi-home-roof</v-icon>
                    </v-avatar>-->

                    <div class="text-h6 pl-2">Maple · 10 Jul 2020</div>
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
                    <v-col cols="12" md="6" lg="4" v-for="article in articles" :key="article.id">
                      <v-hover v-slot:default="{ hover }" open-delay="50" close-delay="50">
                        <div>
                          <v-card
                            flat
                            :color="hover ? 'white' : 'transparent'"
                            :elevation="hover ? 12 : 0"
                            hover
                            link
                            :to="{name:'Content',params:{id:article.id}}"
                            href="http://localhost:8080/"
                            target="_blank"
                          >
                            <v-img
                              src="https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_1280.jpg"
                              :aspect-ratio="16 / 9"
                              gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                              height="200px"
                              class="elevation-2"
                              style="border-radius: 16px"
                            ></v-img>

                            <v-card-text>
                              <div
                                class="text-h5 font-weight-bold primary--text"
                              >{{ article.title }}</div>

                              <div class="text-body-1 py-4">{{ article.abstract }}</div>

                              <div class="d-flex align-center">
                                <v-avatar color="accent" size="36">
                                  <v-icon dark>mdi-home-roof</v-icon>
                                </v-avatar>

                                <div class="pl-2">{{ article.author }} · {{ article.publish_at }}</div>
                              </div>
                            </v-card-text>
                          </v-card>
                        </div>
                      </v-hover>
                    </v-col>
                  </v-row>
                </div>

                <div class="pt-16">
                  <h2 class="text-h4 font-weight-bold pb-4">Featured</h2>

                  <v-row>
                    <v-col cols="6" lg="4" v-for="i in 3" :key="i">
                      <v-card flat dark>
                        <v-img
                          src="https://cdn.pixabay.com/photo/2019/10/29/14/46/landscape-4587079_1280.jpg"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="600px"
                          class="elevation-2 fill-height"
                        >
                          <div class="d-flex flex-column justify-space-between fill-height">
                            <v-card-text></v-card-text>

                            <v-card-text>
                              <div class="text-h5 py-3 font-weight-bold" style="line-height: 1.2">
                                15 things I have always
                                wondered about birds
                              </div>

                              <div class="d-flex align-center">
                                <v-avatar color="accent" size="36">
                                  <v-icon dark>mdi-feather</v-icon>
                                </v-avatar>

                                <div class="pl-2">Yan Lee · 03 Jan 2019</div>
                              </div>
                            </v-card-text>
                          </div>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>

                <div class="pt-16">
                  <h2 class="text-h4 font-weight-bold">Our Life</h2>

                  <div>
                    <v-row v-for="i in 2" :key="i" class="py-4">
                      <v-col cols="12" md="4">
                        <v-card flat height="100%">
                          <v-img
                            src="https://cdn.pixabay.com/photo/2020/07/04/06/34/mother-and-child-5368416_1280.jpg"
                            :aspect-ratio="16 / 9"
                            height="100%"
                          ></v-img>
                        </v-card>
                      </v-col>

                      <v-col>
                        <div>
                          <v-btn depressed color="accent">TRAVEL</v-btn>

                          <h3 class="text-h4 font-weight-bold pt-3">
                            Ut enim blandit volutpat maecenas volutpat
                            blandit
                          </h3>

                          <p class="text-h6 font-weight-regular pt-3 text--secondary">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>

                          <div class="d-flex align-center">
                            <v-avatar color="accent" size="36">
                              <v-icon dark>mdi-feather</v-icon>
                            </v-avatar>

                            <div class="pl-2">Yan Lee · 03 Jan 2019</div>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
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
  name: "Home",
  components: {
    SiderBar,
    AppBar,
    Footer
  },
  data: () => ({
    articles: Array
  }),
  created: function() {
    this.$axios
      .get("http://111.229.157.160/api/article")
      .then(response => {
        this.articles = response.data.data;
        console.log(this.articles);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
