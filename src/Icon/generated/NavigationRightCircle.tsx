import React from 'react'
import { Icon, IconProps } from '../Icon'
export function NavigationRightCircleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.501 11.997h-9M12.751 8.247l3.75 3.75-3.75 3.75"
      />
      <circle
        cx={12.001}
        cy={11.997}
        r={10.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
