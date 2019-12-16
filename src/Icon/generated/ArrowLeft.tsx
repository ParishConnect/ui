import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ArrowLeftIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M23.25 12H.75M11.25 1.5L.75 12l10.5 10.5"
      />
    </Icon>
  )
}
