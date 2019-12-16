import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ChevronLeftIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M16.25 23.25L5.53 12.53a.749.749 0 010-1.06L16.25.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
