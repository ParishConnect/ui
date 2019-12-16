import React, { ReactNode } from 'react'
import { Pane } from '../Box'
import { Text } from '../Text'
import { Intent, Theme } from '../theme'
import safeInvoke from '../utils/safeInvoke'
import styled from '@emotion/styled'
import { variant } from 'styled-system'
import Color from 'color'

export type MenuItem = Pane & {
  intent?: Intent
  onSelect?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>,
  ) => void
  secondaryText?: ReactNode
  icon?: ReactNode
}

export function MenuItem({
  icon: Icon,
  onClick,
  onSelect = () => {},
  children,
  secondaryText,
  onKeyPress = () => {},
  ...props
}: MenuItem) {
  return (
    <Pane
      height={Icon ? 5 : 4}
      tabIndex={0}
      data-isselectable="true"
      display="flex"
      alignItems="center"
      role="menuitem"
      onKeyPress={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect(e)
        }
        safeInvoke(onKeyPress, e)
      }}
      onClick={e => {
        onSelect(e)
        safeInvoke(onClick, e)
      }}
      css={{
        cursor: 'pointer',
        outline: 'none',
        '&:hover': {
          backgroundColor: (t: Theme) =>
            Color(t.tints.default)
              .lighten(0.05)
              .toString(),
        },
        '&:focus': {
          backgroundColor: (t: Theme) =>
            Color(t.tints.default)
              .lighten(0.04)
              .toString(),
        },
        '&:active': {
          backgroundColor: (t: Theme) =>
            Color(t.tints.default)
              .lighten(0.03)
              .toString(),
        },
      }}
      {...(props as any)}
    >
      {typeof Icon === 'function' ? <Icon color={props.intent} marginX={1.5} /> : Icon}

      <Text color={props.intent} marginLeft={2} marginRight={2} flex={1}>
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

MenuItem.defaultProps = {
  intent: 'text',
}
