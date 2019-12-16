import React from 'react'
import { Icon, IconProps } from '../Icon'
export function MoveLeftIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M.75 11.998h10.5M4.5 8.248l-3.75 3.75 3.75 3.75"
      />
      <rect
        x={15.75}
        y={0.748}
        width={7.5}
        height={22.5}
        rx={1.5}
        ry={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
