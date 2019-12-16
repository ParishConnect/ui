import React from 'react'
import { Icon, IconProps } from '../Icon'
export function PrinterIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.25 15.75H6.75l-1.5 7.5h13.5l-1.5-7.5z"
      />
      <path
        d="M17.85 18.75h3.9a1.5 1.5 0 001.5-1.5v-6H.75v6a1.5 1.5 0 001.5 1.5h3.9M6.75 5.25H4.677a1.5 1.5 0 00-1.342.829L.75 11.25h22.5l-2.585-5.171a1.5 1.5 0 00-1.342-.829H17.25"
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
        d="M6.75.75h10.5v7.5H6.75zM20.625 14.25a.375.375 0 10.375.375.375.375 0 00-.375-.375h0M9.75 20.25h4.5"
      />
    </Icon>
  )
}
