import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import VueRouter from "vue-router";
// 全局加入vuex
import Vuex from "vuex";
// 引入我们分离出来的vuex文件
import store from "./store";
// Vue.prototype.$api = Api;
// import axios from "axios";
import { loginApi } from "./api/login";
// import { registerApi } from "./api/register";

Vue.use(VueRouter);
Vue.use(ViewUI);
//通过Vue.use()来使用这个Vuex
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.$login = loginApi;
// Vue.prototype.$register = registerApi;
// import Qs from "qs";
//QS是axios库中带的，不需要我们再npm安装一个
// Vue.prototype.$axios = axios;
// Vue.prototype.qs = Qs;

new Vue({
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件;这里可以简写成一个store
  store, //所有的组件对象都多了一个属性：$store
  router,
  render: h => h(App)
}).$mount("#app");
