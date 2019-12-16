import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { variant, ResponsiveValue } from 'styled-system'
import { Box } from '../Box'
import { Text } from '../Text/Text'
import { Theme } from '../theme'
import { Spinner } from '../Spinner'
import { Intent, ControlAppearance } from '../theme/theme'
import { useTheme } from '@emotion/core'

export type ButtonProps = Box & {
  appearance?: ControlAppearance
  /**
   * Adds an icon before the `Button` content
   * @since 1.0
   */
  iconBefore?: ReactNode
  /**
   * Adds an icon after the `Button` content
   * @since 1.0
   */
  iconAfter?: ReactNode
  /**
   * Button content becomes this icon only.
   * If you want text, use `iconBefore` or `iconAfter`
   * @since 1.0
   */
  icon?: ReactNode
  intent?: Intent
  /**
   * Disables button and adds a spinner as iconBefore
   * @since 1.0
   */
  loading?: boolean
  iconSize?: ResponsiveValue<number | string>
}

const ButtonFactory = styled(Text)<ButtonProps>(
  props => ({
    WebkitFontSmoothing: 'antialiased',
    WebkitAppearance: 'none',
    verticalAlign: 'middle',
    textDecoration: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    '&::-moz-focus-inner ': {
      border: 0,
    },
    fontSize: props.fontSize as any,
    fontWeight: 500,
    lineHeight: 0,
    transitionDuration: '225ms',
    transitionProperty: 'transform, background-color',
    '&:active': {
      transform: 'scale(0.98)',
    },
  }),
  ({ intent }) =>
    variant({
      prop: 'appearance',
      scale: 'buttons',
      variants: {
        primary: {
          color: 'white',
          backgroundColor: 'default',
          backgroundImage: (t: Theme) =>
            t.createGradient(...(t.gradients[intent] as [string, string])),
          boxShadow: (t: Theme) =>
            `inset 0 0 0 0px ${t.getColorAlpha({
              color: t.colors[intent],
            })}, 0 1px 6px -0.5px ${t.getColorAlpha({ color: t.colors[intent] })}`,
          transition: 'box-shadow 125ms, background-image 125ms',
          '&:hover': {
            boxShadow: (t: Theme) =>
              `inset 0 0 0 1px ${t.getColorAlpha({
                color: t.colors[intent],
              })}, 0 2px 5px ${t.getColorAlpha({ color: t.colors[intent] })}`,
          },
          '&:active': {
            background: (t: Theme) => t.colors[intent],
            boxShadow: (t: Theme) =>
              `inset 0 0 0 1px ${t.getColorAlpha({
                color: t.colors[intent],
              })}, 0 1px 3px ${t.getColorAlpha({ color: t.colors[intent] })}`,
          },
          '&:focus': {
            boxShadow: (t: Theme) => `0 0 0 2px ${t.getColorAlpha({ color: t.colors[intent] })}`,
          },
        },
        minimal: {
          color: (t: Theme) => t.colors[intent],
          background: 'transparent',
          '&:hover': {
            backgroundColor: 'grays.5',
          },
          '&:active, &:focus': {
            boxShadow: (t: Theme) => `0 0 0 2px ${t.getColorAlpha({ color: t.colors[intent] })}`,
          },
        },
        overlay: {
          color: 'white',
          backdropFilter: 'blur(20px) saturate(180%)',
          backgroundColor: (t: Theme) => t.getColorAlpha({ alpha: 0.8, color: t.colors.grays[1] }),
          '&:hover': {
            backgroundColor: (t: Theme) =>
              t.getColorAlpha({ alpha: 0.8, color: t.colors.grays[0] }),
          },
          '&:active, &:focus': {
            boxShadow: (t: Theme) => `0 0 0 2px ${t.getColorAlpha({ color: t.colors[intent] })}`,
          },
        },
        default: {
          color: (t: Theme) => t.colors[intent],
          backgroundColor: 'grays.5',
          '&:hover': {
            backgroundColor: (t: Theme) => t.tints[intent],
          },
          '&:focus': {
            boxShadow: (t: Theme) => `0 0 0 2px ${t.getColorAlpha({ color: t.colors[intent] })}`,
          },
        },
      },
    }),
  variant({
    prop: 'rounded',
    variants: {
      true: {
        borderRadius: 5000,
      },
    },
  }),
  variant({
    prop: 'disabled',
    variants: {
      true: {
        color: 'gray',
        cursor: 'not-allowed',
        backgroundColor: 'grays.4',
        '&:hover': {
          backgroundColor: 'grays.4',
        },
        '&:focus': {
          boxShadow: (t: Theme) => `0 0 0 2px ${t.colors.grays[3]}`,
        },
      },
    },
  }),
  variant({
    prop: 'loading',
    variants: {
      true: {
        '&': {
          pointerEvents: 'none',
          color: 'grays.1',
          backgroundColor: 'grays.5',
          backgroundImage: 'none',
          boxShadow: 'none',
          cursor: 'progress',
        },
      },
    },
  }),
)

/**
 * The `Button` component is the most common button component.
 * It contains a label and optional icons before or after the label.
 * @since 1.0
 * @author Evan Hennessy
 */
export function Button({
  children,
  fontSize,
  height,
  iconAfter: IconAfter,
  iconBefore: IconBefore,
  icon: Icon,
  paddingLeft,
  paddingRight,
  loading,
  iconSize: _iconSize,
  ...rest
}: ButtonProps) {
  const theme: Theme = useTheme()

  let iconSize = theme.safeLoop(height, h => theme.getIconSizeForButton(h))

  if (loading) {
    IconBefore = Spinner
    iconSize = theme.safeLoop(height, h => theme.getIconSizeForButton(h * 1.5))
    children = 'Loading'
  }

  if (Icon) {
    iconSize = _iconSize || theme.safeLoop(height, h => theme.getIconSizeForButton(h * 1.5))
  }

  const props = {
    paddingLeft: Icon ? 0 : Math.floor(theme.safeLoop(height, h => h / 2)),
    paddingRight: Icon ? 0 : Math.floor(theme.safeLoop(height, h => h / 2)),
    ...rest,
    height,
    fontSize: theme.safeLoop(height, h => theme.getTextSizeForControlHeight(h)),
  }

  return (
    <ButtonFactory loading={loading} {...(props as any)}>
      {typeof IconBefore === 'function' ? (
        <IconBefore size={iconSize} marginRight={1} />
      ) : (
        IconBefore || null
      )}
      {Icon ? typeof Icon === 'function' ? <Icon size={iconSize} marginX={1.5} /> : Icon : children}
      {typeof IconAfter === 'function' ? (
        <IconAfter size={iconSize} marginLeft={1} />
      ) : (
        IconAfter || null
      )}
    </ButtonFactory>
  )
}

Button.defaultProps = {
  as: 'button',
  appearance: 'default',
  fontFamily: 'ui',
  height: 4,
  paddingY: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  intent: 'default',
  disabled: false,
  loading: false,
}
