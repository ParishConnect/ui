import { ReactNode } from 'react'
import { Pane } from '../Box'
import React from 'react'
import { Heading } from '../Text'

export type MenuGroup = Pane & {
  title?: string
  children: ReactNode
}

export function MenuGroup({ title, children, ...props }: MenuGroup) {
  return (
    <Pane paddingY={1} {...(props as any)}>
      {title && (
        <Heading level={100} marginX={2} marginY={1}>
          {title}
        </Heading>
      )}
      {children}
    </Pane>
  )
}
