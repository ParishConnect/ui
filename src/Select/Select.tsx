import { useTheme } from '@emotion/core'
import React, { AriaAttributes } from 'react'
import { Box } from '../Box'
import { ChevronDownIcon } from '../Icon'
import { Text } from '../Text'

export type Select<Option = { label: string; value: string }> = Box &
  React.SelectHTMLAttributes<'select'> & {
    /**
     * The initial value for use in an uncontrolled way
     */
    defaultValue?: Option
    /* Size of the Select */
    level?: Text['level']
    isInvalid?: boolean
  }

export function Select({
  height,
  id,
  name,
  onChange,
  children,
  defaultValue,
  value,
  required,
  autoFocus,
  disabled,
  isInvalid,
  level,
  ...props
}: Select) {
  const theme = useTheme()
  const textSize = theme.safeLoop(height, height => theme.getTextSizeForControlHeight(height))
  const borderRadius = theme.safeLoop(height, height =>
    theme.getBorderRadiusForControlHeight(height),
  )
  const iconSize = theme.safeLoop(height, height => height / 1.9)

  return (
    <Box display="inline-flex" flex="1" position="relative" width="auto" height={height} {...props}>
      <Text
        as="select"
        id={id}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        required={required}
        autoFocus={autoFocus}
        disabled={disabled}
        aria-invalid={String(isInvalid) as AriaAttributes['aria-invalid']}
        borderRadius={borderRadius}
        textTransform="default"
        fontSize={textSize}
        // Provide enough space for auto-sizing select including the icon
        paddingRight={theme.safeLoop(iconSize, iconSize => iconSize * 3)}
        backgroundColor="grays.5"
        css={{
          cursor: 'pointer',
          display: 'flex',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          border: 'none',
          boxShadow: `0 0 0 1px ${theme.colors.grays[4]}`,
          fontSize: theme.safeLoop(height, height => theme.getTextSizeForControlHeight(height)),
          borderRadius: theme.safeLoop(height, height =>
            theme.getBorderRadiusForControlHeight(height),
          ),
          color: theme.colors.grays[1],
          backgroundColor: theme.colors.grays[5],
          paddingLeft: theme.safeLoop(height, height => Math.round(height / 3.2)),
          paddingRight: theme.safeLoop(height, height => Math.round((height * 8) / 3.2)),
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${theme.tints.default}`,
          },
        }}
      >
        {children}
      </Text>
      <ChevronDownIcon
        color="gray"
        size={iconSize}
        position="absolute"
        right={theme.safeLoop(height, height => Math.round(height / 2.2))}
        top={theme.safeLoop(iconSize, iconSize => iconSize * 4)}
        pointerEvents="none"
      />
    </Box>
  )
}

Select.defaultProps = {
  height: 4,
  disabled: false,
  isInvalid: false,
}
