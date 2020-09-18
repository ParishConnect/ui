import { LiteralStringUnion } from './utils/types'
import { CSSProperties } from 'react'
import { CSSObject } from '@emotion/react'
import { ObjectOrArray } from '@styled-system/core'

declare module '@styled-system/variant' {
  export function variant(args: {
    [key: string]: {
      [key: LiteralStringUnion<CSS.Properties>]: ObjectOrArray | string | number
    }
  }) {
    return CSSObject
  }
}
