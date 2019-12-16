import memoize from '@emotion/memoize'
import isPropValid from '@emotion/is-prop-valid'
import {
  compose,
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle,
} from 'styled-system'
import { isValidMotionProp } from 'framer-motion'

const all = compose(
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle,
)

export const props = [...all.propNames, 'tint', 'elevation', 'activeElevation', 'hoverElevation']

export const shouldForwardProp = (prop: string) => isPropValid(prop) && isValidMotionProp(prop)
