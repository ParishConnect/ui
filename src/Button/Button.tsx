import styled from '@emotion/styled'
import { variant } from 'styled-system'
import { BoxProps } from '../Box'
import { Text } from '../Text/Text'
import { Theme } from '../theme'

export type ButtonProps = {
  appearance?: 'primary' | 'default' | 'minimal' | 'overlay'
} & BoxProps

export const Button = styled<'button', ButtonProps>(Text)(
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
    paddingRight: props.paddingRight || Math.round(props.height / 2),
    paddingLeft: props.paddingRight || Math.round(props.height / 2),
    fontSize: props.theme.getTextSizeForControlHeight(props.height),
  }),
  variant({
    prop: 'appearance',
    scale: 'buttons',
    variants: {
      primary: {
        color: 'white',
        backgroundColor: 'blue',
        backgroundImage: (t: Theme) =>
          t.createGradient(...(t.gradients.default as [string, string])),
        borderRadius: 0,
        boxShadow: (t: Theme) =>
          `inset 0 0 0 0px ${t.getColorAlpha()}, 0 1px 6px -0.5px ${t.getColorAlpha()}`,
        transition: 'box-shadow 125ms, background-image 125ms',
        '&:hover': {
          boxShadow: (t: Theme) =>
            `inset 0 0 0 1px ${t.getColorAlpha()}, 0 2px 5px ${t.getColorAlpha()}`,
        },
      },
    },
  }),
)

Button.defaultProps = {
  as: 'button',
  margin: 0,
  fontFamily: 'ui',
  height: 32,
  paddingY: 0,
}
