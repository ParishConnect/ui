import React from 'react'
import { Icon, IconProps } from '../Icon'
export function WifiSignalIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={12}
        cy={10.319}
        r={2.25}
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
        d="M12 12.569v9.684M19.286 18.89a11.249 11.249 0 000-17.143M16.371 15.462a6.749 6.749 0 000-10.286M4.714 18.89a11.249 11.249 0 010-17.143M7.629 15.462a6.749 6.749 0 010-10.286"
      />
    </Icon>
  )
}
