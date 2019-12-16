import React from 'react'
import { Icon, IconProps } from '../Icon'
export function SlidersHorizontalIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={0.751}
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
        d="M12.751 15.75h6M5.251 15.75h3M12.751 15.75A2.25 2.25 0 1110.5 13.5a2.25 2.25 0 012.251 2.25zM14.251 8.25h-9M18.751 8.25A2.25 2.25 0 1016.5 10.5a2.251 2.251 0 002.251-2.25z"
      />
    </Icon>
  )
}
