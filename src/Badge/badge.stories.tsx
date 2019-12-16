import { Badge } from './Badge'
import { Pill } from './Pill'
import React from 'react'
import { Box } from '../Box'
import { Strong, Heading } from '../Text'

export default {
  title: 'Badge',
  component: Badge,
}

const colors = ['blue', 'red', 'purple', 'gray', 'orange', 'yellow', 'teal', 'green']

export const Badges = () => (
  <Box margin={3}>
    <Heading marginBottom={2}>Default</Heading>
    <Box display="flex">
      {colors.map(c => (
        <Badge marginRight={3} key={c} color={c}>
          {c}
        </Badge>
      ))}
    </Box>
    <Heading marginY={2}>Solid</Heading>
    <Box display="flex">
      {colors.map(c => (
        <Badge solid marginRight={3} key={c} color={c}>
          {c}
        </Badge>
      ))}
    </Box>
    <Heading marginY={2}>Interactive</Heading>
    <Box display="flex">
      {colors.map(c => (
        <Badge interactive marginRight={3} key={c} color={c}>
          {c}
        </Badge>
      ))}
    </Box>
  </Box>
)

export const Pills = () => (
  <Box margin={3}>
    <Strong marginBottom={2} level={600}>
      Default
    </Strong>
    <Box display="flex">
      {colors.map(c => (
        <Pill marginRight={3} key={c} color={c}>
          {c}
        </Pill>
      ))}
    </Box>
    <Strong marginY={2} level={600}>
      Solid
    </Strong>
    <Box display="flex">
      {colors.map(c => (
        <Pill solid marginRight={3} key={c} color={c}>
          {c}
        </Pill>
      ))}
    </Box>
    <Strong marginY={2} level={600}>
      Interactive
    </Strong>
    <Box display="flex">
      {colors.map(c => (
        <Pill interactive marginRight={3} key={c} color={c}>
          {c}
        </Pill>
      ))}
    </Box>
  </Box>
)
