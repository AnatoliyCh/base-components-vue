import Vue from "vue";

import VButton from "./components/v-button.vue"; // v-button.vue
Vue.component("v-button", VButton);

import VInputText from "./components/v-input-text.vue"; // v-input-text.vue
Vue.component("v-input-text", VInputText);

import VInputPassword from "./components/v-input-password.vue"; // v-input-password.vue
Vue.component("v-input-password", VInputPassword);

import VCheckbox from "./components/v-checkbox.vue"; // v-checkbox.vue
Vue.component("v-checkbox", VCheckbox);

import VBlock from "./components/v-block.vue"; // v-block.vue
Vue.component("v-block", VBlock);

import VSpiner from "./components/v-spiner.vue"; // v-spiner.vue
Vue.component("v-spiner", VSpiner);

import VTable from "./components/v-table.vue"; // v-table.vue
Vue.component("v-table", VTable);

import VModal from "./components/v-modal.vue"; // v-modal.vue
Vue.component("v-modal", VModal);

export default {
  components: {
    VButton,
    VInputText,
    VInputPassword,
    VCheckbox,
    VBlock,
    VSpiner,
    VTable,
    VModal,
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
