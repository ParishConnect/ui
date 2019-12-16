import React from 'react'
import { Icon, IconProps } from '../Icon'
export function MessagesSubtractIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M23.224 10.5a10.5 10.5 0 10-19.391 6.275L.75 23.25l6.475-3.084A10.576 10.576 0 009 21.05"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={17.25}
        cy={17.25}
        r={6}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.25 17.25h6"
      />
    </Icon>
  )
}
