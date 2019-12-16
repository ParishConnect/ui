import { get } from '@styled-system/css'
import { majorScale } from './systems/utils'
import { Theme } from './theme'

const defaultBreakpoints = [40, 52, 64].map(n => n + 'em')

const defaultTheme = {
  major: 1,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}

const aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY',
}

const multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height'],
}

const scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'major',
  marginTop: 'major',
  marginRight: 'major',
  marginBottom: 'major',
  marginLeft: 'major',
  marginX: 'major',
  marginY: 'major',
  padding: 'major',
  paddingTop: 'major',
  paddingRight: 'major',
  paddingBottom: 'major',
  paddingLeft: 'major',
  paddingX: 'major',
  paddingY: 'major',
  top: 'major',
  right: 'major',
  bottom: 'major',
  left: 'major',
  gridGap: 'major',
  gridColumnGap: 'major',
  gridRowGap: 'major',
  gap: 'major',
  columnGap: 'major',
  rowGap: 'major',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderStyle: 'borderStyles',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'major',
  minWidth: 'major',
  maxWidth: 'major',
  height: 'major',
  minHeight: 'major',
  maxHeight: 'major',
  flexBasis: 'major',
  size: 'major',
  tint: 'tints',
  // svg
  fill: 'colors',
  stroke: 'colors',
}

const transforms = [
  'top',
  'bottom',
  'left',
  'right',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY',
  'top',
  'right',
  'bottom',
  'left',
  'gridGap',
  'gridColumnGap',
  'gridRowGap',
  'gap',
  'columnGap',
  'rowGap',
  'borderWidth',
  'borderRadius',
  'borderTopRightRadius',
  'borderTopLeftRadius',
  'borderBottomRightRadius',
  'borderBottomLeftRadius',
  'borderTopWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'width',
  'minWidth',
  'maxWidth',
  'height',
  'minHeight',
  'maxHeight',
  'flexBasis',
  'size',
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: majorScale,
  }),
  {},
)

export const responsive = (styles: object) => (theme: object) => {
  const next = {}
  const breakpoints = get(theme, 'breakpoints', defaultBreakpoints)
  const mediaQueries = [
    null,
    ...breakpoints.map((n: string) => `@media screen and (min-width: ${n})`),
  ]

  for (const key in styles) {
    const value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key]

    if (value == null) continue
    if (!Array.isArray(value)) {
      next[key] = value
      continue
    }
    for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      const media = mediaQueries[i]
      if (value[i] == null) continue
      if (!media) {
        next[key] = value[i]
        continue
      }
      next[media] = next[media] || {}
      next[media][key] = value[i]
    }
  }

  return next
}

export const css = (args: object) => (props: { theme?: Theme } = {}) => {
  const theme = { ...defaultTheme, ...(props.theme || props) }
  let result = {}
  const obj = typeof args === 'function' ? args(theme) : args
  const styles = responsive(obj)(theme)

  for (const key in styles) {
    const x = styles[key]
    const val = typeof x === 'function' ? x(theme) : x

    if (key === 'variant') {
      const variant = css(get(theme, val))(theme)
      result = { ...result, ...variant }
      continue
    }

    if (val && typeof val === 'object') {
      result[key] = css(val)(theme)
      continue
    }

    const prop = get(aliases, key, key)
    const scaleName = get(scales, prop)
    const scale = get(theme, scaleName, get(theme, prop, {}))
    const transform = get(transforms, prop, get)
    const value = transform(val, scale, val)

    if (multiples[prop]) {
      const dirs = multiples[prop]

      for (let i = 0; i < dirs.length; i++) {
        result[dirs[i]] = value
      }
    } else {
      result[prop] = value
    }
  }

  return result
}

export default css
