import { useRef, ReactNode } from 'react'
import React from 'react'
import { TextInput } from './TextInput'
import { Box } from '../Box'
import { FormField } from '../FormField/FormField'

let idCounter = 0

export type TextInputField = TextInput &
  FormField & {
    inputProps?: TextInput
    /**
     * The label used above the input element.
     */
    label: ReactNode

    /**
     * Passed on the label as a htmlFor prop.
     */
    labelFor?: string

    /**
     * Whether or not to show an asterix after the label.
     */
    isRequired?: boolean

    /**
     * An optional description of the field under the label, above the input element.
     */
    description?: ReactNode

    /**
     * An optional hint under the input element.
     */
    hint?: ReactNode

    /**
     * If a validation message is passed it is shown under the input element
     * and above the hint. This is unaffected by `isInvalid`.
     */
    validationMessage?: ReactNode

    /**
     * The height of the input element.
     */
    inputHeight?: Box['height']

    /**
     * The width of the input width.
     */
    inputWidth?: Box['width']
  }

export function TextInputField({
  inputProps,
  inputHeight,
  inputWidth,
  disabled,
  required,
  isInvalid,
  placeholder,
  spellCheck,
  hint,
  label,
  description,
  validationMessage,
  ...props
}: TextInputField) {
  const id = useRef(++idCounter)
  const idText = `TextInput-${id.current}`
  return (
    <FormField
      marginBottom={3}
      label={label}
      isRequired={required}
      hint={hint}
      description={description}
      validationMessage={validationMessage}
      labelFor={idText}
      {...props}
    >
      <TextInput
        id={idText}
        width={inputWidth}
        height={inputHeight}
        disabled={disabled}
        required={required}
        isInvalid={isInvalid}
        placeholder={placeholder}
        spellCheck={spellCheck}
        {...inputProps}
      />
    </FormField>
  )
}
