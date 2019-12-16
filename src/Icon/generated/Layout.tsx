import React from 'react'
import { Icon, IconProps } from '../Icon'
export function LayoutIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={1.5}
        y={1.497}
        width={21}
        height={21}
        rx={1.5}
        ry={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M1.5 7.497h21M9 22.497v-15"
      />
    </Icon>
  )
}
