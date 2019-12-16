import {
  BorderProps,
  variant,
  ResponsiveValue,
  TypographyProps,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  PositionProps,
  ShadowProps,
} from 'styled-system'
import { Theme, ThemeColor } from '../theme'
import {
  LiteralStringBooleanUnion,
  LiteralNumberUnion,
  ResponsiveLiteralStringUnion,
  LiteralStringReactNodeUnion,
} from '../utils/types'
import { Box } from './Box'
import styled, { StyledComponent, StyledTags, CSSObject } from '@emotion/styled'
import { get } from '@styled-system/css'

const borderProps = ['border', 'borderTop', 'borderBottom', 'borderRight', 'borderLeft'] as const

const borderFactory = () =>
  borderProps.map(prop => (props: Pane) =>
    variant({
      prop,
      variants: {
        true: {
          [prop]: (t: Theme) =>
            `1px solid ${get(t.colors, props.borderColor as string | string[], t.colors.grays[4])}`,
        },
        muted: {
          [prop]: (t: Theme) =>
            `1px solid ${get(t.colors, props.borderColor as string | string[], t.colors.grays[5])}`,
        },
      },
    }),
  )

export type Pane = Box & {
  elevation?: LiteralNumberUnion<0 | 1 | 2 | 3 | 4>
  hoverElevation?: LiteralNumberUnion<0 | 1 | 2 | 3 | 4>
  activeElevation?: LiteralNumberUnion<0 | 1 | 2 | 3 | 4>
}

export const Pane = styled(Box)<Pane>(
  props =>
    variant({
      prop: 'elevation',
      variants: [0, 1, 2, 3, 4].map(e => ({
        boxShadow: e,
        border: (t: Theme) =>
          !props.border && `1px solid ${t.getColorAlpha({ color: t.tints.gray, alpha: 0.5 })}`,
      })),
    }),
  props =>
    variant({
      prop: 'hoverElevation',
      variants: [0, 1, 2, 3, 4].map(e => ({
        transition: (t: Theme) => `${t.transitions.default}s`,
        '&:hover': {
          boxShadow: e,
          border: (t: Theme) =>
            !props.border && `1px solid ${t.getColorAlpha({ color: t.tints.gray, alpha: 0.5 })}`,
        },
      })),
    }),
  props =>
    variant({
      prop: 'activeElevation',
      variants: [0, 1, 2, 3, 4].map(e => ({
        transition: `${props.theme.transitions.default}s`,
        '&:active, &:focus': {
          boxShadow: e,
          border:
            !props.border &&
            `1px solid ${props.theme.getColorAlpha({ color: props.theme.tints.gray, alpha: 0.5 })}`,
        },
      })),
    }),
  props =>
    variant({
      prop: 'tint',
      variants: {
        ...props.theme.themeColors
          .map(c => ({
            [c]: {
              '&&': { borderColor: props.theme.getColorAlpha({ color: props.theme.colors[c] }) },
            },
          }))
          .reduce(
            (acc, curr) => ({
              ...acc,
              ...curr,
            }),
            {},
          ),
        true: {
          '&&': { borderColor: props.theme.getColorAlpha({ color: props.theme.colors.default }) },
        },
      },
    }),
  props => ({
    '&, span, div, a': {
      color: props.gradient
        ? props.theme.safeLoop(props.gradient, gradient =>
            props.theme.getTextColorForBackground(props.theme.colors[gradient]),
          )
        : '',
    },
  }),
  borderFactory(),
)
