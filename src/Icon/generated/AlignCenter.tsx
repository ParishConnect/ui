import React from 'react'
import { Icon, IconProps } from '../Icon'
export function AlignCenterIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 20.25v3M12 9.75v4.5M12 .75v3"
      />
      <rect
        x={2.25}
        y={14.25}
        width={19.5}
        height={6}
        rx={1}
        ry={1}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <rect
        x={5.25}
        y={3.75}
        width={13.5}
        height={6}
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
