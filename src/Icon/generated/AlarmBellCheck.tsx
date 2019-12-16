import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AlarmBellCheckIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={17.25}
        cy={6.75}
        r={6}
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
        d="M15.129 7.5l1.5 1.5 3.75-3.75M17.505 15.862a7.369 7.369 0 001.245 2.888h-18s1.5-2.329 1.5-8.25A7.5 7.5 0 019.75 3V.75M7.748 21.75a2.087 2.087 0 004.005 0"
      />
    </Icon>
  )
}
