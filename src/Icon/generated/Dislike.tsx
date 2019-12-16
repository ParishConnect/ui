import React from 'react'
import { Icon, IconProps } from '../Icon'
export function DislikeIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M18.75 2.248a5.954 5.954 0 01-1.558-.229L13.558.981A6 6 0 0011.911.75H7.026a6 6 0 00-5.97 5.4l-.3 5.1a4.5 4.5 0 003.4 4.594l1.455.318a1.5 1.5 0 011.139 1.455V21a2.25 2.25 0 004.5 0v-1.554a7.5 7.5 0 017.5-7.5zM18.75.75h4.5v13.5h-4.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
