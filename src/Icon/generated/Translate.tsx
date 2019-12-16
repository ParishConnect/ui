import React from 'react'
import { Icon, IconProps } from '../Icon'
export function TranslateIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.652.748l-3.75 2.25 2.25 3.75M23.25 8.187a6.749 6.749 0 00-6.884-4.417M4.348 23.248l3.75-2.25-2.25-3.75M.75 15.808a6.749 6.749 0 006.884 4.417"
      />
      <rect
        x={0.75}
        y={0.748}
        width={12}
        height={12}
        rx={1.5}
        ry={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.75 11.248h6a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.75 20.248v-4.5a1.5 1.5 0 013 0v4.5M15.75 18.748h3M6.75 3.748v1.5M3.75 5.248h6M8.25 5.248s-1.5 4.5-4.5 4.5M6.749 8.014a3.933 3.933 0 003 1.734"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
