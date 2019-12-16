import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ArrowUpIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 23.25V.75M22.5 11.25L12 .75 1.5 11.25"
      />
    </Icon>
  )
}
