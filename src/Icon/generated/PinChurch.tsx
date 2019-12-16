import React from 'react'
import { Icon, IconProps } from '../Icon'
export function PinChurchIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.25v4H9v-4"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 11.25l4.5-3 4.5 3M12 3.75v4.5M10.5 5.25h3"
      />
      <path
        d="M21 9.75a9 9 0 10-10.8 8.82l1.8 4.68 1.8-4.68A9 9 0 0021 9.75z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
