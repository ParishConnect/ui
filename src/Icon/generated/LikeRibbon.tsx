import React from 'react'
import { Icon, IconProps } from '../Icon'
export function LikeRibbonIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.807 13.042L.75 18l3.75.75 1.5 4.5 3.944-6.258M19.193 13.042L23.25 18l-3.75.75-1.5 4.5-3.944-6.258"
      />
      <circle
        cx={12}
        cy={9}
        r={8.25}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.5 12.15v-4.2h.6a3 3 0 003-3 1.2 1.2 0 011.2-1.2 1.629 1.629 0 011.629 1.629v.771a.6.6 0 00.6.6h.171a1.8 1.8 0 011.791 1.979l-.186 1.86a2.4 2.4 0 01-2.388 2.161h-2.481a2.4 2.4 0 01-.659-.092l-1.454-.416a2.4 2.4 0 00-.659-.092H7.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
