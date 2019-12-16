import styled from '@emotion/styled'
import { variant } from 'styled-system'
import { Box } from '../Box'
import { LiteralNumberUnion } from '../utils/types'
import { textLevels } from './Text'

export type ParagraphProps = Box & {
  level?: LiteralNumberUnion<300 | 400 | 500>
}

export const Paragraph = styled(Box)<ParagraphProps>(
  variant({
    prop: 'level',
    variants: {
      '500': {
        ...textLevels['500'],
        lineHeight: '24px',
      },
      '400': {
        ...textLevels['400'],
        lineHeight: '21px',
      },
      '300': {
        ...textLevels['300'],
        lineHeight: '18px',
      },
    },
  }),
)

Paragraph.defaultProps = {
  level: 400,
}
