import tinycolor from 'tinycolor2'
import { createGradient } from './utils'
import { ResponsiveValue, Theme as StyledTheme, getPx } from 'styled-system'
import { ReactText } from 'react'

/**
 * LIGHT
 * These properties are specific to light mode
 */

const light = {
  colors: {
    blue: 'rgb(0,122,255)',
    green: 'rgb(52,199,89)',
    purple: 'rgb(88,86,214)',
    orange: 'rgb(255,149,0)',
    red: 'rgb(255,59,48)',
    teal: 'rgb(90,200,250)',
    yellow: 'rgb(255,204,0)',
    text: 'rgb(51,51,51)',
    background: 'rgb(255,255,255)',
    gray: 'rgb(142,142,147)',
    grays: [
      'rgb(44,44,46)',
      'rgb(72,72,74)',
      'rgb(142,142,147)',
      'rgb(174,174,178)',
      'rgb(210,210,214)',
      'rgb(235,235,240)',
    ],
  },
  tints: {
    blue: 'rgb(219, 236, 255)',
    green: 'rgb(222, 249, 228)',
    purple: 'rgb(207, 206, 247)',
    orange: 'rgb(255, 240, 219)',
    red: 'rgb(255, 204, 201)',
    teal: 'rgb(228, 246, 255)',
    yellow: 'rgb(255, 248, 219)',
  },
  gradients: {
    blue: ['rgb(0,122,255)', 'rgb(51, 183, 255)'],
    green: ['rgb(52,199,89)', 'rgb(80, 222, 175)'],
    purple: ['rgb(88,86,214)', 'rgb(149, 119, 232)'],
    orange: ['rgb(255,149,0)', 'rgb(255, 198, 26)'],
    red: ['rgb(255,59,48)', 'rgb(255, 73, 112)'],
    teal: ['rgb(90,200,250)', 'rgb(59, 255, 218)'],
    yellow: ['rgb(255,204,0)', 'rgb(242, 255, 0)'],
    gray: ['rgb(142,142,147)', 'rgb(165, 160, 180)'],
  },
  shadows: [
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  ],
}

/**
 * DARK
 * These properties are specific to dark mode
 */
const dark = {
  ...light,
  colors: {
    background: 'rgb(34, 34, 34)',
    blue: 'rgb(10,132,255)',
    green: 'rgb(48,209,88)',
    purple: 'rgb(94,92,230)',
    orange: 'rgb(255,159,10)',
    red: 'rgb(255,69,58)',
    teal: 'rgb(100,210,255)',
    yellow: 'rgb(255,214,10)',
    text: 'rgb(229,229,234)',
    gray: 'rgb(142,142,147)',
    grays: [
      'rgb(142,142,147)',
      'rgb(99,99,102)',
      'rgb(72,72,74)',
      'rgb(58,58,60)',
      'rgb(44,44,46)',
      'rgb(28,28,30)',
    ],
  },
  gradients: {
    blue: ['hsl(220, 80%, 37%)', 'rgb(10,132,255)'],
    green: ['hsl(150, 74%, 35%)', 'rgb(48,209,88)'],
    purple: ['hsl(260, 83%, 33%)', 'rgb(94,92,230)'],
    orange: ['hsl(26, 100%, 38%)', 'rgb(255,159,10)'],
    red: ['hsl(345, 100%, 36%)', 'rgb(255,69,58)'],
    teal: ['hsl(175, 100%, 36%)', 'rgb(100,210,255)'],
    yellow: ['hsl(37, 100%, 39%)', 'rgb(255,214,10)'],
    gray: ['hsl(220, 10%, 30%)', 'rgb(142,142,147)'],
  },
  tints: {
    blue: 'rgb(45, 64, 83)',
    green: 'rgb(48, 80, 53)',
    purple: 'rgb(48, 48, 80)',
    orange: 'rgb(80, 64, 48)',
    red: 'rgb(96, 61, 57)',
    teal: 'rgb(63, 91, 105)',
    yellow: 'rgb(116, 105, 62)',
  },
  shadows: [
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  ],
}

export type ThemeColor = 'blue' | 'red' | 'purple' | 'gray' | 'orange' | 'yellow' | 'teal' | 'green'
export type ColorMode = 'dark' | 'light'
export type ThemeColors = Record<ThemeColor, ResponsiveValue<string>> & {
  grays: ResponsiveValue<string[]>
  base?: ResponsiveValue<string>
  default?: ResponsiveValue<string>
  warning?: ResponsiveValue<string>
  success?: ResponsiveValue<string>
  danger?: ResponsiveValue<string>
}
export type ThemeGradients = Record<ThemeColor, [string, string]> & {
  default?: [string, string]
  warning?: [string, string]
  success?: [string, string]
  danger?: [string, string]
}
export type ThemeTints = Omit<Record<ThemeColor, string>, 'gray'> & { default?: string[] }
export type Intent = 'default' | 'warning' | 'success' | 'danger'

