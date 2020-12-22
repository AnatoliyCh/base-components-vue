<template src="./v-input-text.vue" ></template>

<script lang="ts">
import { Component, Model } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import VInputText from "./v-input-text.vue";

@Component({ inheritAttrs: true })
export default class VInputPassword extends VInputText {
  type = "password";
}
</script>
