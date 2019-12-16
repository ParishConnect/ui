import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ResizeShrinkIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M11.25 18.75h10.5a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v10.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M17.25 11.25H13.5a.75.75 0 01-.75-.75V6.75M20.25 3.75l-7.28 7.28M.75 18.75v-1.5M.75 14.25a1.5 1.5 0 011.5-1.5M11.25 18.75v-1.5M11.25 14.25a1.5 1.5 0 00-1.5-1.5M.75 21.75a1.5 1.5 0 001.5 1.5M11.25 21.75a1.5 1.5 0 01-1.5 1.5M5.25 12.75h1.5M5.25 23.25h1.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
