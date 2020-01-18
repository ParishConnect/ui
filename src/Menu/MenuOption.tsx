import { motion } from 'framer-motion'
import React from 'react'
import { Pane } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { MenuItem } from './MenuItem'

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
      backgroundColor={isSelected ? 'grays.5' : 'transparent'}
      css={{
        outline: 'none',
        cursor: 'pointer',
      }}
      data-isselectable="true"
      aria-checked={isSelected}
      height={5}
      display="flex"
      alignItems="center"
    >
      {isSelected && (
        <Icon
          as={motion.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-6 -6 36 36"
          aria-hidden
          marginLeft={2}
          color={isSelected && 'default'}
          flexShrink={0}
          size={1.5}
        >
          <motion.path
            d="M23.25.749L8.158 22.308a2.2 2.2 0 01-3.569.059L.75 17.249"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 0.225 }}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={5}
          />
        </Icon>
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
