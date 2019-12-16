import React from 'react'
import { Icon, IconProps } from '../Icon'
export function NewspaperIcon(props: IconProps) {
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
        d="M13.5 13.5h6M13.5 16.5h6M13.5 19.5h3.75M3.75 13.5h6M3.75 16.5h6M3.75 19.5H7.5"
      />
      <rect
        x={3.75}
        y={3.75}
        width={16.5}
        height={6}
        rx={0.75}
        ry={0.75}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
