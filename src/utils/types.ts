import { UITheme } from '../theme/theme'

export type LiteralStringUnion<T extends K, K = string> = T | (K & {})
export type LiteralNumberUnion<T extends K, K = number> = T | (K & {})
export type LiteralStringNumberUnion<T extends K, K = string | number> = T | (K & {})

export type LayerAppearance = LiteralStringUnion<'gradient' | 'solid' | 'tint'>
