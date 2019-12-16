import styled from '@emotion/styled'
import Color from 'color'
import React, { ReactNode, useEffect, useRef } from 'react'
import { Box } from '../Box'
import { CheckBoldIcon } from '../Icon/generated/CheckBold'
import { SubtractBoldIcon } from '../Icon/generated/SubtractBold'
import { Text } from '../Text'

export type Checkbox = Box<HTMLInputElement> & {
  label?: ReactNode
  name?: string
  checked?: boolean
  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate?: boolean
  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid?: boolean

  /**
   * When true, the checkbox is disabled.
   */
  disabled?: boolean

  onChange?: (event: React.FormEvent<HTMLDivElement>) => void
}

const checkedStyles = {
  '& > svg': {
    display: 'block',
  },
}

const CheckBoxFactory = styled(Box)<Checkbox>(({ theme }) => ({
  // Hide native checkbox
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1',
  opacity: '0',
  // Hide icon on unchecked
  '& + div > svg': { display: 'none' },
  // Checkbox styles
  '& + div': {
    WebkitFontSmoothing: 'antialiased',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    color: 'white',
    backgroundImage: `linear-gradient(to top, ${theme.colors.grays[5]}, ${theme.colors.background})`,
    boxShadow: `inset 0 0 0 1px ${theme.getColorAlpha({
      color: theme.colors.muted,
    })}}, inset 0 -1px 1px 0 ${theme.tints.gray}`,
  },
  // Hover
  '&:not([disabled]):hover + div': {
    backgroundImage: `linear-gradient(to top, ${theme.colors.grays[5]}, ${Color(
      theme.tints.gray,
    ).lighten(0.05)})`,
    boxShadow: `inset 0 0 0 1px ${theme.getColorAlpha({
      color: theme.colors.muted,
      alpha: 0.3,
    })}}, inset 0 -1px 1px 0 ${theme.tints.gray}`,
  },
  // Focus
  '&:not([disabled]):focus + div': {
    boxShadow: `0 0 0 2px ${theme.getColorAlpha({ color: theme.tints.default })}, inset 0 0 0 1px ${
      theme.tints.gray
    }, inset 0 -1px 1px 0 ${Color(theme.tints.gray).lighten(0.65)}`,
  },
  // Active
  '&:not([disabled]):active + div': {
    backgroundImage: 'none',
    backgroundColor: theme.getColorAlpha({ color: theme.tints.default }),
    boxShadow: `inset 0 0 0 1px ${theme.getColorAlpha({ color: theme.tints.default, alpha: 0.5 })}`,
  },
  // Checked
  '&:checked + div, &[type=checkbox]:indeterminate + div': {
    ...checkedStyles,
    color: 'text',
    backgroundImage: theme.createGradient(...(theme.gradients.default as [string, string])),
    boxShadow: `inset 0 0 0 1px ${theme.getColorAlpha({
      color: theme.colors.muted,
      alpha: 0.3,
    })}}, inset 0 -1px 1px 0 ${theme.tints.gray}`,
  },
  // Checked Hover
  '&:not([disabled]):checked:hover + div, &[type=checkbox]:not([disabled]):indeterminate:hover + div': {
    ...checkedStyles,
    color: 'text',
    backgroundImage: theme.createGradient(
      theme.gradients.default[0],
      Color(theme.gradients.default[1])
        .lighten(0.075)
        .saturate(15)
        .toString(),
    ),
    boxShadow: `inset 0 0 0 1px ${theme.getColorAlpha({
      color: theme.colors.muted,
      alpha: 0.3,
    })}}, inset 0 -1px 1px 0 ${theme.tints.gray}`,
  },
  // Checked Active
  '&:not([disabled]):checked:active + div, &[type=checkbox]:not([disabled]):indeterminate:active + div': {
    color: 'text',
    backgroundImage: theme.createGradient(
      theme.gradients.default[0],
      Color(theme.gradients.default[1])
        .darken(0.05)
        .saturate(15)
        .toString(),
    ),
    boxShadow: `inset 0 0 0 1px ${theme.getColorAlpha({
      color: theme.colors.muted,
      alpha: 0.3,
    })}}, inset 0 -1px 1px 0 ${theme.colors.grays[5]}`,
  },
  // Checked Disabled
  '&[disabled]:checked + div, &[type=checkbox][disabled]:indeterminate + div': {
    ...checkedStyles,
    color: theme.colors.grays[3],
    backgroundImage: `linear-gradient(to top, ${theme.colors.grays[4]}, ${theme.colors.grays[4]})`,
    boxShadow: `inset 0 0 0 1px ${theme.getColorAlpha({
      color: theme.colors.muted,
    })}}, inset 0 -1px 1px 0 ${theme.tints.gray}`,
  },
}))

export function Checkbox({
  checked,
  disabled,
  id,
  indeterminate,
  isInvalid,
  label,
  name,
  value,
  onChange,
  ...props
}: Checkbox) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.indeterminate = indeterminate
  }, [inputRef])

  return (
    <Box
      as="label"
      css={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
      display="flex"
      marginY={2}
      position="relative"
      {...(props as any)}
    >
      <CheckBoxFactory
        as="input"
        id={id}
        type="checkbox"
        name={name}
        checked={checked || indeterminate}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={isInvalid}
        ref={inputRef}
      />
      <Box
        boxSizing="border-box"
        borderRadius={3}
        display="flex"
        flex="none"
        alignItems="center"
        justifyContent="center"
        width={2}
        height={2}
      >
        {indeterminate ? <SubtractBoldIcon size={1} /> : <CheckBoldIcon size={1} />}
      </Box>
      {label && (
        <Text marginLeft={1} level={300} color={disabled ? 'muted' : 'text'}>
          {label}
        </Text>
      )}
    </Box>
  )
}

Checkbox.defaultProps = {
  checked: false,
  indeterminate: false,
  onChange: () => {},
}
