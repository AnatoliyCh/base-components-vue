<template>
  <div
    :class="['v-input', { 'v-input-focused': isFocused }, `v-input-${size}`]"
    @click.stop="setIsFocused"
  >
    <div
      :class="[
        'v-input-content',
        { 'v-input-content-centered': centered },
        { 'v-input-content-border': bordered },
        { 'v-input-content-background': !label },
      ]"
    >
      <!-- иконка -->
      <div
        v-if="icon"
        :class="[
          'v-input-icon',
          { 'v-input-icon-focus': isFocused || (value && label) },
        ]"
      >
        <icon :icon="icon" />
      </div>
      <!-- input -->
      <input
        :value="value"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :type="type"
        @change="$emit('change', $event.target.value)"
        @input="inputValidation($event.target.value)"
        @keypress="keypress($event)"
        ref="input"
      />
      <!-- надпись -->
      <label
        v-if="label"
        :class="[
          'v-input-label',
          { 'v-input-label-focus': validByLabel },
          { 'v-input-label-icon': icon },
        ]"
        >{{ label }}</label
      >
      <!-- граница -->
      <div
        :class="[
          'v-input-border',
          { 'v-input-border-full': label || isFocused },
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Model, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import VInputMixin from "../mixins/v-input-mixin";

@Component({ inheritAttrs: true })
export default class VInputNumber extends mixins(VInputMixin) {
  /** v-model - изменение на каждый ввод
   * :value и '@change' - изменение после смены фокуса */
  @Model("input", {
    type: Number,
    default: null,
    validator: x => typeof x === "number"
  })
  readonly value!: number | null;

  //TODO: не работает
  //* минимальное значение
  @Prop({
    type: [Number, String, Object],
    default: null,
    validator: x => ["number", "string", "object"].includes(typeof x)
  })
  readonly min!: number | string | null;

  //TODO: не работает
  //* масксимальное значение
  @Prop({
    type: [Number, String, Object],
    default: null,
    validator: x => ["number", "string", "object"].includes(typeof x)
  })
  readonly max!: number | string | null;

  //* тип числа
  @Prop({
    type: String,
    default: "integer",
    validator: x => typeof x === "string"
  })
  readonly typeNumber!: "integer" | "double";

  type = "number";

  // регулярки для целых чисел
  // https://ru.stackoverflow.com/questions/863442/%D0%A3%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%B7-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8-%D0%B2%D1%81%D0%B5%D1%85-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2-%D0%BA%D1%80%D0%BE%D0%BC%D0%B5-%D1%86%D0%B8%D1%84%D1%80-%D0%B8-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%B0
  regExpInteger = new RegExp(/[\d]/g);
  regExpNotInteger = new RegExp(/[^\d]/g);

  @Emit("input")
  inputValidation(value: string | null) {
    if (!value) return null;
    return Number(value.replace(this.regExpNotInteger, "")) || null; // вырезает всё кроме integer
  }

  // https://stackoverflow.com/questions/39782176/filter-input-text-only-accept-number-and-dot-vue-js
  keypress(event: KeyboardEvent | null) {
    if (!event) return false;
    if (!this.regExpInteger.test(event.key)) event.preventDefault();
    else return true;
  }

  // поднятие label
  get validByLabel() {
    return this.isFocused || Boolean(this.value);
  }
}
</script>
