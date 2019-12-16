import React from 'react'
import { Icon, IconProps } from '../Icon'
export function KeyboardOptionIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={1.5}
        y={1.497}
        width={21}
        height={21}
        rx={3}
        ry={3}
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
        d="M18 10.497h-4.5M6 10.497h3l3 4.5h6"
      />
    </Icon>
  )
}
