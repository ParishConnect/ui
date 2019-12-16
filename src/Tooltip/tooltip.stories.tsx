import { Tooltip } from './Tooltip'
import { Box } from '../Box'
import React from 'react'
import { Heading } from '../Text'
import { Button } from '../Button'
import { InformationCircleIcon } from '../Icon'

export default {
  title: 'Tooltip',
  component: Tooltip,
}

export const toolip = () => (
  <Box margin={3}>
    <Heading marginBottom={3}>Tooltip</Heading>
    <Tooltip content="A tooltip">
      <Button icon={InformationCircleIcon}>Hover me</Button>
    </Tooltip>
  </Box>
)

const anchors = Object.values({
  BOTTOM_LEFT: 'BOTTOM_LEFT',
  BOTTOM_RIGHT: 'BOTTOM_RIGHT',
  BOTTOM_CENTER: 'BOTTOM_CENTER',
  TOP_LEFT: 'TOP_LEFT',
  TOP_CENTER: 'TOP_CENTER',
  TOP_RIGHT: 'TOP_RIGHT',
  LEFT_BOTTOM: 'LEFT_BOTTOM',
  LEFT_CENTER: 'LEFT_CENTER',
  LEFT_TOP: 'LEFT_TOP',
  RIGHT_BOTTOM: 'RIGHT_BOTTOM',
  RIGHT_CENTER: 'RIGHT_CENTER',
  RIGHT_TOP: 'RIGHT_TOP',
})

export const sides = () => (
  <Box margin={3}>
    <Heading marginBottom={3}>Tooltip</Heading>
    <Box
      margin={15}
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr));"
      gridTemplateRows="repeat(auto-fill, minmax(200px, 1fr));"
      alignItems="center"
      justifyItems="center"
    >
      {anchors.map(a => (
        <Tooltip position={a} content={`I'm on the ${a}`}>
          <Button>{a}</Button>
        </Tooltip>
      ))}
    </Box>
  </Box>
)
