import React from 'react'
import { Icon, IconProps } from '../Icon'
export function TextBoldIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M3.75 23.248h9.75a6.75 6.75 0 000-13.5h.75a4.5 4.5 0 100-9H3.75M6.75.748v22.5M13.5 9.748H6.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
