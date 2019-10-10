/**
 * Vue
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/**
 * Vendor
 */
import lazySizes from "lazysizes";
import TweenMax from "gsap/TweenMax";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Swiper from "swiper";

/**
 * CSS
 */
import "@/assets/css/style.scss";
