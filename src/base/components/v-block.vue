<template>
  <div class="v-block">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ inheritAttrs: true })
export default class VBlock extends Vue {}
</script>

<style lang="scss" scoped>
@import "../scss/__root";

.v-block {
  height: min-content;
  background-color: $color-white;
  padding: 8px;
  margin: 0 4px;
  border-radius: 6px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}
</style>
