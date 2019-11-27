import styled, { StyledTags, CSSObject } from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  SpaceProps,
  typography,
  TypographyProps,
  space,
  layout,
} from 'styled-system'
import { Theme, ThemeColor } from '../theme'
import { gradient, tint } from '../theme/systems'
import { LiteralStringUnion } from '../utils/types'

export type BoxProps = {
  gradient?: LiteralStringUnion<ThemeColor> | boolean
  tint?: LiteralStringUnion<ThemeColor> | boolean
  as?: keyof StyledTags<Theme>
  theme?: Theme
  css?: CSSObject
  [key: string]: any
} & ColorProps &
  SpaceProps &
  LayoutProps &
  TypographyProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps

export const Box = styled('div', { shouldForwardProp })<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
    margin: 0,
  },
  compose(
    space,
    color,
    layout,
    typography,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
    gradient,
    tint,
  ),
  // Allow overrides in css prop
  props => props.css,
)
