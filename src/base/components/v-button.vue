<template>
  <button class="v-button" @click="$emit('click', $event)">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ inheritAttrs: true })
export default class VButton extends Vue {
  @Prop() readonly label!: string;
}
</script>
