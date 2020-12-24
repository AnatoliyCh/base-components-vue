<template>
  <div id="app">
    <label class="label-margin">colors: </label>
    <div style="height: 16px; background-color: #ebf8f3"></div>
    <div style="height: 16px; background-color: #e4f5ef"></div>
    <div style="height: 16px; background-color: #c8ebdf"></div>
    <div style="height: 16px; background-color: #70cca2"></div>
    <div style="height: 16px; background-color: #3daa79"></div>
    <div style="height: 16px; background-color: #34495e"></div>
    <label class="label-margin">v-button: </label>
    <VButton label="Normal" />
    <VButton label="Disabled" disabled />
    <label class="label-margin">v-button primary: </label>
    <VButton class="primary" label="Normal" />
    <VButton class="primary" label="Disabled" disabled />
    <label class="label-margin">v-button flat: </label>
    <VButton class="flat" label="Normal" />
    <VButton class="flat" label="Disabled" disabled />
    <label class="label-margin"
      >[v-button | primary | flat] round-button :
    </label>
    <VButton class="round-button" label="Normal " />
    <VButton class="primary round-button" label="Normal" />
    <VButton class="flat round-button" label="Normal" />
    <label class="label-margin"
      >[v-button | primary | flat] big-button :
    </label>
    <VButton class="big-button" label="Normal " />
    <VButton class="primary big-button" label="Normal" />
    <VButton class="flat big-button" label="Normal" />
    <div style="height: 16px"></div>
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
    <label class="label-margin">v-input-password: </label>
    <VInputPassword v-model="test1" :maxlength="2" icon="key" />
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
import VBlock from "./base/components/v-block.vue";
import VSpiner from "./base/components/v-spiner.vue";

@Component({
  components: {
    VButton,
    VInputText,
    VInputPassword,
    VBlock,
    VSpiner
  }
})
export default class App extends Vue {
  test1 = "123";
  test2 = "123";
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
