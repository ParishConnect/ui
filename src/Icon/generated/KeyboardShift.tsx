import React from 'react'
import { Icon, IconProps } from '../Icon'
export function KeyboardShiftIcon(props: IconProps) {
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
        d="M16.5 12h2.248a.75.75 0 00.531-1.28l-6.3-5.86a1.5 1.5 0 00-1.948 0L4.72 10.717A.75.75 0 005.25 12H7.5v6A1.5 1.5 0 009 19.5h6a1.5 1.5 0 001.5-1.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
