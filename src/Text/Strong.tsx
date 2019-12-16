import styled from '@emotion/styled'
import { Text } from './Text'

export const Strong = styled(Text)({ '&': { fontWeight: 600 } })

Strong.defaultProps = {
  as: 'strong',
}
