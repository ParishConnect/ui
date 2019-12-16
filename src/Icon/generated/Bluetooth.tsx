import React from 'react'
import { Icon, IconProps } from '../Icon'
export function BluetoothIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.617 18l12.75-12-6.75-5.25v22.5l6.75-5.25L5.617 6.75"
      />
    </Icon>
  )
}
