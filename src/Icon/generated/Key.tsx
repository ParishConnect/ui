import React from 'react'
import { Icon, IconProps } from '../Icon'
export function KeyIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.818 14.517l2.545-2.545 1.752.47a1.572 1.572 0 001.924-1.924l-.47-1.752.784-.784 1.752.47a1.571 1.571 0 001.924-1.924l-.469-1.752a2.356 2.356 0 00-3.333-3.332l-9.741 9.741a6.283 6.283 0 103.332 3.332z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={5.922}
        cy={18.081}
        r={1.571}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
