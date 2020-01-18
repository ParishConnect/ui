import { system, ResponsiveValue } from 'styled-system'

export type TransitionProps = {
  transition?: ResponsiveValue<string>
}

const config = {
  tint: {
    prop: 'transition',
    property: 'transition',
    scale: 'transitions',
    transform: (speed: string) => {
      console.log(speed)
      return speed
    },
  },
}

export const transition = system(config)
export default transition
