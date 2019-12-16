import React from 'react'
import { Icon, IconProps } from '../Icon'
export function UserDirectoryIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={12.75}
        cy={9.375}
        r={2.625}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.25 17.25a4.5 4.5 0 019 0M5.25.75v22.5M23.25 3v3M23.25 9v3M23.25 15v3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <rect
        x={0.75}
        y={0.75}
        width={19.5}
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
