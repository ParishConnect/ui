import React from 'react'
import { Icon, IconProps } from '../Icon'
export function RotateForwardIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.25 7.5l3-3-3-3M20.969 12.75c.02.247.031.5.031.75a8.973 8.973 0 01-.284 2.25M18.894 7.715a8.968 8.968 0 011.229 1.906M18.872 19.312q-.24.284-.508.552a8.979 8.979 0 01-1.792 1.39"
      />
      <path
        d="M12.75 22.469c-.247.02-.5.031-.75.031a9 9 0 010-18h2.25"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
