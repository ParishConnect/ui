import React from 'react'
import { Icon, IconProps } from '../Icon'
export function PhoneIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M15.04 22.39l.012.007a5.533 5.533 0 006.884-.755l.774-.774a1.846 1.846 0 000-2.609L19.449 15a1.846 1.846 0 00-2.609 0h0a1.843 1.843 0 01-2.608 0L9.014 9.781a1.846 1.846 0 010-2.609h0a1.843 1.843 0 000-2.608L5.754 1.3a1.846 1.846 0 00-2.609 0l-.774.774a5.535 5.535 0 00-.756 6.884l.008.012A49.935 49.935 0 0015.04 22.39z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
