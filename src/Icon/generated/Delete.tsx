import React from 'react'
import { Icon, IconProps } from '../Icon'
export function DeleteIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={11.998}
        cy={12}
        r={11.25}
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
        d="M7.498 16.5l8.999-9M16.498 16.5l-9.001-9"
      />
    </Icon>
  )
}
