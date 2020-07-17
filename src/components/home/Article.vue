<template>
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
            to="article/articleContent"
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
              <div class="text-h5 font-weight-bold primary--text">{{ article.title }}</div>

              <div class="text-body-1 py-4">{{ article.abstract }}</div>

              <div class="d-flex align-center">
                <v-avatar color="accent" size="36">
                  <v-icon dark>mdi-home-roof</v-icon>
                </v-avatar>

                <div class="pl-2">{{ article.author }} · 22 July 2019</div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HomeArticle",
  props: ["articles"]
};
</script>

<style>
</style>