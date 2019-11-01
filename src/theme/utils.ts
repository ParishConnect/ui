import { UITheme } from './theme'

/**
 * Gets the color for the current mode or returns the native color
 */
export function getColor(this: UITheme, color: string) {
  if (color === 'gray') {
    return this.colors.gray[0]
  }
  return this.colors[color] || color
}

export function createGradient(start: string, end: string, angle = -57) {
  return `linear-gradient(${angle}deg, ${start}, ${end})`
}

/** Helper function that scales the number by 8 */
export function majorScale(this: UITheme, number: number): number {
  return Math.floor(number * 8)
}

/** Helper function that scales the number by 4 */
export function minorScale(this: UITheme, number: number): number {
  return Math.floor(number * 4)
}
