import React from 'react'
import { Icon, IconProps } from '../Icon'
export function MicrophoneIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17.25v6M9 23.25h6M4.5 8.25v3a6 6 0 006 6h3a6 6 0 006-6v-3"
      />
      <path
        d="M13.5 14.25h-3a3.2 3.2 0 01-3-3.375v-6.75a3.2 3.2 0 013-3.375h3a3.2 3.2 0 013 3.375v6.75a3.2 3.2 0 01-3 3.375zM7.5 5.25h3M13.5 5.25h3M7.5 8.25h3M13.5 8.25h3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
