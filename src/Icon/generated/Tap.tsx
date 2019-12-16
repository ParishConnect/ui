import React from 'react'
import { Icon, IconProps } from '../Icon'
export function TapIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M18 23.25v-3.458a3 3 0 00-2.507-2.96L13.5 16.5v-3a1.5 1.5 0 00-3 0v5.25l-1.174-.587a1.638 1.638 0 00-1.755 2.744L10.5 23.25M6.386 15.749A6.75 6.75 0 1118.048 15M23.25 9.75L21 12l2.25 2.25M9.75.75L12 3 14.25.75M.75 14.25L3 12 .75 9.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
