import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { variant } from 'styled-system'
import { Box } from '../Box'
import { LiteralNumberUnion } from '../utils/types'

export type Text = Box & {
  level?: LiteralNumberUnion<200 | 300 | 400 | 500 | 600>
}

export const textLevels = {
  600: {
    fontSize: 4,
    fontWeight: 0,
    lineHeight: 3,
    letterSpacing: '-0.07px',
  },
  500: {
    fontSize: 3,
    fontWeight: 0,
    lineHeight: 2,
    letterSpacing: '-0.05px',
  },
  400: {
    fontSize: 2,
    fontWeight: 0,
    lineHeight: 2,
    letterSpacing: '-0.05px',
  },
  300: {
    fontSize: 1,
    fontWeight: 0,
    lineHeight: 1,
    letterSpacing: '0px',
  },
  200: {
    fontSize: 0,
    fontWeight: 0,
    lineHeight: 0,
    letterSpacing: '0',
  },
}

export const Text = styled(Box, { label: 'Text', shouldForwardProp })<Text>(
  ({ as }) => as === 'strong' && { '&': { fontWeight: 600 } },
  variant({
    prop: 'level',
    variants: textLevels,
  }),
)

Text.defaultProps = {
  as: 'span',
  display: 'inline-block',
  level: 400,
  color: 'text',
  fontFamily: 'ui',
}
