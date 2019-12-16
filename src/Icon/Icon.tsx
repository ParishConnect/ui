import React from 'react'
import { Box } from '../Box'

export type IconProps = Box & {
  name?: string
}

export function Icon({ name, children, ...rest }: IconProps) {
  return (
    <Box as="svg" data-icon={name} {...rest}>
      {name ? <title>{name}</title> : null}
      {children}
    </Box>
  )
}

Icon.defaultProps = {
  size: 2,
  fill: 'currentColor',
  strokeColor: 'currentColor',
}
