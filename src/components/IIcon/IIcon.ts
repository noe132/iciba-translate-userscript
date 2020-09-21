import {
  defineComponent,
  computed,
} from 'vue'

interface Props {
  svg: string
  size: number | string | false
  color: string
}

export default defineComponent({
  props: {
    svg: {
      type: String,
      default: '',
    },
    size: {
      type: null,
      default: 16,
    },
    color: {
      type: String,
      default: '',
    },
  },
  setup: (props: Props) => {
    const computedSize = computed(() => {
      if (!props.size) {
        return undefined
      }
      const size = parseInt(`${props.size}`, 10)
      if (`${size}` === `${props.size}`) {
        return `${size}px`
      }
      return props.size
    })

    const svgContent = computed(() => (props.color
      ? props.svg.replace(/(fill="#[a-fA-F0-9]{6}")/g, `fill="${props.color}"`)
      : props.svg))

    const svgUrl = computed(() => `data:image/svg+xml;base64,${window.btoa(svgContent.value)}`)

    return {
      computedSize,
      svgContent,
      svgUrl,
    }
  },
})
