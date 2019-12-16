import React from 'react'
import { Icon, IconProps } from '../Icon'
export function CoupleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={5.25}
        cy={14.25}
        r={3}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M9.75 23.25a4.5 4.5 0 00-9 0M22.5 23.25a4.5 4.5 0 00-9 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={18}
        cy={14.25}
        r={3}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15 14.25S15 18 12.75 18M21 14.25S21 18 23.25 18M16.272 1.5a2.429 2.429 0 00-3.516 0L11.25 3.06 9.744 1.5a2.429 2.429 0 00-3.516 0 2.632 2.632 0 000 3.635l4.487 4.639a.74.74 0 001.07 0l4.487-4.639a2.632 2.632 0 000-3.635z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
