import React from 'react'
import { Icon, IconProps } from '../Icon'
export function QrCodeIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.25 5.25h3v3h-3zM5.25 15.75h3v3h-3zM15.75 5.25h3v3h-3zM5.25 12.75h6v1.5M14.25 14.25v4.5h4.5v-4.5h-1.5M11.25 17.25v1.5M11.25 5.25v4.5h1.5M15.75 11.25h3M.75 6V2.25a1.5 1.5 0 011.5-1.5H6M18 .75h3.75a1.5 1.5 0 011.5 1.5V6M23.25 18v3.75a1.5 1.5 0 01-1.5 1.5H18M6 23.25H2.25a1.5 1.5 0 01-1.5-1.5V18"
      />
    </Icon>
  )
}
