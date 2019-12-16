import React from 'react'
import { Icon, IconProps } from '../Icon'
export function RedoIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M23.25.748v7.5h-7.5M12 23.248a11.25 11.25 0 1110.6-15"
      />
    </Icon>
  )
}
