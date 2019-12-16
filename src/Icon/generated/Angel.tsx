import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AngelIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <ellipse
        cx={12.001}
        cy={2.25}
        rx={4.5}
        ry={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={12.001}
        cy={10.5}
        r={3.75}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M9 12.75l-3.035 8.5a1.5 1.5 0 001.413 2h9.243a1.5 1.5 0 001.413-2L15 12.75M15 12.75l7.1-4.35a.75.75 0 011.142.756c-.342 1.685-.377 5.8-3.96 6.756M9 12.75L1.9 8.4a.75.75 0 00-1.142.756c.342 1.685.377 5.8 3.96 6.756"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
