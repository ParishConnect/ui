import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AlignMiddleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 12h-3M14.25 12h-4.5M23.25 12h-3"
      />
      <rect
        x={-3}
        y={9}
        width={19.5}
        height={6}
        rx={1}
        ry={1}
        transform="rotate(90 6.75 12)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <rect
        x={10.5}
        y={9}
        width={13.5}
        height={6}
        rx={1}
        ry={1}
        transform="rotate(90 17.25 12)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
