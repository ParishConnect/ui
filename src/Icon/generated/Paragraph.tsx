import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ParagraphIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.25.748v22.5M17.25.748v22.5M11.25 14.248H7.5a6.75 6.75 0 010-13.5h15.75"
      />
    </Icon>
  )
}
