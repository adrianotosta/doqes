<script>
import { h } from 'vue'
import { mapWritableState } from 'pinia'
import { useStepsStore } from '../../stores/steps'

export default {
  computed: {
    ...mapWritableState(useStepsStore, ['currentStep'])
  },
  render() {
    return h('button', {
      class: this.$style.voltar,
      style: {
        display: display.call(this)
      },
      type: 'button',
      onClick: this.back.bind(this)
    } ,[`voltar`])
  },
  methods: {
    back() {
      this.currentStep = this.currentStep - 1
    }
  }
}

function display() {
  return !isTheFirstStep.call(this) ? 'grid' : 'none'
}

function isTheFirstStep() {
  return this.currentStep === 0
}
</script>

<style module>
@import '../../assets/styles.modules.css';

.voltar {
  composes: btn;
  background-color: #fff;
  border: solid 1px #faba0a;
  color: #faba0a;
}
</style>
