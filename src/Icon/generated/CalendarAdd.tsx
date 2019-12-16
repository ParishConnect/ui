import React from 'react'
import { Icon, IconProps } from '../Icon'
export function CalendarAddIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5"
        strokeLinecap="round"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M.75 6.75h16.5"
      />
      <path
        strokeLinecap="round"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.25 3.75v-3M12.75 3.75v-3"
      />
      <circle
        cx={17.25}
        cy={17.25}
        r={6}
        strokeLinecap="round"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        strokeLinecap="round"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.25 14.25v6M14.25 17.25h6"
      />
    </Icon>
  )
}
