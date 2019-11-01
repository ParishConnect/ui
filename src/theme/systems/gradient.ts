import { system } from 'styled-system'
import { createGradient } from '../utils'

const config = {
  gradient: {
    prop: ['gradient', 'backgroundImage'],
    property: 'background-image',
    scale: 'gradients',
    transform: (color: string, gradients: { [name: string]: string[] }) => {
      const [start, end] = gradients[color] || gradients['default']
      return createGradient(start, end)
    },
  },
}

export const gradient = system(config)
export default gradient
