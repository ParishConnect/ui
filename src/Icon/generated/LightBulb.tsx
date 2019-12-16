import React from 'react'
import { Icon, IconProps } from '../Icon'
export function LightBulbIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 22.5h3M18 12a6 6 0 10-7.5 5.788V19.5h3v-1.712A5.986 5.986 0 0018 12zM12 3V1.5M21 10.5h1.5M1.5 12H3M18.364 17.614l1.061 1.061M4.575 3.825l1.061 1.061M18.364 4.886l1.061-1.061M4.575 18.675l1.061-1.061"
      />
    </Icon>
  )
}
