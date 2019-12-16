import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ArrowDownIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 .75v22.5M1.5 12.75L12 23.25l10.5-10.5"
      />
    </Icon>
  )
}
