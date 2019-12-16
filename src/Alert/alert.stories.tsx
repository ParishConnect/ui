import React from 'react'
import { Box } from '../Box'
import { Heading } from '../Text'
import { Alert } from './Alert'

export default {
  title: 'Alert',
  component: Alert,
}

export const alert = () => (
  <Box margin={3} width={100}>
    <Heading marginBottom={2}>Intents</Heading>
    {['info', 'warning', 'success', 'danger'].map(intent => (
      <Alert
        key={intent}
        intent={intent}
        marginBottom={2}
        title={intent}
        css={{ textTransform: 'capitalize' }}
      />
    ))}
    <Heading marginBottom={2}>Intents (with description)</Heading>
    {['info', 'warning', 'success', 'danger'].map(intent => (
      <Alert
        key={intent}
        intent={intent}
        marginBottom={2}
        title={intent}
        css={{ textTransform: 'capitalize' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Alert>
    ))}
    <Heading marginBottom={2}>Intents (with close)</Heading>
    {['info', 'warning', 'success', 'danger'].map(intent => (
      <Alert
        css={{ textTransform: 'capitalize' }}
        key={intent}
        intent={intent}
        marginBottom={2}
        title={intent}
        isRemoveable
      />
    ))}
  </Box>
)
