import { variant } from 'styled-system'
import { Strong, Text } from '../Text'
import { Theme } from '../theme'
import styled from '@emotion/styled'

export type BadgeProps = Text & {
  /**
   * Whether or not to apply hover/focus/active styles
   * @default false
   * @since 1.0
   */
  interactive?: boolean
  /**
   * Uses the solid color instead of the tint for backgroundColor
   */
  solid?: boolean
}

/**
 * The `Badge` component should only be used for state and general text labels. Not for numbers.
 * @since 1.0
 * @author Evan Hennessy
 */
export const Badge = styled(Strong)<BadgeProps>(
  {
    display: 'inline-block',
    boxSizing: 'border-box',
    height: 16,
    paddingTop: 0,
    paddingRight: 6,
    paddingBottom: 0,
    paddingLeft: 6,
    borderRadius: 2,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  props =>
    variant({
      prop: 'solid',
      variants: {
        true: {
          backgroundColor: (t: Theme) => t.safeLoop(props.color, c => t.colors[c]),
          color: (t: Theme) =>
            t.safeLoop(props.color, c => t.getTextColorForBackground(t.colors[c])),
        },
        false: {
          backgroundColor: (t: Theme) => t.safeLoop(props.color, c => t.tints[c]),
        },
      },
    }),
  variant({
    prop: 'interactive',
    variants: {
      true: {
        '&:hover': {
          opacity: 0.8,
          cursor: 'pointer',
        },
      },
    },
  }),
)

Badge.defaultProps = {
  color: 'default',
  isInteractive: false,
  solid: false,
  level: 300,
}
