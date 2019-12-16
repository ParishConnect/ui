import styled from '@emotion/styled'
import { Text } from './Text'
import { variant } from 'styled-system'
import { ResponsiveLiteralStringUnion } from '../utils/types'

export type CodeProps = Text & {
  appearance?: ResponsiveLiteralStringUnion<'minimal' | 'default'>
}

export const Code = styled(Text)<CodeProps>(props =>
  variant({
    prop: 'appearance',
    variants: {
      default: {
        backgroundColor: props.theme.tints.default,
        paddingX: '6px',
        paddingY: '3px',
        borderRadius: 2,
        boxShadow: `inset 0 0 0 1px ${props.theme.getColorAlpha({
          color: props.theme.colors.default,
        })}`,
      },
      minimal: {},
    },
  }),
)

Code.defaultProps = {
  as: 'code',
  appearance: 'default',
  fontFamily: 'mono',
  display: 'inline-block',
}
