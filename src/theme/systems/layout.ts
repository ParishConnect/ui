import { system } from '@styled-system/core'
import { majorScale } from './utils'

const config = {
  width: {
    property: 'width',
    scale: 'major',
    transform: majorScale,
  },
  height: {
    property: 'height',
    scale: 'major',
    transform: majorScale,
  },
  minWidth: {
    property: 'minWidth',
    scale: 'major',
    transform: majorScale,
  },
  minHeight: {
    property: 'minHeight',
    scale: 'major',
    transform: majorScale,
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'major',
    transform: majorScale,
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'major',
    transform: majorScale,
  },
  size: {
    properties: ['width', 'height'],
    scale: 'major',
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
