import React from 'react'
import { Icon, IconProps } from '../Icon'
export function TextItalicIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M23.25.748h-10.5M11.25 23.248H.75M6 23.248l12-22.5"
      />
    </Icon>
  )
}
