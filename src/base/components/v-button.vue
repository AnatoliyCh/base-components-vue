<template>
  <button
    :class="[
      'v-button',
      { 'v-button-primary': primary },
      { 'v-button-flat': flat },
      { 'v-button-round': round },
      { 'v-button-circle': circle },
      `v-button-${size}`
    ]"
    :style="circle && { width: (size === 'big' ? '44' : '32') + 'px' }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type sizeButton = "normal" | "big"; // размеры компонента Button

@Component({ inheritAttrs: true })
export default class VButton extends Vue {
  // основная кнопка
  @Prop({
    type: Boolean,
    default: false,
    validator: x => typeof x === "boolean"
  })
  readonly primary!: boolean;
  // прозрачная кнопка
  @Prop({
    type: Boolean,
    default: false,
    validator: x => typeof x === "boolean"
  })
  readonly flat!: boolean;
  // округление кнопки
  @Prop({
    type: Boolean,
    default: false,
    validator: x => typeof x === "boolean"
  })
  readonly round!: boolean;
  // круглая кнопка (высота == ширине)
  @Prop({
    type: Boolean,
    default: false,
    validator: x => typeof x === "boolean"
  })
  readonly circle!: boolean;
  // размер кнопки
  @Prop({
    type: String,
    default: "normal",
    validator: x => typeof x === "string"
  })
  readonly size!: sizeButton | null;
}
</script>
