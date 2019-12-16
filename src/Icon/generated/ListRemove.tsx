import React from 'react'
import { Icon, IconProps } from '../Icon'
export function ListRemoveIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.25 2.123h15M5.25 8.123h15M5.25 14.123h3M1.125 1.748a.375.375 0 11-.375.375.375.375 0 01.375-.375M1.125 7.748a.375.375 0 11-.375.375.375.375 0 01.375-.375M1.125 13.748a.375.375 0 11-.375.375.375.375 0 01.375-.375"
      />
      <circle
        cx={17.25}
        cy={17.123}
        r={6}
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
        d="M14.25 17.123h6"
      />
    </Icon>
  )
}
