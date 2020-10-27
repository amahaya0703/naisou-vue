import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/sass/style.scss";
import * as VueGoogleMaps from "vue2-google-maps";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBvEnzm962T1mSKtXqkRSU3yGZt5h-aMs4",
    libraries: "places",
    region: "JP",
    language: "ja",
  },
});
Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    AOS.init({
      offset: 300,
      delay: 100,
      duration: 500,
      easing: "ease-in",
    });
  },
  render: (h) => h(App),
}).$mount("#app");
