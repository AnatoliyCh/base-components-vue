<template>
  <transition v-if="value" name="v-modal">
    <div class="v-modal-background">
      <v-block class="v-modal-form">
        <div class="v-modal-header">
          <slot name="header">
            <h2>Header</h2>
            <v-button flat @click="$emit('change', false)">X</v-button>
          </slot>
        </div>
        <div class="v-modal-body">
          <slot> <h3>Body</h3> </slot>
        </div>
        <div class="v-modal-footer">
          <slot name="footer">
            <h3>Footer</h3>
            <v-button primary @click="$emit('change', false)">Закрыть</v-button>
          </slot>
        </div>
      </v-block>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Model, Vue } from "vue-property-decorator";

@Component({ inheritAttrs: true })
export default class VModal extends Vue {
  // видимость v-modal
  @Model("change", {
    type: Boolean,
    default: false,
    validator: x => typeof x === "boolean"
  })
  readonly value!: boolean;
}
</script>

<style lang="scss" scoped>
@import "../scss/__root";
.v-modal-background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.2s ease;
  .v-modal-form {
    height: min-content;
    margin: 0px;
    .v-modal-header {
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .v-modal-footer {
      margin-top: 8px;
      align-items: center;
      justify-content: flex-end;
    }
    .v-modal-header,
    .v-modal-footer {
      display: flex;
    }
  }
}
.v-modal-enter {
  opacity: 0;
}
.v-modal-leave-active {
  opacity: 0;
}
</style>
