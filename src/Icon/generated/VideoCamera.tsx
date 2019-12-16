import React from 'react'
import { Icon, IconProps } from '../Icon'
export function VideoCameraIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={0.75}
        y={5.261}
        width={15}
        height={13.5}
        rx={3}
        ry={3}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M18.75 15.011l3.415 1.707a.75.75 0 001.085-.671V7.974a.749.749 0 00-1.085-.67L18.75 9.011"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
