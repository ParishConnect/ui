import React from 'react'
import { Icon, IconProps } from '../Icon'
export function BatteryChargeIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M6.75 3h-4.5a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h4.5M15.75 3h3a1.5 1.5 0 011.5 1.5V6h1.5a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-1.5v1.5a1.5 1.5 0 01-1.5 1.5h-3M11.25 13.5h0a3 3 0 01-3-3V9a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v1.5a3 3 0 01-3 3zM9.75 7.5v-3M12.75 7.5v-3M11.25 13.5V21"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
