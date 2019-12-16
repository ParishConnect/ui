import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ConstructionSignIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={0.75}
        y={5.25}
        width={22.5}
        height={10.5}
        rx={1}
        ry={1}
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
        d="M3.75 15.75v7.5M20.25 15.75v7.5"
      />
      <circle
        cx={6}
        cy={2.25}
        r={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={18}
        cy={2.25}
        r={1.5}
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
        d="M8.25 5.25l-7.5 7.5M14.25 5.25l-10.5 10.5M20.25 5.25l-10.5 10.5M23.25 8.25l-7.5 7.5"
      />
    </Icon>
  )
}
