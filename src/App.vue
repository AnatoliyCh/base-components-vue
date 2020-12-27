<template>
  <div id="app">
    <!-- color -->
    <div class="wrapper" style="display: block">
      <label>colors: </label>
      <div style="height: 16px; background-color: #ebf8f3"></div>
      <div style="height: 16px; background-color: #e4f5ef"></div>
      <div style="height: 16px; background-color: #c8ebdf"></div>
      <div style="height: 16px; background-color: #70cca2"></div>
      <div style="height: 16px; background-color: #3daa79"></div>
      <div style="height: 16px; background-color: #34495e"></div>
      <div style="height: 16px; background-color: #829ebb"></div>
    </div>
    <!-- button -->
    <div class="wrapper">
      <div>
        <label>button: </label>
        <VButton>Normal</VButton>
        <VButton disabled>Disabled</VButton>
      </div>
      <div>
        <label>button primary: </label>
        <VButton primary>Normal</VButton>
        <VButton primary disabled>Disabled</VButton>
      </div>
      <div>
        <label>button flat: </label>
        <VButton flat>Normal</VButton>
        <VButton flat disabled>Disabled</VButton>
      </div>
      <div>
        <label> [button | primary | flat] round : </label>
        <VButton round>Normal</VButton>
        <VButton round primary>Normal</VButton>
        <VButton round flat>Normal</VButton>
      </div>
      <div>
        <label> [button | primary | flat] circle : </label>
        <VButton circle>+</VButton>
        <VButton circle primary>+</VButton>
        <VButton circle flat>+</VButton>
      </div>
      <div>
        <label> [button | primary | flat | circle] big-button : </label>
        <VButton size="big">Normal</VButton>
        <VButton primary size="big">Normal</VButton>
        <VButton flat size="big">Normal</VButton>
        <VButton size="big" circle>+</VButton>
      </div>
    </div>
    <!-- checkbox -->
    <div class="wrapper">
      <div>
        <label>checkbox: </label>
        <VCheckbox v-model="checkbox" label="123" />
        <VCheckbox v-model="checkbox" size="big" label="456" />
        <label>{{ checkbox }}</label>
      </div>
    </div>
    <label class="label-margin">v-input: </label>
    <VInputText v-model="test1" :maxlength="2" />
    <label class="label-margin">v-input bordered: </label>
    <VInputText v-model="test1" :maxlength="2" bordered />
    <label class="label-margin">v-input placeholder: </label>
    <VInputText :maxlength="2" placeholder="placeholder" />
    <div>{{ test1 }}</div>
    <label class="label-margin">v-input + label: </label>
    <VInputText :value="test2" @change="test2 = $event" label="123" />
    <div>{{ test2 }}</div>
    <label class="label-margin">v-input v-input-big: </label>
    <VInputText size="big" />
    <VInputText size="big" bordered />
    <VInputText size="big" label="123" />
    <label class="label-margin">v-block: </label>
    <div
      style="
        height: 100px;
        width: 500px;
        margin: 15px;
        padding-top: 4px;
        background-color: #c8ebdf;
      "
    >
      <VBlock>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </VBlock>
    </div>
    <VSpiner />
    <icon icon="user-secret" />
    <label class="label-margin">v-input v-input-icon: </label>
    <VInputText v-model="test1" icon="user-secret" />
    <VInputText v-model="test1" bordered icon="user-secret" />
    <label class="label-margin">v-input v-input-icon label: </label>
    <VInputText
      :value="test2"
      icon="user-secret"
      @change="test2 = $event"
      label="123"
    />
    <label class="label-margin">v-input v-input-big v-input-icon: </label>
    <VInputText size="big" icon="user" />
    <VInputText size="big" icon="key" label="123" placeholder="placeholder" />
    <!-- v-input-number -->
    <div class="wrapper">
      <div>
        <label>v-input-number: </label>
        <VInputNumber v-model="testInputNumber" />
      </div>
      <div>
        <label>v-input-number centered: </label>
        <VInputNumber v-model="testInputNumber" centered />
      </div>
      <div>
        <label>v-input-number min-max: </label>
        <VInputNumber v-model="testInputNumber" :min="1" :max="10" />
      </div>
    </div>
    <label class="label-margin">v-input-password: </label>
    <VInputPassword v-model="test1" :maxlength="2" icon="key" />

    <label class="label-margin">v-table: </label>
    <v-table :headers="['1', '2', '3']" :data="testTable">
      <template #default="{ item }">
        <td>{{ item.k1 }}</td>
        <td>{{ item.k2 }}</td>
        <td>{{ item.k3 }}</td>
      </template>
    </v-table>
    <!-- modal -->
    <div class="wrapper">
      <v-button @click="modalShow = true">Модальное окно</v-button>
      <VModal v-model="modalShow"></VModal>
    </div>

    <label class="label-margin">END </label>
    <label class="label-margin">ICONS </label>
    <div class="block-icon">
      <icon icon="user-secret" />
      <icon icon="user" />
      <icon icon="key" />
      <icon icon="home" />
      <icon icon="users" />
      <icon icon="calendar-alt" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VButton from "./base/components/v-button.vue";
import VInputText from "./base/components/v-input-text.vue";
import VInputPassword from "./base/components/v-input-password.vue";
import VInputNumber from "./base/components/v-input-number.vue";
import VCheckbox from "./base/components/v-checkbox.vue";
import VBlock from "./base/components/v-block.vue";
import VSpiner from "./base/components/v-spiner.vue";
import VModal from "./base/components/v-modal.vue";

@Component({
  components: {
    VButton,
    VInputText,
    VInputPassword,
    VInputNumber,
    VCheckbox,
    VBlock,
    VSpiner,
    VModal
  }
})
export default class App extends Vue {
  test1 = "123";
  test2 = "123";

  testInputNumber: number | null = null;

  testTable = [
    { k1: "1", k2: "2", k3: "3" },
    { k1: "1", k2: "2", k3: "3" }
  ];

  modalShow = false;
  checkbox = true;
}
</script>

<style lang="scss">
@import "src/base/scss/__root.scss";
#app {
  margin-left: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  margin-top: 60px;

  .wrapper {
    display: flex;
    margin-bottom: 16px;
    > div {
      margin-right: 40px;
      label:not([class]) {
        display: block;
        color: $color-main-one;
        margin: 16px 0 4px;
      }
    }
  }

  .label-margin {
    display: block;
    color: $color-main-one;
    margin: 16px 0 4px;
  }
  button {
    margin-right: 8px;
  }

  .block-icon {
    svg {
      margin-left: 4px;
    }
  }
}
</style>
