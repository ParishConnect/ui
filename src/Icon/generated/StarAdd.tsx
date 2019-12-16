import React from 'react'
import { Icon, IconProps } from '../Icon'
export function StarAddIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle
        cx={17.25}
        cy={17.25}
        r={6}
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
        d="M17.25 14.25v6M14.25 17.25h6M22.732 10.112l.278-.275a.805.805 0 00-.5-1.374l-6.44-.638L12.729 1.2a.819.819 0 00-1.458 0L7.925 7.825l-6.44.638a.805.805 0 00-.5 1.374l5.3 5.253-1.956 7.138a.813.813 0 001.151.935l3.737-1.851"
      />
    </Icon>
  )
}
