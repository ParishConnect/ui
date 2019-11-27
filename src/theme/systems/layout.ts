import { system, get } from '@styled-system/core'

const isNumber = (n: any) => typeof n === 'number' && !isNaN(n)
const majorScale = (n: any, scale: number) => (isNumber(n) ? Math.floor(n * scale) : n)

const config = {
  width: {
    property: 'width',
    transform: majorScale,
  },
  height: {
    property: 'height',
    transform: majorScale,
  },
  minWidth: {
    property: 'minWidth',
    transform: majorScale,
  },
  minHeight: {
    property: 'minHeight',
    transform: majorScale,
  },
  maxWidth: {
    property: 'maxWidth',
    transform: majorScale,
  },
  maxHeight: {
    property: 'maxHeight',
    transform: majorScale,
  },
  size: {
    properties: ['width', 'height'],
    transform: majorScale,
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
}

export const layout = system(config)
export default layout
