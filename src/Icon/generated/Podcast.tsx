import React from 'react'
import { Icon, IconProps } from '../Icon'
export function PodcastIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.13 13a5.75 5.75 0 119.74 0M5.13 16.38a9.32 9.32 0 1113.76 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.19 16.6a2 2 0 00-2-2.18h-2.43a2 2 0 00-2 2.18l.55 4.91a2 2 0 002 1.75h1.39a2 2 0 002-1.75z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={12}
        cy={10.04}
        r={2.45}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
