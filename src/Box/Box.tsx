import styled, { StyledTags } from '@emotion/styled'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'
import { ThemeColor, Theme } from '../theme'
import { gradient, tint } from '../theme/systems'
import { LiteralStringUnion } from '../utils/types'
import shouldForwardProp from '@styled-system/should-forward-prop'

export type BoxProps = {
  gradient?: LiteralStringUnion<ThemeColor> | boolean
  tint?: LiteralStringUnion<ThemeColor> | boolean
  as?: keyof StyledTags<Theme>
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

export const Box = styled<'div', BoxProps>('div', { shouldForwardProp })(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
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
)
