import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ExternalLinkIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M23.251 7.498V.748h-6.75M23.251.748l-15 15M11.251 5.248h-9a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-9"
      />
    </Icon>
  )
}
