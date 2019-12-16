import { TextInput } from './TextInput'
import { Box } from '../Box'
import React from 'react'
import { Heading } from '../Text'
import { TextInputField } from './TextInputField'

export default {
  title: 'Text Input',
  component: TextInput,
}

export const textInput = () => (
  <Box margin={3}>
    <Heading marginBottom={2}>Text Input</Heading>
    <Box display="grid" gridAutoFlow="row" gridGap={2}>
      <TextInput name="text-input-name" placeholder="Text input placeholder..." />
      <TextInput name="text-input-disabled" placeholder="Disabled..." disabled />
      <TextInput name="text-input-invalid" placeholder="Invalid..." isInvalids />
    </Box>
  </Box>
)

export const textInputField = () => (
  <Box margin={3}>
    <Heading marginBottom={2}>Text Input Field</Heading>
    <Box display="grid" gridAutoFlow="row" gridGap={2}>
      <TextInputField
        isInvalid
        required
        label="A required text input field"
        description="This is a description."
        validationMessage="This field is required"
        hint="This is a hint."
      />
    </Box>
  </Box>
)
