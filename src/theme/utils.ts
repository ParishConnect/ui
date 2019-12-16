import { Theme } from './theme'

/**
 * Gets the color for the current mode or returns the native color
 */
export function getColor(this: Theme, color: string) {
  if (color === 'gray') {
    return this.colors.gray[0]
  }
  return this.colors[color] || color
}

/**
 * Utility function that creates a gradient from a starting and ending color
 * @param {number} [angle=-57]
 * @since 1.0
 */
export function createGradient(start: string, end: string, angle = -57) {
  return `linear-gradient(${angle}deg, ${start}, ${end})`
}
