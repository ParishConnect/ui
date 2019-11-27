import React from 'react'
import { Text } from './Text'
import { Strong } from './Strong'
import { Box } from '..'

export default {
  title: 'Text',
  component: Text,
}

export const text = () => {
  return (
    <Box display="flex" flexDirection="column" maxHeight={300}>
      {[200, 300, 400, 500, 600].map(level => (
        <Text key={level} level={level}>
          This is some text at level: {level}
        </Text>
      ))}
    </Box>
  )
}

export const strong = () => {
  return (
    <Box display="flex" flexDirection="column" maxHeight={300}>
      {[200, 300, 400, 500, 600].map(level => (
        <Strong css={{ color: 'red' }} key={level} level={level}>
          This is some strong text at level: {level}
        </Strong>
      ))}
    </Box>
  )
}
