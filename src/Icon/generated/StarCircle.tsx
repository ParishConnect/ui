import React from 'react'
import { Icon, IconProps } from '../Icon'
export function StarCircleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.593 6.8l1.4 2.95h2.377a.651.651 0 01.469 1.114l-2.187 1.946 1.209 2.778a.658.658 0 01-.938.823L12 14.767l-2.923 1.644a.658.658 0 01-.938-.823l1.209-2.778-2.183-1.946a.651.651 0 01.469-1.114h2.377l1.4-2.95a.665.665 0 011.182 0z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
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
    </Icon>
  )
}
