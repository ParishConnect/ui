import React from 'react'
import { Icon, IconProps } from '../Icon'
export function TrashIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M17.25 21H6.75a1.5 1.5 0 01-1.5-1.5V6h13.5v13.5a1.5 1.5 0 01-1.5 1.5zM9.75 16.5v-6M14.25 16.5v-6M2.25 6h19.5M14.25 3h-4.5a1.5 1.5 0 00-1.5 1.5V6h7.5V4.5a1.5 1.5 0 00-1.5-1.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
