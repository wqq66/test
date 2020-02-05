import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
// import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/Register",
      name: "Register",
      component: () => import("../views/Register.vue")
    },
    {
      path: "/carousel",
      name: "carousel",
      //驼峰命名 首字母大写（大驼峰）
      // meta: {
      //   requireAuth: true
      // },
      // beforeEnter: (to, from, next) => {
      //   if (store.getters.getToken) {
      //     next();
      //   } else {
      //     next("/login");
      //   }
      // },
      component: () => import("../views/carousel.vue")
      //懒加载 按需加载  
    }
    // {
    //   path: "/sRegisterSucess",
    //   name: "RegisterSucess",
    //   component: () => import("./views/RegisterSucess.vue")
    // }
  ]
});

export default router;
