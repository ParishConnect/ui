import React from 'react'
import { Icon, IconProps } from '../Icon'
export function NetworkWarningIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M8.236 22.605A11.251 11.251 0 1123.25 12M9.289 1.079C7.768 3.312 6.75 7.367 6.75 12a24.573 24.573 0 001.515 8.961M.775 11.25H12.75M2.999 5.25H21M2.048 17.25H9.75M14.711 1.079a16.978 16.978 0 012.3 7.137M17.25 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M17.25 18v-3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M23.063 20.683a1.774 1.774 0 01-1.587 2.567h-8.452a1.774 1.774 0 01-1.587-2.567l4.226-8.452a1.774 1.774 0 013.174 0z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
