import React from 'react'
import { Icon, IconProps } from '../Icon'
export function WifiIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={12}
        cy={18.75}
        r={3}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M17.3 13.447a7.5 7.5 0 00-10.606 0M20.485 10.265a12 12 0 00-16.97 0M23.25 6.681a16.5 16.5 0 00-22.5 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
