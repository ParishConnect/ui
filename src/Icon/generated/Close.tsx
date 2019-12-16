import React from 'react'
import { Icon, IconProps } from '../Icon'
export function CloseIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M.75 23.249l22.5-22.5M23.25 23.249L.75.749"
      />
    </Icon>
  )
}
