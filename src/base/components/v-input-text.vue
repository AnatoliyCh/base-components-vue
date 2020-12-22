<template>
	<div
		:class="[
			'v-input',
			{ 'v-input-focused': isFocused },
			{ 'v-input-big': size === 'big' },
		]"
		@click.stop="setIsFocused"
	>
		<div
			:class="[
				'v-input-content',
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
				@change="$emit('change', $event.target.value)"
				@input="$emit('input', $event.target.value)"
				:maxlength="maxlength"
				:placeholder="placeholder"
				ref="input"
				:type="type"
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
import { Component, Model } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import VInputMixin from "../mixins/v-input-mixin";

@Component({ inheritAttrs: true })
export default class VInputText extends mixins(VInputMixin) {
  /** v-model - изменение на каждый ввод
   * :value и '@change' - изменение после смены фокуса */
  @Model("input", {
    type: [String],
    default: "",
    validator: x => typeof x === "string"
  })
  readonly value!: string;
  // поднятие label
  get validByLabel() {
    return this.isFocused || Boolean(this.value);
  }
}
</script>
