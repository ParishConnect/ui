import { Badge, BadgeProps } from './Badge'
import styled from '@emotion/styled'

/**
 * The Pill Component should only be used for numbers.
 * Prefer `Badge` for tags and flags.
 * @since 1.0
 * @author Evan Hennessy
 */
export const Pill = styled(Badge)<BadgeProps>({
  borderRadius: 999,
})
