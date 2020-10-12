import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/sass/style.scss";
import * as VueGoogleMaps from "vue2-google-maps";

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
  render: (h) => h(App),
}).$mount("#app");
