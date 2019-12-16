import React from 'react'
import { Icon, IconProps } from '../Icon'
export function MoveUpIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 .748v10.5M8.25 4.498L12 .748l3.75 3.75"
      />
      <rect
        x={0.75}
        y={15.748}
        width={22.5}
        height={7.5}
        rx={1.5}
        ry={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
