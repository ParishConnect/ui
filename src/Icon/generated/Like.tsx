import React from 'react'
import { Icon, IconProps } from '../Icon'
export function LikeIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M5.25 21.751a6 6 0 011.558.23l3.634 1.038a6 6 0 001.647.231h4.885a6 6 0 005.97-5.4l.3-5.1a4.5 4.5 0 00-3.4-4.594l-1.455-.318a1.5 1.5 0 01-1.139-1.456V3a2.25 2.25 0 00-4.5 0v1.554a7.5 7.5 0 01-7.5 7.5zM.75 9.75h4.5v13.5H.75z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
