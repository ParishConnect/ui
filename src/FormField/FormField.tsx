import { Box, Pane } from '../Box'
import { Text, Label, Paragraph, ParagraphProps } from '../Text'
import { ReactNode } from 'react'
import React from 'react'
import { AlertCircleIcon } from '../Icon'

export type FormField = Box & {
  /**
   * The label used above the input element.
   */
  label: ReactNode

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor?: string

  /**
   * Whether or not show an asterix after the label.
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
}
export function FormField({
  hint,
  label,
  labelFor,
  children,
  isRequired,
  labelProps,
  description,
  validationMessage,
  ...props
}: FormField) {
  return (
    <Box {...props}>
      <FormFieldLabel
        isAstrixShown={isRequired}
        htmlFor={labelFor}
        marginBottom={description ? 0 : 0.5}
        {...labelProps}
      >
        {label}
      </FormFieldLabel>
      {typeof description === 'string' ? (
        <FormFieldDescription marginBottom={0.5}>{description}</FormFieldDescription>
      ) : (
        description
      )}
      {children}
      {typeof validationMessage === 'string' ? (
        <FormFieldValidationMessage marginTop={1}>{validationMessage}</FormFieldValidationMessage>
      ) : (
        validationMessage
      )}
      {typeof hint === 'string' ? <FormFieldHint marginTop={1.3}>{hint}</FormFieldHint> : hint}
    </Box>
  )
}

export function FormFieldHint(props: ParagraphProps) {
  return <Paragraph marginTop={0} level={300} color="muted" {...props} />
}

export function FormFieldValidationMessage({ children, ...props }: Pane) {
  return (
    <Pane display="flex" {...props}>
      <AlertCircleIcon color="danger" marginTop="2px" size={1.5} marginRight={1} />
      <Paragraph marginTop={0} level={300} color="danger" role="alert">
        {children}
      </Paragraph>
    </Pane>
  )
}

export function FormFieldDescription(props: ParagraphProps) {
  return <Paragraph marginTop={0} level={400} color="muted" {...props}></Paragraph>
}

export function FormFieldLabel({
  children,
  isAstrixShown,
  ...props
}: Text & { isAsterixShown?: boolean }) {
  return (
    <Label display="block" {...props}>
      {children} {isAstrixShown && <span title="This field is required.">*</span>}
    </Label>
  )
}
