import React from 'react'
import { Icon, IconProps } from '../Icon'
export function KeyboardIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={0.75}
        y={11.25}
        width={22.5}
        height={12}
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
        d="M6.75 14.25h1.5M15.75 14.25h1.5M11.25 14.25h1.5M4.5 17.25H6M9 17.25h1.5M13.5 17.25H15M18 17.25h1.5M6.75 20.25h10.5M6.75 11.25v-1.5a4.5 4.5 0 014.5-4.5H15a4.5 4.5 0 004.5-4.5h0"
      />
    </Icon>
  )
}
