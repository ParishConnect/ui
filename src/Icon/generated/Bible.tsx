import React from 'react'
import { Icon, IconProps } from '../Icon'
export function BibleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M21.263 23.25H5.513A2.25 2.25 0 013.263 21M6.263.75a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25h15.75v-18zM19.763 23.25v-4.5M9.263 8.25h6M12.263 5.25v9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
