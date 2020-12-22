<template functional>
  <div class="v-spiner">
    <div
      class="v-loader"
      :style="{
        width: props.size + 'px',
        height: props.size + 'px',
        'border-width': props.size / 4 + 'px'
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ inheritAttrs: true })
export default class VSpiner extends Vue {
  // размер блока
  @Prop({
    type: [Number, String],
    default: 32,
    validator: x => typeof x === "number" || typeof x === "string"
  })
  readonly size!: number;
}
</script>
