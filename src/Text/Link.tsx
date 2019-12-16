import styled from '@emotion/styled'
import { Text } from './Text'
import Color from 'color'

export const Link = styled(Text)(props => ({
  textDecoration: 'underline',
  cursor: 'pointer',
  '&:hover': {
    color: Color(props.theme.colors[props.color])
      .lighten(0.25)
      .toString(),
  },
  '&:active': {
    color: Color(props.theme.colors[props.color])
      .darken(0.25)
      .toString(),
  },
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${props.theme.getColorAlpha({ color: props.theme.colors[props.color] })}`,
  },
}))

Link.defaultProps = {
  as: 'a',
  color: 'default',
}
