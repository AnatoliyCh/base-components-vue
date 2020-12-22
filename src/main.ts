import Vue from "vue";
import App from "./App.vue";

import "@/base/registration"; // базовые компоненты и иконки

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
