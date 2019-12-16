import React from 'react'
import { Icon, IconProps } from '../Icon'
export function LikeCircleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={12}
        cy={12}
        r={11.25}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.5 16.4a3.576 3.576 0 01.909.13l2.12.588a3.581 3.581 0 00.961.131h2.849a3.464 3.464 0 003.483-3.062L18 11.3a2.561 2.561 0 00-1.985-2.6l-.849-.181a.854.854 0 01-.663-.824V5.772a1.313 1.313 0 00-2.625 0v.88A4.314 4.314 0 017.5 10.9zM5.8 9.75h1.7v7.5H5.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
