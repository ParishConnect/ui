import React, { useState } from 'react'
import { Box } from '../Box'
import { Switch } from './Switch'
import { Heading } from '../Text'

export default {
  title: 'Switch',
  component: Switch,
}

export const switches = () => {
  return (
    <Box margin={3}>
      <Heading marginBottom={2}>Switch</Heading>
      <Switch marginBottom={1} />
      <Switch defaultChecked />
    </Box>
  )
}

export const controlled = () => {
  const [checked, setChecked] = useState(true)
  return (
    <Box margin={3}>
      <Heading marginBottom={2}>Controlled Switch</Heading>
      <Switch checked={checked} onChange={() => setChecked(!checked)} />
    </Box>
  )
}
