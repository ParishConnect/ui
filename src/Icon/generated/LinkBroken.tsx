import React from 'react'
import { Icon, IconProps } from '../Icon'
export function LinkBrokenIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M16.5 15.749h1.875A3.963 3.963 0 0022.5 12h0a3.962 3.962 0 00-4.125-3.75H16.5M7.5 15.749H5.625A3.963 3.963 0 011.5 12h0a3.963 3.963 0 014.125-3.75H7.5M12 5.249v-4.5M9 5.249l-1.5-1.5M15 5.249l1.5-1.5M12 18.749v4.5M9 18.749l-1.5 1.5M15 18.749l1.5 1.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
