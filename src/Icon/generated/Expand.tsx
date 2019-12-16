import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ExpandIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 14.248l-9 9M23.25 7.498V.748H16.5M.75 16.498v6.75H7.5M23.25.748l-9 9"
      />
    </Icon>
  )
}
