import { useTheme } from '@emotion/core'
import React from 'react'
import { Text } from '../Text'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { variant } from 'styled-system'

export type TextInput = Text & {
  /**
   * Makes the input element required.
   */
  required?: boolean

  /**
   * Makes the input element disabled.
   */
  disabled?: boolean

  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid?: boolean

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck?: boolean

  /**
   * The placeholder text when there is no value present.
   */
  placeholder?: string
}

export const TextInput = styled(Text)<TextInput>(
  //@ts-ignore
  ({ theme, ...props }) =>
    css({
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      border: 'none',
      fontSize: theme.safeLoop(props.height, height => theme.getTextSizeForControlHeight(height)),
      borderRadius: theme.safeLoop(props.height, height =>
        theme.getBorderRadiusForControlHeight(height),
      ),
      color: 'text',
      backgroundColor: 'grays.5',
      paddingX: theme.safeLoop(props.height, height => Math.round((height * 8) / 3.2)),
      '&::placeholder': {
        color: theme.colors.grays[2],
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: 'background',
        boxShadow: `0 0 0 2px ${theme.tints.default}`,
      },
    }),
  ({ theme }) =>
    variant({
      prop: 'isInvalid',
      variants: {
        true: {
          boxShadow: `inset 0 0 0 1px ${theme.colors.danger}`,
        },
      },
    }),
  ({ theme }) =>
    variant({
      prop: 'disabled',
      variants: {
        true: {
          color: 'muted',
          boxShadow: `inset 0 0 0 1px ${theme.colors.grays[4]}`,
          backgroundColor: 'grays.5',
        },
      },
    }),
)

TextInput.defaultProps = {
  as: 'input',
  type: 'text',
  height: 4,
  width: 35,
  disabled: false,
  isInvalid: false,
  spellCheck: true,
}
