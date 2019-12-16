import React from 'react'
import { Icon, IconProps } from '../Icon'
export function TextUnderlineIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M.75 23.248h22.5M3.75.748h3M17.25.748h3M18.75.748V12a6.75 6.75 0 01-13.5 0V.748"
      />
    </Icon>
  )
}
