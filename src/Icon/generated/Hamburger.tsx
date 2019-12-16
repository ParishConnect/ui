import React from 'react'
import { Icon, IconProps } from '../Icon'
export function HamburgerIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 18.003h19.5M2.25 12.003h19.5M2.25 6.003h19.5"
      />
    </Icon>
  )
}
