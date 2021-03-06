import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueToast from 'vue-toast-notification';
import axios from 'axios'
import base_path from './router/base_path'


Vue.prototype.$axios = axios;
Vue.prototype.$base_path = base_path;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueToast);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
