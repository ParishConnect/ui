import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AlignLeftIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={3.75}
        y={14.25}
        width={19.5}
        height={6.018}
        rx={1}
        ry={1}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <rect
        x={3.75}
        y={3.732}
        width={11.25}
        height={6.018}
        rx={1}
        ry={1}
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
        d="M.75.75v22.5"
      />
    </Icon>
  )
}
