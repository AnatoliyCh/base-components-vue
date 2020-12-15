import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

type sizeInput = "normal" | "big"; // размеры компонента input

@Component
export default class VInput extends Vue {
  $refs!: {
    input: HTMLInputElement;
  };

  // максимальная длина текста
  @Prop({
    type: [Number, String],
    default: 32,
    validator: x => typeof x === "number"
  })
  readonly maxlength!: number;
  // надпись (для специальных элементов)
  @Prop({
    type: [Number, String],
    default: "",
    validator: x => typeof x === "string"
  })
  readonly label!: string | null;
  // размер
  @Prop({
    type: [String],
    default: "normal",
    validator: x => typeof x === "string"
  })
  readonly size!: sizeInput | null;

  isFocused = false; // нажатие на контейнер: v-input

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

  // раота с фокусом
  setIsFocused() {
    this.isFocused = true;
    this.$refs.input.focus();
  }
  resetIsfocused() {
    this.isFocused = false;
  }

  // есть ли label
  get isLabel() {
    return Boolean(this.label);
  }
}
