import { CSSObject } from '@emotion/core'
import isPropValid from '@emotion/is-prop-valid'
import styled, { StyledTags } from '@emotion/styled'
import * as CSS from 'csstype'
import { isValidMotionProp } from 'framer-motion'
import {
  background,
  BackgroundProps,
  BorderColorProps,
  BorderRadiusProps,
  BorderStyleProps,
  BorderWidthProps,
  color,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  LayoutProps,
  position,
  PositionProps,
  ResponsiveValue,
  shadow,
  ShadowProps,
  SpaceProps,
  TLengthStyledSystem,
  typography,
  TypographyProps,
  ColorProps,
} from 'styled-system'
import { css, Theme, ThemeColor } from '../theme'
import { border, gradient, layout, space, tint } from '../theme/systems'
import componentProps from '../utils/componentProps'
import { LiteralStringReactNodeUnion, ResponsiveLiteralStringUnion } from '../utils/types'
import { HTMLAttributes, DetailedHTMLProps } from 'react'

interface BorderProps<TLength = TLengthStyledSystem>
  extends BorderWidthProps,
    BorderStyleProps,
    BorderColorProps,
    BorderRadiusProps {
  borderTop?: ResponsiveValue<CSS.BorderTopProperty<TLength> | boolean>
  borderRight?: ResponsiveValue<CSS.BorderTopProperty<TLength> | boolean>
  borderBottom?: ResponsiveValue<CSS.BorderTopProperty<TLength> | boolean>
  borderLeft?: ResponsiveValue<CSS.BorderTopProperty<TLength> | boolean>
  border?: ResponsiveValue<CSS.BorderProperty<TLength> | boolean>
  borderX?: ResponsiveValue<CSS.BorderProperty<TLength>>
  borderY?: ResponsiveValue<CSS.BorderProperty<TLength>>
}

export type Box<T = HTMLDivElement> = HTMLAttributes<T> & {
  gradient?: ResponsiveLiteralStringUnion<ThemeColor> | boolean
  tint?: ResponsiveLiteralStringUnion<ThemeColor> | boolean
  as?: LiteralStringReactNodeUnion<keyof StyledTags>
  theme?: Theme
  css?: any
  ref?: React.RefObject<HTMLDivElement>
  [key: string]: any
} & DetailedHTMLProps<HTMLAttributes<T>, T> &
  ColorProps &
  TypographyProps &
  LayoutProps &
  SpaceProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  PositionProps &
  ShadowProps &
  BorderProps

const styledProps = compose(
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

/**
 * The `Box` components provides the foundation for all of the components in this UI Kit
 * @since 1.0
 * @author Evan Hennessy
 */
export const Box = styled('div', {
  shouldForwardProp: (prop: string) =>
    isValidMotionProp(prop) ||
    (isPropValid(prop) && !styledProps.propNames.includes(prop) && !componentProps.includes(prop)),
})<Box>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
    margin: 0,
  },
  styledProps,
  // Allow overrides in css prop
  (props: Box) => css(props.css as CSSObject),
)
