import React from 'react'
import { Icon, IconProps } from '../Icon'
export function CalendarCheckIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
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
        d="M19.924 15.506l-2.905 3.873a.752.752 0 01-1.131.081l-1.5-1.5M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5V3.765a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V8.25"
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
        d="M5.243 3.75v-3M12.743 3.75v-3"
      />
    </Icon>
  )
}
