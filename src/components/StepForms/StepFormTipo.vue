<script>
import { h } from 'vue'
import { mapState } from 'pinia'
import { useTiposStore } from '../../stores/tipos'
import StepFormTipoPessoaJuridica from './StepFormTipoPessoaJuridica.vue'
import StepFormTipoPessoaFisica from './StepFormTipoPessoaFisica.vue'

export default {
  components: {
    StepFormTipoPessoaJuridica,
    StepFormTipoPessoaFisica
  },
  computed: {
    ...mapState(useTiposStore, ['selectedTipo'])
  },
  render() {
    const tipoList = {
      pf: StepFormTipoPessoaFisica,
      pj: StepFormTipoPessoaJuridica
    }
    return h(tipoList[this.selectedTipo])
  }
}
</script>

<style module>
</style>
