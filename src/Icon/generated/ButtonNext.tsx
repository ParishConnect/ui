import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ButtonNextIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M16.012 15.658a.855.855 0 001.238-.765V9.1a.855.855 0 00-1.238-.765l-5.789 2.894a.856.856 0 000 1.531z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={12}
        cy={11.998}
        r={11.25}
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
        d="M6.75 8.248v7.5"
      />
    </Icon>
  )
}
