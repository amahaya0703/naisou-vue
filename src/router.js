import Vue from "vue";
import router from "vue-router";
import home from "./view/home.vue";

Vue.use(router);

export default new router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home,
    },
  ],
});
