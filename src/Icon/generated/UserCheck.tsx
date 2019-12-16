import React from 'react'
import { Icon, IconProps } from '../Icon'
export function UserCheckIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M.75 17.25a6.753 6.753 0 019.4-6.208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={7.5}
        cy={4.875}
        r={4.125}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M23.25 17.25a6 6 0 11-6-6M23.25 12.749l-5.47 5.47a.749.749 0 01-1.06 0L15 16.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
