import { system } from 'styled-system'

const config = {
  tint: {
    prop: 'tint',
    property: 'background-color',
    scale: 'tints',
    transform: (color: string, tints: { [color: string]: string }) =>
      tints[color] || tints['default'],
  },
}

export const tint = system(config)
export default tint
