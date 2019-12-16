import React from 'react'
import { Icon, IconProps } from '../Icon'
export function PictureStackIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M18.75 5.25v-.978a2.011 2.011 0 00-2-2.022h-14a2.011 2.011 0 00-2 2.022v9.456a2.011 2.011 0 002 2.022M11.339 21.75l4.439-6.307a1.5 1.5 0 012.357-.128l4.938 5.643M10.875 12.75a.375.375 0 11-.375.375.375.375 0 01.375-.375"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <rect
        x={6}
        y={8.25}
        width={17.25}
        height={13.5}
        rx={1}
        ry={1}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
