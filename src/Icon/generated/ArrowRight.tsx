import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M.75 12h22.5M12.75 22.5L23.25 12 12.75 1.5"
      />
    </Icon>
  )
}
