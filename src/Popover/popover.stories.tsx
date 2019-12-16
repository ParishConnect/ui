import { Box } from '../Box'
import { getStorybook } from '@storybook/react'
import React from 'react'
import { Heading, Paragraph } from '../Text'
import { Button } from '../Button'
import { InformationCircleIcon } from '../Icon'
import { Popover } from './Popover'

export default {
  title: 'Popover',
  component: Popover,
}

const PopoverInner = ({ close }: any) => (
  <Box size={30} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
    <Paragraph>This Popover has a close button</Paragraph>
    <Button marginTop={1} onClick={close}>
      Close
    </Button>
  </Box>
)

export const popover = () => (
  <Box margin={3}>
    <Heading marginBottom={3}>Popover</Heading>
    <Popover content={PopoverInner}>
      <Button icon={InformationCircleIcon}>Hover me</Button>
    </Popover>
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
  <Box margin={3} marginY="75vh">
    <Heading marginBottom={3}>Popover</Heading>
    <Box
      margin={15}
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr));"
      gridTemplateRows="repeat(auto-fill, minmax(200px, 1fr));"
      alignItems="center"
      justifyItems="center"
    >
      {anchors.map(a => (
        <Popover key={a} position={a as any} content={PopoverInner}>
          <Button>{a}</Button>
        </Popover>
      ))}
    </Box>
  </Box>
)
