import React from 'react'
import { Icon, IconProps } from '../Icon'
export function TextStrikeThroughIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M18.75.748h-7.023c-2.485 0-4.977 2.014-4.977 4.5 0 6.75 12 6.75 12 13.5a4.5 4.5 0 01-4.5 4.5h-7.5M.75 12.748h22.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
