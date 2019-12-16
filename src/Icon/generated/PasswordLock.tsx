import React from 'react'
import { Icon, IconProps } from '../Icon'
export function PasswordLockIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={14.25}
        y={10.5}
        width={9}
        height={7.5}
        rx={1.5}
        ry={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.75 10.5V9a3 3 0 013-3h0a3 3 0 013 3v1.5M18.75 13.875a.375.375 0 10.375.375.374.374 0 00-.375-.375h0M4.125 13.875a.375.375 0 10.375.375.374.374 0 00-.375-.375h0M7.875 13.875a.375.375 0 10.375.375.374.374 0 00-.375-.375h0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M11.25 18h-9a1.5 1.5 0 01-1.5-1.5v-6A1.5 1.5 0 012.25 9h9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
