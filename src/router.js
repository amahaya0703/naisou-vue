import Vue from "vue";
import router from "vue-router";
import home from "./view/home.vue";
import restaurant from "./view/restaurant.vue";
import apparel from "./view/apparel.vue";
import other from "./view/other.vue";
import contact from "./view/contact.vue";

Vue.use(router);

export default new router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home,
      name: "ama",
      children: [
        {
          path: "contents",
          name: "contents",
        },
        {
          path: "performance",
          name: "performance",
        },
        {
          path: "overview",
          name: "overview",
        },

        {
          path: "access",
          name: "access",
        },
      ],
    },

    {
      path: "/restaurant",
      component: restaurant,
      name: "res",
    },
    {
      path: "/apparel",
      component: apparel,
      name: "apa",
    },
    {
      path: "/other",
      component: other,
      name: "other",
    },
    {
      path: "/contact",
      component: contact,
      name: "contact",
    },
    {
      path: "*",
      redirect: "/",
    },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
