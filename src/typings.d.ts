import { Theme as ParishKitTheme } from './theme'

declare module '@emotion/core' {
  export interface Theme extends ParishKitTheme {}
}
