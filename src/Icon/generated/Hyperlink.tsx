import React from 'react'
import { Icon, IconProps } from '../Icon'
export function HyperlinkIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M10.082 9.5A4.47 4.47 0 006.75 8h-1.5a4.5 4.5 0 000 9h1.5a4.474 4.474 0 003.332-1.5M13.918 9.5A4.469 4.469 0 0117.25 8h1.5a4.5 4.5 0 110 9h-1.5a4.472 4.472 0 01-3.332-1.5M6.75 12.499h10.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
