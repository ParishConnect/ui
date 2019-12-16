import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AlertCircleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 16.5a.375.375 0 10.375.375A.375.375 0 0012 16.5h0"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        strokeMiterlimit={10}
        strokeLinecap="round"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 13.5V5.25"
      />
      <circle
        cx={12}
        cy={12}
        r={11.25}
        strokeMiterlimit={10}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
