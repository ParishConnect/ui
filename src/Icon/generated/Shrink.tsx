import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ShrinkIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M23.25.748l-9 9M9.75 20.998v-6.75H3M14.25 2.998v6.75H21M9.75 14.248l-9 9"
      />
    </Icon>
  )
}
