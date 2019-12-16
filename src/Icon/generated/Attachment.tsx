import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AttachmentIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M18.75 15.749V7.5a6.75 6.75 0 00-13.5 0v11.25a4.5 4.5 0 009 0V7.5a2.25 2.25 0 10-4.5 0v9.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
