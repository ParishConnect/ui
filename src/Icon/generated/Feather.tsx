import React from 'react'
import { Icon, IconProps } from '../Icon'
export function FeatherIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.554 2.446L.75 23.25M15.925 16.264l-3.583-.512M18.995 13.193l-3.582-.512M5.061 10.75A4.346 4.346 0 003.8 14.11l.381 5.71 5.71.381a4.346 4.346 0 003.36-1.262l8.3-8.3a5.79 5.79 0 10-8.188-8.188z"
      />
    </Icon>
  )
}
