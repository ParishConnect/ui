import React from 'react'
import { Box } from '../Box'
import { Strong } from '../Text'
import { Button } from './Button'
import { ArrowLeftIcon, ArrowRightIcon, HomeIcon } from '../Icon'

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
    {['info', 'warning', 'success', 'danger'].map(intent => (
      <Button key={intent} {...props} intent={intent}>
        {intent}
      </Button>
    ))}
  </Box>
)

const ButtonSizes = (props: any) => (
  <Box display="block">
    {[2.5, 3, 4, 5, 6, 7].map(height => (
      <Button key={height} {...props} height={height}>
        Height {height}
      </Button>
    ))}
  </Box>
)

export const All = () => {
  return (
    <Box css={{ textTransform: 'capitalize' }}>
      <Strong level={500} marginBottom={1} display="block">
        Appearances
      </Strong>
      <ButtonTypes marginRight={1} my={1} />
      <Strong level={500} marginBottom={1} display="block">
        Rounded
      </Strong>
      <ButtonTypes marginRight={1} rounded my={1} />
      <Strong level={500} marginBottom={1} display="block">
        Heights
      </Strong>
      <ButtonSizes marginRight={1} my={1} />
      <Strong level={500} marginBottom={1} display="block">
        Intents
      </Strong>
      <ButtonIntents marginRight={1} my={1} />
      <ButtonIntents marginRight={1} my={1} appearance="primary" />
      <ButtonIntents marginRight={1} my={1} appearance="minimal" />
      <Strong level={500} marginBottom={1} display="block">
        With Icons
      </Strong>
      <Button marginRight={1} iconBefore={ArrowLeftIcon}>
        Icon Before
      </Button>
      <Button my={1} iconAfter={ArrowRightIcon}>
        Icon After
      </Button>
      <Strong level={500} marginBottom={1} display="block">
        Loading
      </Strong>
      <Button my={1} loading>
        Loading
      </Button>
      <Strong level={500} marginBottom={1} display="block">
        Disabled
      </Strong>
      <Button my={1} disabled>
        Disabled
      </Button>
      <Strong level={500} marginBottom={1} display="block">
        Icon Only
      </Strong>
      <Button icon={HomeIcon} my={1} />
    </Box>
  )
}
