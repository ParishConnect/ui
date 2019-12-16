import { compose, system } from '@styled-system/core'
import { majorScale } from './utils'

const defaults = {
  major: 8,
}

type Config = {
  [key: string]: {
    [key: string]: {
      property?: string
      properties?: string[]
      scale: string
      transform: (n: any, scale: number) => any
      defaultScale: any
    }
  }
}

const configs: Config = {}
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
}
configs.margin.m = configs.margin.margin
configs.margin.mt = configs.margin.marginTop
configs.margin.mr = configs.margin.marginRight
configs.margin.mb = configs.margin.marginBottom
configs.margin.ml = configs.margin.marginLeft
configs.margin.mx = configs.margin.marginX
configs.margin.my = configs.margin.marginY

configs.padding = {
  padding: {
    property: 'padding',
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'major',
    transform: majorScale,
    defaultScale: defaults.major,
  },
}
configs.padding.p = configs.padding.padding
configs.padding.pt = configs.padding.paddingTop
configs.padding.pr = configs.padding.paddingRight
configs.padding.pb = configs.padding.paddingBottom
configs.padding.pl = configs.padding.paddingLeft
configs.padding.px = configs.padding.paddingX
configs.padding.py = configs.padding.paddingY

export const margin = system(configs.margin)
export const padding = system(configs.padding)
export const space = compose(margin, padding)

export default space
