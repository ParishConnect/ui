import React from 'react'
import { Icon, IconProps } from '../Icon'
export function KeyboardAltIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 14.997v-6M16.5 8.997h3M12 9v4.5a1.5 1.5 0 001.5 1.5H15M6 15v-4.5a1.5 1.5 0 013 0V15M6 11.997h3"
      />
      <rect
        x={1.5}
        y={1.497}
        width={21}
        height={21}
        rx={3}
        ry={3}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
