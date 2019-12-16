import React from 'react'
import { Icon, IconProps } from '../Icon'
export function InformationCircleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M14.25 16.5h-.75A1.5 1.5 0 0112 15v-3.75a.75.75 0 00-.75-.75h-.75M11.625 6.75a.375.375 0 10.375.375.375.375 0 00-.375-.375h0"
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
