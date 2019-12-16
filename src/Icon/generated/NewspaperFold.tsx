import React from 'react'
import { Icon, IconProps } from '../Icon'
export function NewspaperFoldIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M23.25 6v14.25a2.25 2.25 0 01-4.5 0V3a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 00.75 3v17.25A2.25 2.25 0 003 22.5h18M4.5 15H15M4.5 18h6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <rect
        x={4.5}
        y={5.25}
        width={10.5}
        height={6}
        rx={0.75}
        ry={0.75}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
