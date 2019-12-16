import React from 'react'
import { Icon, IconProps } from '../Icon'
export function StopwatchIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={12}
        cy={14.25}
        r={9}
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
        d="M18 7.5l1.875-1.875M19.5 5.25l.75.75M12 5.25V.75M14.25.75h-4.5M12 15l-3.75-4.151"
      />
    </Icon>
  )
}
