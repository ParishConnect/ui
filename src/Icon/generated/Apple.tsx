import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AppleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M17.36 14a4.45 4.45 0 012.12-3.74 4.6 4.6 0 00-3.59-1.95c-1.53-.15-3 .9-3.76.9s-2-.88-3.24-.86a4.81 4.81 0 00-4.07 2.46c-1.73 3-.44 7.46 1.25 9.9.82 1.19 1.81 2.53 3.1 2.48s1.72-.8 3.22-.8 1.93.8 3.24.78 2.19-1.22 3-2.41A10.82 10.82 0 0020 18a4.34 4.34 0 01-2.64-4zM15.31 4.36A5 5 0 0016.48.77a5 5 0 00-3.31 1.7A4.72 4.72 0 0012 6a4.18 4.18 0 003.31-1.64z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
