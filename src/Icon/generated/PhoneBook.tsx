import React from 'react'
import { Icon, IconProps } from '../Icon'
export function PhoneBookIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x={2.25}
        y={0.763}
        width={18}
        height={22.5}
        rx={1.5}
        ry={1.5}
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
        d="M23.25 3.013v3M23.25 9.013v3M23.25 15.013v3M11.972 17.148h.005a2.591 2.591 0 003.2.526l.447-.251a.864.864 0 00.328-1.176l-1.06-1.877a.864.864 0 00-1.176-.328h0a.863.863 0 01-1.176-.329L10.845 10.7a.864.864 0 01.328-1.176h0A.864.864 0 0011.5 8.35l-1.057-1.881a.864.864 0 00-1.176-.329l-.447.252A2.591 2.591 0 007.612 9.4v.006a23.393 23.393 0 004.36 7.742zM.75 5.263h3M.75 14.263h3M.75 9.763h3M.75 18.763h3"
      />
    </Icon>
  )
}
