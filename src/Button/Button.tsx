import styled from '@emotion/styled'
import React from 'react'
import { variant } from 'styled-system'
import { BoxProps } from '../Box'
import { Text } from '../Text/Text'
import { Theme, useTheme } from '../theme'

export type ButtonProps = BoxProps & {
  appearance?: 'primary' | 'default' | 'minimal' | 'overlay'
  iconBefore?: any
  iconAfter?: any
  intent?: string
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
    fontWeight: 500,
    lineHeight: 0,
    transition: 'transform 225ms',
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
          backgroundColor: 'blue',
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
            backgroundColor: (t: Theme) => t.colors.grays[4],
          },
          '&:active, &:focus': {
            boxShadow: (t: Theme) => `0 0 0 2px ${t.getColorAlpha({ color: t.colors[intent] })}`,
          },
          '&:active': {
            backgroundColor: (t: Theme) => t.colors.grays[3],
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
          backgroundColor: (t: Theme) => t.colors.grays[5],
          '&:hover': {
            backgroundColor: (t: Theme) => t.colors.grays[4],
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
)

export function Button({
  children,
  fontSize,
  height,
  iconAfter: IconAfter,
  iconBefore: IconBefore,
  paddingLeft,
  paddingRight,
  ...rest
}: ButtonProps) {
  const theme = useTheme()

  const iconSize = theme.safeLoop(height, h => theme.getIconSizeForButton(h))

  const props = {
    paddingLeft: Math.floor(theme.safeLoop(height, h => h / 2)),
    paddingRight: Math.floor(theme.safeLoop(height, h => h / 2)),
    ...rest,
    height,
    fontSize: theme.safeLoop(height, h => theme.getTextSizeForControlHeight(h)),
  }

  return (
    <ButtonFactory {...(props as any)}>
      {typeof IconBefore === 'function' ? (
        <IconBefore size={iconSize} marginRight={1} />
      ) : (
        IconBefore || null
      )}
      {children}
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
  borderRadius: 0,
  intent: 'default',
}
