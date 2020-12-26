<template>
  <div class="v-checkbox">
    <input
      :checked="value"
      @change="$emit('change', $event.target.checked)"
      type="checkbox"
      :class="`v-checkbox-input v-checkbox-input-${size}`"
      :disabled="readonly"
    />
    <label v-if="label" class="v-checkbox-label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Model, Prop, Vue } from "vue-property-decorator";
type sizeCheckbox = "normal" | "big"; // размеры компонента Checkbox

@Component({ inheritAttrs: true })
export default class VCheckbox extends Vue {
  @Model("change", {
    type: Boolean,
    default: false,
    validator: x => typeof x === "boolean"
  })
  readonly value!: boolean;
  // надпись
  @Prop({
    type: String,
    default: null,
    validator: x => typeof x === "string"
  })
  readonly label!: string | null;
  // только чтение
  @Prop({
    type: Boolean,
    default: false,
    validator: x => typeof x === "boolean"
  })
  readonly readonly!: string | null;
  // размер
  @Prop({
    type: String,
    default: "normal",
    validator: x => typeof x === "string"
  })
  readonly size!: sizeCheckbox | null;
}
</script>

<style lang="scss" scoped>
@import "../scss/__root";
.v-checkbox {
  display: flex;
  align-items: center;

  .v-checkbox-label {
    color: $color-main-one;
  }

  .v-checkbox-input {
    margin-right: 8px;
    height: 16px;
    width: 16px;
  }

  .v-checkbox-input-big {
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
}
</style>
