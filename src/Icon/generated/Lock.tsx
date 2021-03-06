import React from 'react'
import { Icon, IconProps } from '../Icon'
export function LockIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={3.75}
        y={9.75}
        width={16.5}
        height={13.5}
        rx={1.5}
        ry={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M6.75 9.75V6a5.25 5.25 0 0110.5 0v3.75M12 15v3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
