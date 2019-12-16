import React from 'react'
import { Icon, IconProps } from '../Icon'
export function CapsIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M.75 6.5A2.25 2.25 0 013 4.248h7.5M6.75 4.248v15M3.75 19.248h6M13.5 4.248H21A2.25 2.25 0 0123.25 6.5M17.25 4.248v15M14.25 19.248h6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
