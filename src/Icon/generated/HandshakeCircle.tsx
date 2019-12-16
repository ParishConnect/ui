import React from 'react'
import { Icon, IconProps } from '../Icon'
export function HandshakeCircleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.75 14.004l-4.787.957M14.438 9.531l-2.26.955a1.42 1.42 0 01-1.122-.016 1.478 1.478 0 01-.781-.83 1.525 1.525 0 01.706-1.9l2.259-1.127a1.961 1.961 0 011.594-.094l4.639 1.828"
      />
      <path
        d="M5.2 15h1.6l3.049 2.326a.83.83 0 001.15.09l4.26-3.518a.842.842 0 00.129-1.164l-2.347-2.609M10.736 7.9l-.247-.2a1.787 1.787 0 00-1.725-.221L5.194 9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M1.39 15.75h2.66a1.141 1.141 0 001.2-1.072V9.321a1.141 1.141 0 00-1.2-1.071H1.39M22.61 15.75h-2.66a1.141 1.141 0 01-1.2-1.072V9.321a1.141 1.141 0 011.2-1.071h2.66"
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
