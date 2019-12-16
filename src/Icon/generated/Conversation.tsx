import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ConversationIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M23.25 13.5A5.25 5.25 0 0018 8.25h-3a5.25 5.25 0 000 10.5h.75l4.5 4.5v-5.024a5.239 5.239 0 003-4.726zM6.75 12.75l-3 3v-5.024A5.239 5.239 0 016 .75h3a5.252 5.252 0 015.032 3.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
