import React from 'react'
import { Icon, IconProps } from '../Icon'
export function UserKeyIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={7.5}
        cy={4.875}
        r={4.125}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M12.21 12.426A6.742 6.742 0 00.75 17.25M15.575 18.925a.375.375 0 11-.531 0 .375.375 0 01.531 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M19.086 17.71l3.688-3.688a1.624 1.624 0 10-2.3-2.3l-3.684 3.691a4.061 4.061 0 102.3 2.3z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
