import React from 'react'
import { Icon, IconProps } from '../Icon'
export function MessagesDisableIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={17.25}
        cy={17.248}
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
        d="M13.008 21.489l8.484-8.484M23.223 10.5a10.5 10.5 0 10-19.39 6.275L.75 23.25l6.474-3.084A10.652 10.652 0 009 21.05"
      />
    </Icon>
  )
}
