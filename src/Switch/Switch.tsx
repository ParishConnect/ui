import React, { ReactNode, useState, FormEvent } from 'react'
import { Box } from '../Box'
import { useTheme } from '@emotion/core'
import styled from '@emotion/styled'
import css from '@styled-system/css'

export type Switch = Box<HTMLInputElement> & {
  label?: ReactNode
  value?: string
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

  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

const SwitchFactory = styled(Box)<Switch>(({ theme }) =>
  css({
    border: '0',
    clip: 'rect(1px, 1px, 1px, 1px)',
    height: '1',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1',
    opacity: '0',
    '& + div': {
      cursor: 'pointer',
      transition: 'all 120ms ease-in-out',
      color: 'white',
      backgroundColor: 'grays.4',
      borderRadius: 9999,
    },
    '&[disabled] + div': {
      opacity: 0.5,
      cursor: 'not-allowed',
      backgroundImage: 'none',
    },
    '&:not([disabled]):hover + div': {
      backgroundColor: 'grays.3',
    },
    '&:not([disabled]):focus + div': {
      boxShadow: `0 0 0 3px ${theme.getColorAlpha({ color: theme.tints.default })}`,
    },
    '&:not([disabled]):active + div': {
      backgroundColor: 'grays.4',
    },
    '&:checked + div': {
      backgroundColor: 'default',
      color: 'background',
    },
    '&:checked:hover + div': {
      backgroundColor: 'default',
      color: 'background',
    },
    '&:not([disabled]):checked:active + div': {
      backgroundColor: 'default',
      color: 'background',
    },
  }),
)

export function Switch({
  height,
  id,
  name,
  checked: controlledChecked,
  disabled,
  defaultChecked,
  onChange,
  ...props
}: Switch) {
  const theme = useTheme()
  const [isChecked, setIsChecked] = useState(controlledChecked || defaultChecked || false)

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    if (controlledChecked) {
      onChange(e)
    } else setIsChecked(!isChecked)
    onChange(e)
  }

  const checked = controlledChecked ? controlledChecked : isChecked

  return (
    <Box
      as="label"
      display="block"
      width={theme.safeLoop(height, h => h * 2)}
      position="relative"
      {...props}
    >
      <SwitchFactory
        as="input"
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      <Box height={height} width={theme.safeLoop(height, h => h * 2)}>
        <Box
          height={height}
          width={theme.safeLoop(height, h => h * 2)}
          css={{
            transition: `all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.175)`,
            opacity: 0,
            display: 'flex',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 4,
            '&[data-checked="true"]': {
              opacity: 1,
              transform: 'scale(1)',
            },
          }}
        />
        <Box
          width={theme.safeLoop(height, h => h * 2)}
          display="flex"
          data-checked={checked}
          css={{
            transition: 'transform 200ms ease-in-out',
            transform: 'translateX(0%)',
            '&[data-checked="true"]': {
              transform: 'translateX(50%)',
            },
          }}
        >
          <Box flex={1} padding="2px">
            <Box
              width={theme.safeLoop(height, h => h - 0.5)}
              height={theme.safeLoop(height, h => h - 0.5)}
              backgroundColor="background"
              borderRadius={9999}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Switch.defaultProps = {
  height: 2,
  onChange: () => {},
  disabled: false,
}
