/**
 * CSS
 */
import "@/assets/css/style.scss";

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
 * Script
 */
import Accordion from "@/assets/script/Accordion";
import EventSwiper from "@/assets/script/EventSwiper";
import PickupSwiper from "@/assets/script/PickupSwiper";

window.addEventListener("load", () => {
  new Accordion();
  new EventSwiper();
  new PickupSwiper();
});
