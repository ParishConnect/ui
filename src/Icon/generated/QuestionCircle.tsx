import React from 'react'
import { Icon, IconProps } from '../Icon'
export function QuestionCircleIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M9 9a3 3 0 114 2.829 1.5 1.5 0 00-1 1.415v1.006M12 17.25a.375.375 0 10.375.375.375.375 0 00-.375-.375h0"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={12}
        cy={12}
        r={11.25}
        strokeMiterlimit={10}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </Icon>
  )
}
