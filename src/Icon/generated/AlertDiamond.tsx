import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AlertDiamondIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 16.5a.375.375 0 10.375.375A.375.375 0 0012 16.5h0"
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
        d="M12 13.5V6"
      />
      <path
        d="M1.28 13.281a1.812 1.812 0 010-2.561l9.44-9.439a1.808 1.808 0 012.56 0l9.44 9.439a1.812 1.812 0 010 2.561l-9.44 9.439a1.811 1.811 0 01-2.56 0z"
        strokeLinejoin="round"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
