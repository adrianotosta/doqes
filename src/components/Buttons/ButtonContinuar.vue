<script>
import { h } from 'vue'
import { mapWritableState } from 'pinia'
import { useStepsStore } from '../../stores/steps'

export default {
  computed: {
    ...mapWritableState(useStepsStore, ['currentStep', 'flow'])
  },
  render() {
    return h('button', {
      class: this.$style.continue,
      type: 'submit',
    } ,[`${label.call(this)}`])
  },
}

function label() {
  return isTheLastStep.call(this) ? 'cadastrar' : 'continuar'
}

function isTheLastStep() {
  return this.currentStep === this.flow.length - 1
}
</script>

<style module>
@import '../../assets/styles.modules.css';
.continue {
  composes: btn;
  background-color: #faba0a;
  border: none;
  color: #fff;
}
</style>
