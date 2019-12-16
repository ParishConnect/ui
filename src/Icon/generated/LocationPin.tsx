import React from 'react'
import { Icon, IconProps } from '../Icon'
export function LocationPinIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={12}
        cy={8.25}
        r={3.75}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M12 .75a7.5 7.5 0 017.5 7.5c0 3.407-5.074 11.95-6.875 14.665a.75.75 0 01-1.25 0C9.574 20.2 4.5 11.657 4.5 8.25A7.5 7.5 0 0112 .75z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
