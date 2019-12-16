import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AnalyticsBoardIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={0.75}
        y={3.75}
        width={22.5}
        height={16.5}
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
        d="M3.75 15L6.9 9.75 9.75 15l3-3 3 3 4.5-6.75"
      />
    </Icon>
  )
}
