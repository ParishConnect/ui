import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AtIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M17.25 12A5.25 5.25 0 1112 6.75 5.25 5.25 0 0117.25 12z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M17.25 12v2.25a3 3 0 006 0V12a11.249 11.249 0 10-4.5 9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
