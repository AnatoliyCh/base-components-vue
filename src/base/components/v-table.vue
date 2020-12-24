<template>
  <!-- ДОДЕЛАТЬ! -->
  <table :align="align" :height="height" :width="width">
    <caption v-if="caption">
      {{
        caption || ""
      }}
    </caption>
    <thead>
      <tr>
        <slot name="header">
          <th v-for="(header, index) in headers" :key="index">
            {{ header }}
          </th>
        </slot>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td colspan="1000"><v-spiner /></td>
      </tr>
      <template v-else v-for="(item, index) in data">
        <tr :key="index">
          <slot :item="item"> </slot>
        </tr>
      </template>
    </tbody>
  </table>

  <!--
+ align - Определяет выравнивание таблицы.
background - Задает фоновый рисунок в таблице.
bgcolor - Цвет фона таблицы.
border - Толщина рамки в пикселах.
bordercolor - Цвет рамки.
cellpadding - Отступ от рамки до содержимого ячейки.
cellspacing - Расстояние между ячейками.
cols - Число колонок в таблице.
frame - Сообщает браузеру, как отображать границы вокруг таблицы.
+ height - Высота таблицы.
rules - Сообщает браузеру, где отображать границы между ячейками.
summary - Краткое описание таблицы.
+ width - Ширина таблицы.-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ inheritAttrs: true })
export default class VTable extends Vue {
  // выравнивание таблицы
  @Prop({ type: String, default: null, validator: x => typeof x === "string" })
  readonly align!: string | null;
  // высота таблицы
  @Prop({ type: String, default: null, validator: x => typeof x === "string" })
  readonly height!: string | null;
  // ширина таблицы
  @Prop({ type: String, default: null, validator: x => typeof x === "string" })
  readonly width!: string | null;

  // заголовок таблицы
  @Prop({ type: String, default: null, validator: x => typeof x === "string" })
  readonly caption!: string | null;
  // заголовоки к таблице
  @Prop({ type: Array, default: [], validator: x => typeof x === "object" })
  readonly headers!: string[] | null;
  // идёт ли загрузка
  @Prop({
    type: Boolean,
    default: false,
    validator: x => typeof x === "boolean"
  })
  readonly loading!: boolean;
  // данные к таблице
  @Prop({ type: Array, default: [], validator: x => typeof x === "object" })
  readonly data!: any[] | null;
}
</script>

<style lang="scss" scoped>
@import "../scss/__root";

.v-table {
}
</style>
