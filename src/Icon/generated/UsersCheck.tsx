import React from 'react'
import { Icon, IconProps } from '../Icon'
export function UsersCheckIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M23.25 17.25a6 6 0 11-6-6M23.25 12.749l-5.47 5.47a.749.749 0 01-1.06 0L15 16.5M10.782 10.513A6.052 6.052 0 006.75 9a6 6 0 00-6 5.25"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={6.75}
        cy={4.125}
        r={3.375}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={16.5}
        cy={3.375}
        r={2.625}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M20.4 9a4.5 4.5 0 00-7.285-.71"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
