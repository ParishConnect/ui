import React from 'react'
import { Icon, IconProps } from '../Icon'
export function EnvelopeIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={0.75}
        y={4.5}
        width={22.5}
        height={15}
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
        d="M15.687 9.975L19.5 13.5M8.313 9.975L4.5 13.5M22.88 5.014l-9.513 6.56a2.406 2.406 0 01-2.734 0L1.12 5.014"
      />
    </Icon>
  )
}
