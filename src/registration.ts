import Vue from "vue";

import VButton from "./components/v-button.vue"; // v-button.vue
Vue.component("v-button", VButton);

import VInputText from "./components/v-input-text.vue"; // v-input-text.vue
Vue.component("v-input-text", VInputText);

import VBlock from "./components/v-block.vue"; // v-input-text.vue
Vue.component("v-block", VBlock);

export default {
  components: {
    VButton,
    VInputText,
    VBlock,
  },
};
