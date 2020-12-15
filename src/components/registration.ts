import Vue from "vue";

import VButton from "./v-button.vue"; // v-button.vue
Vue.component("v-button", VButton);

import VInputText from "./v-input-text.vue"; // v-input-text.vue
Vue.component("v-input-text", VInputText);

export default {
  components: {
    VButton,
    VInputText,
  },
};
