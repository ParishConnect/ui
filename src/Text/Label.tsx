import { Text } from './Text'
import styled from '@emotion/styled'

export const Label = styled(Text)()

Label.defaultProps = {
  as: 'label',
  fontWeight: 500,
}
