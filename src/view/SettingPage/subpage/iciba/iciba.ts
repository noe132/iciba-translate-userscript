import { defineComponent } from 'vue'

import { store } from '~/service/store'

import providerIcon from '~/constants/icon'
import { PROVIDER } from '~/constants'

import ProviderCommon from '../../providerCommon/providerCommon.vue'

const iconOptions = Object
  .entries(providerIcon[PROVIDER.ICIBA])
  .map(([k, v]) => ({
    icon: v,
    key: k,
  }))

export default defineComponent({
  name: 'IcibaSettings',
  components: {
    ProviderCommon,
  },
  setup: () => ({
    form: store.config[PROVIDER.ICIBA],
    iconOptions,
  }),
})
