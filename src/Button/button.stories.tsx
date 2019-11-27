import React from 'react'
import { Box } from '../Box'
import { HouseEntrance } from '../Icon/generated/HouseEntrance'
import { Strong } from '../Text'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
}

const ButtonTypes = (props: any) => (
  <>
    <Button {...props}>Default</Button>
    <Button {...props} appearance="primary">
      Primary
    </Button>
    <Button {...props} appearance="minimal">
      Minimal
    </Button>
    <Box
      display="inline-block"
      padding={1}
      paddingTop="0"
      backgroundImage="url(https://images.unsplash.com/photo-1574714802271-15a6dbfdff96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)"
      height={7}
      width={12}
    >
      <Button {...props} appearance="overlay">
        Overlay
      </Button>
    </Box>
  </>
)

const ButtonIntents = (props: any) => (
  <Box display="block">
    {['default', 'warning', 'success', 'danger'].map(intent => (
      <Button key={intent} {...props} intent={intent}>
        {intent}
      </Button>
    ))}
  </Box>
)

export const button = () => {
  return (
    <Box css={{ textTransform: 'capitalize' }}>
      <Strong level={500} marginBottom={1} display="block">
        Appearances
      </Strong>
      <ButtonTypes marginRight={1} />
      <Strong level={500} marginBottom={1} display="block">
        Rounded
      </Strong>
      <ButtonTypes marginRight={1} rounded />
      <Strong level={500} marginBottom={1} display="block">
        Intents
      </Strong>
      <ButtonIntents marginRight={1} />
      <ButtonIntents marginRight={1} appearance="primary" />
      <ButtonIntents marginRight={1} appearance="minimal" />
      <Strong level={500} marginBottom={1} display="block">
        With Icons
      </Strong>
      <Button marginRight={1} iconBefore={HouseEntrance}>
        Icon Before
      </Button>
      <Button iconAfter={HouseEntrance}>Icon After</Button>
    </Box>
  )
}
