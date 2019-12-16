import React from 'react'
import { Pane } from '../Box'
import { Heading } from '../Text'
import { MenuOption } from './MenuOption'

export type MenuOptionsGroup = Pane & {
  title?: string
  selected?: any
  onChange?: (value: string | number) => void
  options?: { label: string; value: string | number }[]
}

export function MenuOptionsGroup({
  title,
  options,
  selected,
  onChange,
  ...props
}: MenuOptionsGroup) {
  return (
    <Pane paddingY={1} {...(props as any)}>
      {title && (
        <Heading level={100} marginLeft={5.5} marginRight={2} marginY={1}>
          {title}
        </Heading>
      )}
      <Pane>
        {options.map(option => {
          return (
            <MenuOption
              key={option.value}
              isSelected={option.value === selected}
              onSelect={() => onChange(option.value)}
            >
              {option.label}
            </MenuOption>
          )
        })}
      </Pane>
    </Pane>
  )
}
