import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AlertTriangleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 18.75a.375.375 0 10.375.375.375.375 0 00-.375-.375h0"
        strokeLinejoin="round"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <path
        strokeMiterlimit={10}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 15.75v-7.5"
      />
      <path
        d="M13.621 1.76a1.806 1.806 0 00-3.242 0L.906 21.058a1.521 1.521 0 001.366 2.192h19.456a1.521 1.521 0 001.366-2.192z"
        strokeLinejoin="round"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
