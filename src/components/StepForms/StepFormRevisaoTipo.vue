<script>
import { h } from 'vue'
import { mapState } from 'pinia'
import { useTiposStore } from '../../stores/tipos'
import InputTipoPessoaFisica from '../Inputs/InputTipoPessoaFisica.vue'
import InputTipoPessoaJuridica from '../Inputs/InputTipoPessoaJuridica.vue'

export default {
  components: {
    InputTipoPessoaFisica,
    InputTipoPessoaJuridica
  },
  computed: {
    ...mapState(useTiposStore, ['selectedTipo'])
  },
  render() {
    const tipoList = {
      pj: InputTipoPessoaJuridica,
      pf: InputTipoPessoaFisica
    }
    return h(tipoList[this.selectedTipo])
  }
}
</script>

<style module>
</style>

