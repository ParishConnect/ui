import React from 'react'
import { Icon, IconProps } from '../Icon'
export function LegalScaleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 23.25v-18M7.5 23.25h9M13.5 3.75h5.25M5.25 3.75h5.25"
      />
      <circle
        cx={12}
        cy={3.75}
        r={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M9 14.25a3.75 3.75 0 01-7.5 0zM5.25 3.75l-3.75 7.5M5.25 3.75L9 11.25M22.5 14.25a3.75 3.75 0 01-7.5 0zM18.75 3.75L15 11.25M18.75 3.75l3.75 7.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
