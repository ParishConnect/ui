import React from 'react'
import { Icon, IconProps } from '../Icon'
export function FlashIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M17.848 11.306a1.023 1.023 0 00-.871-1.559H13.5v-9L6.152 12.689a1.022 1.022 0 00.871 1.558H10.5v9z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
