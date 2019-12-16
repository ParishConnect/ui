import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ButtonPreviousIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.988 15.658a.855.855 0 01-1.238-.765V9.1a.855.855 0 011.238-.765l5.789 2.894a.856.856 0 010 1.531z"
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
        d="M17.25 8.248v7.5"
      />
    </Icon>
  )
}
