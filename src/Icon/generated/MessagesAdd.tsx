import React from 'react'
import { Icon, IconProps } from '../Icon'
export function MessagesAddIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M23.223 10.5a10.5 10.5 0 10-19.39 6.275L.749 23.25l6.475-3.084A10.614 10.614 0 009 21.05"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={17.25}
        cy={17.249}
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
        d="M17.25 14.249v6M14.25 17.249h6"
      />
    </Icon>
  )
}
