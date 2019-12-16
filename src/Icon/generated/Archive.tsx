import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ArchiveIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M21.75 9.75v9a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-9M21.75 2.25H2.25a1.5 1.5 0 00-1.5 1.5v3h22.5v-3a1.5 1.5 0 00-1.5-1.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15 11.25a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 010-3h3a1.5 1.5 0 011.5 1.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
