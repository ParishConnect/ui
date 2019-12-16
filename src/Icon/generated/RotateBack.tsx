import React from 'react'
import { Icon, IconProps } from '../Icon'
export function RotateBackIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.75 7.5l-3-3 3-3M3.031 12.75c-.02.247-.031.5-.031.75a8.973 8.973 0 00.284 2.25M5.106 7.715a8.968 8.968 0 00-1.229 1.906M5.128 19.312q.24.284.508.552a8.979 8.979 0 001.792 1.39"
      />
      <path
        d="M11.25 22.469c.247.02.5.031.75.031a9 9 0 000-18H9.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
