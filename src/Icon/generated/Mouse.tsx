import React from 'react'
import { Icon, IconProps } from '../Icon'
export function MouseIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M6.75 23.25h0a6 6 0 01-6-6v-6a6 6 0 016-6h0a6 6 0 016 6v6a6 6 0 01-6 6zM.75 12.75h12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M6.75 12.75v-7.5h0a4.5 4.5 0 014.5-4.5h0a4.5 4.5 0 014.5 4.5V7.5a3.75 3.75 0 003.75 3.75h0a3.75 3.75 0 003.75-3.75V.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
