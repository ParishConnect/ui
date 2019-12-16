import { Checkbox } from './Checkbox'
import { Box } from '../Box'
import React, { useState } from 'react'
import { Heading } from '../Text'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

export const checkbox = () => {
  return (
    <Box margin={3}>
      <Heading marginBottom={2}>Checkbox</Heading>
      <Checkbox label="Default" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked & Disabled" checked disabled />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Indeterminate & Disabled" indeterminate disabled />
      <Checkbox label="Checked & Indeterminate" checked indeterminate />
    </Box>
  )
}

export const controlled = () => {
  const [checked, setChecked] = useState(true)
  return (
    <Box margin={3}>
      <Heading marginBottom={2}>Controlled Checkbox</Heading>
      <Checkbox label="Default" checked={checked} onChange={() => setChecked(!checked)} />
    </Box>
  )
}
