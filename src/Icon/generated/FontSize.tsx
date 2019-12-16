import React from 'react'
import { Icon, IconProps } from '../Icon'
export function FontSizeIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M.75 12.749h10.5M15.75 17.249h7.5M15.75 21.749V13.5a3.75 3.75 0 017.5 0v8.25M.75 21.749V7.5a5.25 5.25 0 0110.5 0v14.25"
      />
    </Icon>
  )
}
