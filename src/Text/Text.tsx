import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { variant } from 'styled-system'
import { Box, BoxProps } from '../Box'
import { LiteralNumberUnion } from '../utils/types'

export type TextProps = BoxProps & {
  level?: LiteralNumberUnion<200 | 300 | 400 | 500 | 600>
}

export const Text = styled(Box, { label: 'Text', shouldForwardProp })<TextProps>(
  ({ as }) => as === 'strong' && { '&': { fontWeight: 600 } },
  variant({
    prop: 'level',
    variants: {
      600: {
        fontSize: 4,
        fontWeight: 0,
        lineHeight: 3,
        letterSpacing: '-0.07px',
        marginTop: '28px',
      },
      500: {
        fontSize: 3,
        fontWeight: 0,
        lineHeight: 2,
        letterSpacing: '-0.05px',
        marginTop: '16px',
      },
      400: {
        fontSize: 2,
        fontWeight: 0,
        lineHeight: 2,
        letterSpacing: '-0.05px',
        marginTop: '16px',
      },
      300: {
        fontSize: 1,
        fontWeight: 0,
        lineHeight: 1,
        letterSpacing: '0px',
        marginTop: '12px',
      },
      200: {
        fontSize: 0,
        fontWeight: 0,
        lineHeight: 0,
        letterSpacing: '0',
        marginTop: '12px',
      },
    },
  }),
)

Text.defaultProps = {
  as: 'span',
  level: 400,
  color: 'text',
  fontFamily: 'ui',
}
