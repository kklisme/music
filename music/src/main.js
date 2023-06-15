import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
	loading: require("./assets/imgs/loadImg.gif"),
	error: require("./assets/imgs/error.png"),
	attempt: 6,
	observer: true,
});

import formatNum from "./common/formatNum";
Vue.use(formatNum);
import formatDuration from "./common/formatDuration";
Vue.use(formatDuration);

import Pagination from "./components/common/Pagination";
Vue.component("app_Pagination", Pagination);

//全局读取loacaStorage
import { setItem, getItem, removeItem } from "./common/utils.js";
Vue.prototype.setItem = setItem;
Vue.prototype.getItem = getItem;
Vue.prototype.removeItem = removeItem;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
