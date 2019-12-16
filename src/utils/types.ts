import { ReactNode } from 'react'

export type LiteralStringUnion<T extends K, K = string> = T | (K & {})
export type ResponsiveLiteralStringUnion<T extends K, K = string> =
  | (T | (K & {}))
  | ((K[] & {}[]) | T[])
export type LiteralNumberUnion<T extends K, K = number> = (T | (K & {})) | (K[] | T[])
export type LiteralStringNumberUnion<T extends K, K = string | number> =
  | (T | (K & {}))
  | (K[] | T[])
export type LiteralStringBooleanUnion<T extends K, K = string | boolean> =
  | (T | (K & {}))
  | (K[] | T[])
export type LiteralStringReactNodeUnion<T extends K, K = string | ReactNode> = T | (K & {})

export type LayerAppearance = ResponsiveLiteralStringUnion<'gradient' | 'solid' | 'tint'>
