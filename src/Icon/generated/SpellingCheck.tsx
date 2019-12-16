import React from 'react'
import { Icon, IconProps } from '../Icon'
export function SpellingCheckIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 9.748h9M2.25 15.748v-10.5a4.5 4.5 0 019 0v10.5M9.22 20.028l3 3a.749.749 0 001.06 0l8.47-8.47v-.086"
      />
    </Icon>
  )
}