interface ThemeConstructor {
  mode?: ColorMode
  color?: ThemeColor
}

export class Theme implements StyledTheme {
  mode: ColorMode = 'light'
  color: ThemeColor = 'blue'

  modes = {
    light,
    dark,
  }

  private scale = Array.from({ length: 250 }, (v, k) => k * 8)

  safeLoop = (items: ResponsiveValue<any>, callback: (item: ResponsiveValue<any>) => any) =>
    Array.isArray(items) ? items.map(item => callback(item)) : callback(items)

  colors: ThemeColors = this.modes[this.mode].colors
  gradients: ThemeGradients = this.modes[this.mode].gradients as ThemeGradients
  tints: ThemeTints = this.modes[this.mode].tints
  shadows = this.modes[this.mode].shadows
  intents = ['default', 'warning', 'success', 'danger']

  space = this.scale
  sizes = this.scale

  fontSizes = [10, 12, 14, 16, 20, 24]

  fontWeights = [400, 500, 600]

  lineHeights = ['14px', '16px', '20px', '24px']

  radii = [6, 8, 12, 14]

  fonts = {
    display: `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    ui: `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`,
  }

  constructor(options?: ThemeConstructor) {
    this.mode = options?.mode ?? 'light'
    this.color = options?.color ?? 'blue'

    this.colors = this.modes[this.mode].colors
    this.colors.base = this.colors[this.color]
    this.colors.default = this.colors[this.color]
    this.colors.warning = this.gradients.orange[0]
    this.colors.success = this.gradients.green[0]
    this.colors.danger = this.gradients.red[0]

    this.gradients = this.modes[this.mode].gradients as ThemeGradients
    this.gradients.default = this.gradients[this.color] as [string, string]
    this.gradients.warning = this.gradients.orange as [string, string]
    this.gradients.success = this.gradients.green as [string, string]
    this.gradients.danger = this.gradients.red as [string, string]
    this.tints = this.modes[this.mode].tints
    this.tints.default = this.tints[this.color]

    this.shadows = this.modes[this.mode].shadows
  }

  /**
   * Utility function that takes a color and returns it with an alpha channel.
   * Sensible defaults are preset
   *
   * @param alpha - default 0.4
   * @param color - default Theme.colors.base
   * @since 1.0
   */
  public getColorAlpha = ({ alpha = 0.4, color = this.colors.base }) => {
    return this.safeLoop(color, color =>
      tinycolor(color)
        .setAlpha(alpha)
        .toString(),
    )
  }

  public getTextColor = (intent: Intent = 'default') => {
    return this.colors[intent]
  }

  createGradient = createGradient

  /**
   * Utility function that applies theme's major scale against a number
   * @returns x * 8
   * @since 1.0
   */
  public majorScale = (x: number) => this.safeLoop(x, x => x * 8)
  /**
   * Utility function that applies theme's minor scale against a number
   * @returns x * 4
   * @since 1.0
   */
  public minorScale = (x: number) => this.safeLoop(x, x => x * 4)

  /**
   * Utility function that returns a control height appropriate for the given control height
   * @since 1.0
   */
  public getTextSizeForControlHeight = (height?: number): ResponsiveValue<ReactText> => {
    if (height) {
      height = this.majorScale(height)
      if (height <= 24) return this.fontSizes[1]
      if (height <= 28) return this.fontSizes[1]
      if (height <= 32) return this.fontSizes[1]
      if (height <= 36) return this.fontSizes[2]
      if (height <= 40) return this.fontSizes[2]
      if (height <= 48) return this.fontSizes[3]
      if (height <= 56) return this.fontSizes[5]
      return this.fontSizes[5]
    }
    return this.fontSizes[2]
  }

  public getIconSizeForButton = (height?: number): string => {
    if (height) {
      height = this.majorScale(height)
      if (height <= 28) return `${this.fontSizes[1]}px`
      if (height <= 32) return `${this.fontSizes[1]}px`
      if (height <= 48) return `${this.fontSizes[2]}px`
      if (height <= 40) return `${this.fontSizes[3]}px`
      return `${this.fontSizes[3]}px`
    }
    return `${this.fontSizes[1]}px`
  }
}
