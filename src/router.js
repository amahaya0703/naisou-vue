import Vue from "vue";
import router from "vue-router";
import home from "./view/home.vue";
import login from "./view/login.vue";
import regi from "./view/regi.vue";

Vue.use(router);

export default new router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home,
    },
    {
      path: "login",
      component: login,
    },
    {
      path: "regi",
      component: regi,
    },
  ],
});
