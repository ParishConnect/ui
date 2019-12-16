import React from 'react'
import { Icon, IconProps } from '../Icon'
export function SlidersVerticalIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={0.75}
        y={0.75}
        width={22.5}
        height={22.5}
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
        d="M15.75 11.265v-6M15.75 18.765v-3M18 13.515a2.25 2.25 0 11-2.25-2.25 2.25 2.25 0 012.25 2.25zM8.25 9.765v9M10.5 7.515a2.25 2.25 0 10-2.25 2.25 2.25 2.25 0 002.25-2.25z"
      />
    </Icon>
  )
}
