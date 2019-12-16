import React from 'react'
import { Icon, IconProps } from '../Icon'
export function PictureLandscapeIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={0.75}
        y={0.75}
        width={22.5}
        height={22.5}
        rx={1.5}
        ry={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M5.25 17.25l3.462-4.616a1.5 1.5 0 012.261-.161L12 13.5l3.3-4.4a1.5 1.5 0 012.4 0l2.67 3.56"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={6.375}
        cy={6.375}
        r={1.875}
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
        d="M.75 17.25h22.5"
      />
    </Icon>
  )
}
