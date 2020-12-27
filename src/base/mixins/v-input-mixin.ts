import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

type sizeInput = "normal" | "big"; // размеры компонента input

@Component
export default class VInputMixin extends Vue {
  $refs!: {
    input: HTMLInputElement;
  };

  // максимальная длина текста
  @Prop({
    type: [Number, String],
    default: 32,
    validator: (x) => typeof x === "number",
  })
  readonly maxlength!: number;
  // надпись (для специальных элементов)
  @Prop({
    type: [Number, String],
    default: "",
    validator: (x) => typeof x === "string",
  })
  readonly label!: string | null;
  // размер контролла
  @Prop({
    type: String,
    default: "normal",
    validator: (x) => typeof x === "string",
  })
  readonly size!: sizeInput | null;
  // placeholder элемента
  @Prop({ type: String, default: "", validator: (x) => typeof x === "string" })
  readonly placeholder!: string | null;
  // граница элемента
  @Prop({
    type: Boolean,
    default: false,
    validator: (x) => typeof x === "boolean",
  })
  readonly bordered!: boolean;
  // иконка (слева)
  @Prop({
    type: String,
    default: null,
    validator: (x) => typeof x === "string",
  })
  readonly icon!: string | null;
  // центрирование текста
  @Prop({
    type: Boolean,
    default: false,
    validator: (x) => typeof x === "boolean",
  })
  readonly centered!: boolean;

  isFocused = false; // нажатие на контейнер: v-input
  type = "text";

  mounted() {
    this.$nextTick(function() {
      // подписка на клик браузере
      document.addEventListener("click", this.resetIsfocused, true);
    });
  }
  beforeDestroy() {
    // подписка на клик браузере: кнопка мыши отжата
    document.removeEventListener("mousedown", this.resetIsfocused);
  }

  // работа с фокусом
  setIsFocused() {
    this.isFocused = true;
    this.$refs.input.focus();
  }
  resetIsfocused() {
    this.isFocused = false;
  }
}
