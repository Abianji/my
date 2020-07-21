import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from "axios";
import dayjs from 'dayjs';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$dayjs = dayjs

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
