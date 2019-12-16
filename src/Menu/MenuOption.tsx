import { MenuItem } from './MenuItem'
import React from 'react'
import { Pane } from '../Box'
import { Text } from '../Text'
import { CheckIcon } from '../Icon'
import { CheckBoldIcon } from '../Icon/generated/CheckBold'

export type MenuOption = MenuItem & {
  isSelected?: boolean
}

export function MenuOption({ id, onSelect, isSelected, secondaryText, children }: MenuOption) {
  return (
    <Pane
      id={id}
      role="menuitemradio"
      tabIndex={0}
      onClick={onSelect}
      onKeyPress={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect(e)
          e.preventDefault()
        }
      }}
      backgroundColor={isSelected && 'grays.5'}
      css={{ outline: 'none', cursor: 'pointer' }}
      data-isselectable="true"
      aria-checked={isSelected}
      height={5}
      display="flex"
      alignItems="center"
    >
      {isSelected && (
        <CheckBoldIcon
          aria-hidden
          marginLeft={2}
          color={isSelected && 'default'}
          flexShrink={0}
          size={1.5}
        />
      )}
      <Text
        {...(isSelected
          ? { fontWeight: 500, color: 'default', marginLeft: 2 }
          : { marginLeft: 5.5 })}
        marginRight={16}
        flex={1}
      >
        {children}
      </Text>
      {secondaryText && (
        <Text marginRight={2} color="muted">
          {secondaryText}
        </Text>
      )}
    </Pane>
  )
}

MenuOption.defaultProps = {
  isSelected: false,
  onSelect: () => {},
}
