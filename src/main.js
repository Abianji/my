import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from "axios";
import dayjs from 'dayjs';

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  vuetify,
  dayjs,
  render: h => h(App)
}).$mount('#app')
