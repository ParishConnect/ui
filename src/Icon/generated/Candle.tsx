import React from 'react'
import { Icon, IconProps } from '../Icon'
export function CandleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M16.5 21.75a1.5 1.5 0 01-1.5 1.5H9a1.5 1.5 0 01-1.5-1.5V12l9-3zM7.5 16.5l9-3M7.5 21l9-3M15 5.25a3 3 0 01-6 0c0-1.657 3-4.5 3-4.5s3 2.843 3 4.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
