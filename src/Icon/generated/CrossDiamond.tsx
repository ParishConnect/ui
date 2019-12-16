import React from 'react'
import { Icon, IconProps } from '../Icon'
export function CrossDiamondIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={3.734}
        y={3.734}
        width={16.533}
        height={16.533}
        rx={1.063}
        ry={1.063}
        transform="rotate(-45 12 12)"
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
        d="M12 6.75v10.5M6.75 12h10.5"
      />
    </Icon>
  )
}
