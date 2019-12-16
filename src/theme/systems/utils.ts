export const isNumber = (n: any): boolean => typeof n === 'number' && !isNaN(n)

export const majorScale = (n: any, scale: number, props: any) => {
  return isNumber(n) ? Math.floor(n * scale) : n
}
