<template src="./v-input-text.vue"></template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import VInputText from "./v-input-text.vue";

@Component({ inheritAttrs: true })
export default class VInputPassword extends VInputText {
  type = "password";
}
</script>
