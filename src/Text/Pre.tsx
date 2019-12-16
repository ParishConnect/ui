import styled from '@emotion/styled'
import { Text } from './Text'

export const Pre = styled(Text)(props => ({
  marginTop: !props.marginTop && !props.marginY && 0,
  marginBottom: !props.marginBottom && !props.marginY && 0,
}))

Pre.defaultProps = {
  as: 'pre',
}
