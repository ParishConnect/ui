import { system } from '@styled-system/core'

export const position = system({
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'stackingOrder',
  },
  top: {
    property: 'top',
    scale: 'space',
  },
  right: {
    property: 'right',
    scale: 'space',
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
  },
  left: {
    property: 'left',
    scale: 'space',
  },
})
export default position
