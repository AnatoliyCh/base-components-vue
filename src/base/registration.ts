import Vue from "vue";

import VButton from "./components/v-button.vue"; // v-button.vue
Vue.component("v-button", VButton);

import VInputText from "./components/v-input-text.vue"; // v-input-text.vue
Vue.component("v-input-text", VInputText);

import VInputPassword from "./components/v-input-password.vue"; // v-input-password.vue
Vue.component("v-input-password", VInputPassword);

import VBlock from "./components/v-block.vue"; // v-input-text.vue
Vue.component("v-block", VBlock);

import VSpiner from "./components/v-spiner.vue"; // v-spiner.vue
Vue.component("v-spiner", VSpiner);

export default {
  components: {
    VButton,
    VInputText,
    VInputPassword,
    VBlock,
    VSpiner,
  },
};

// импорт fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faUser,
  faKey,
  faHome,
  faUsers,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faUser, faKey, faHome, faUsers, faCalendarAlt);
Vue.component("icon", FontAwesomeIcon);
