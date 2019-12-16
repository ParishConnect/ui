import React from 'react'
import { Icon, IconProps } from '../Icon'
export function LocationCircleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M9.58 14.42l1.853 3.336a.75.75 0 001.36-.108l3.132-8.612a.75.75 0 00-.961-.961l-8.612 3.132a.75.75 0 00-.108 1.36z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={12}
        cy={12}
        r={11.25}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
