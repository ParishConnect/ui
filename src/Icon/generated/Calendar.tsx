import React from 'react'
import { Icon, IconProps } from '../Icon'
export function CalendarIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={0.752}
        y={3.75}
        width={22.5}
        height={19.5}
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
        d="M.752 9.75h22.5M6.752 6V.75M17.252 6V.75"
      />
    </Icon>
  )
}
