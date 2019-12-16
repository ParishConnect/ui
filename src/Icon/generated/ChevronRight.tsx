import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ChevronRightIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M5.5.75l10.72 10.72a.749.749 0 010 1.06L5.5 23.25"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
