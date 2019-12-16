import React from 'react'
import { Icon, IconProps } from '../Icon'
export function HashIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 8.248h19.5M.75 17.248h19.5M12 .748l-7.5 22.5M19.5.748l-7.5 22.5"
      />
    </Icon>
  )
}
