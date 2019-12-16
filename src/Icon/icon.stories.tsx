import * as icons from './generated'
import { Icon } from './Icon'
import { Box } from '..'
import React from 'react'
import { Strong, Text } from '../Text'
import { LoveIcon } from './index'

export default {
  title: 'Icon',
  component: Icon,
}

export const All = () => (
  <Box margin={3}>
    <Strong level={500}>All Icons</Strong>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 175px)" gridGap={1}>
      {Object.entries(icons).map(([name, Icon]) => (
        <Box
          key={name}
          height={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
        >
          <Icon size={3} />
          <Text marginTop={2} level={300} as="p">
            {name}
          </Text>
        </Box>
      ))}
    </Box>
  </Box>
)

export const LoveIconTest = () => (
  <Box margin={3}>
    <Strong level={500}>Switching between stroke and fill</Strong>
    <Box my={4}>
      <LoveIcon
        size={4}
        css={{
          '&:hover path': {
            fill: 'currentColor',
          },
        }}
      />
    </Box>
  </Box>
)
