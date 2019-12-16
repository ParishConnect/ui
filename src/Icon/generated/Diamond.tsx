import React from 'react'
import { Icon, IconProps } from '../Icon'
export function DiamondIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M19.237 3.225a1.5 1.5 0 00-1.2-.6h-12a1.5 1.5 0 00-1.2.6L1.5 7.676a1.5 1.5 0 00.048 1.86l9.338 11.3a1.5 1.5 0 002.3 0l9.338-11.3a1.5 1.5 0 00.048-1.86zM5.349 2.792l6.688 18.583M18.724 2.792l-6.687 18.583M1.198 8.625h21.673"
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
        d="M7.537 8.625l4.5-6 4.5 6"
      />
    </Icon>
  )
}
