import { useTheme } from '@emotion/core'
import React from 'react'
import { IndicatorProps, Props, components } from 'react-select'
import { Pane } from '../Box'
import { ChevronDownIcon, CloseIcon } from '../Icon'
import { Spinner } from '../Spinner'
import { Theme } from '../theme'
import { SelectComponents } from 'react-select/src/components'

/**
 * Components
 * These components are replaced to match ParishKit UI
 */

function DropdownIndicator(props: IndicatorProps<any>) {
  const theme = useTheme()
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon size={1.5} marginX={0.5} theme={theme} color="grays.2" cursor="pointer" />
    </components.DropdownIndicator>
  )
}

function MultiValueRemove(props: IndicatorProps<any>) {
  const theme = useTheme()
  return (
    <components.MultiValueRemove {...props}>
      <CloseIcon size={0.9} marginX={0.5} theme={theme} color="default" cursor="pointer" />
    </components.MultiValueRemove>
  )
}

function MultiValueContainer({ cx, data, ...props }: any) {
  return <Pane borderRadius={4} tint border {...props} display="flex" marginRight={0.5} />
}

function LoadingIndicator() {
  return <Spinner size={2} marginRight={1} color="grays.3" />
}

function ClearIndicator(props: IndicatorProps<any>) {
  const theme = useTheme()
  return (
    <components.ClearIndicator {...props}>
      <CloseIcon size={1.35} marginX={0.5} cursor="pointer" theme={theme} color="grays.2" />
    </components.ClearIndicator>
  )
}

export const selectComponents: Partial<SelectComponents<any>> = {
  DropdownIndicator,
  ClearIndicator,
  MultiValueRemove,
  LoadingIndicator,
  MultiValueContainer,
}

export const styles = (theme: Theme): Props['styles'] => ({
  placeholder: styles => ({
    ...styles,
    color: theme.colors.grays[2],
  }),
  control: (_, state) => ({
    cursor: 'pointer',
    width: theme.safeLoop(state.selectProps.width, width => theme.majorScale(width)),
    display: 'flex',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    border: 'none',
    boxShadow: `0 0 0 1px ${theme.colors.grays[4]}`,
    fontSize: theme.safeLoop(state.selectProps.height, height =>
      theme.getTextSizeForControlHeight(height),
    ),
    borderRadius: theme.safeLoop(state.selectProps.height, height =>
      theme.getBorderRadiusForControlHeight(height),
    ),
    color: theme.colors.text as string,
    backgroundColor: theme.colors.grays[5],
    paddingX: theme.safeLoop(state.selectProps.height, height => Math.round((height * 8) / 3.2)),
    '&:focus': {
      outline: 'none',
      backgroundColor: theme.colors.background,
      boxShadow: `0 0 0 2px ${theme.tints.default}`,
    },
  }),
  menu: (styles, state) => ({
    ...styles,
    color: theme.colors.text as string,
    backgroundColor: theme.colors.grays[5],
    boxShadow: theme.shadows[2],
    border: `1px solid ${theme.tints.gray}`,
    width: theme.safeLoop(state.selectProps.width, width => theme.majorScale(width)),
  }),
  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    ...(isFocused ? { backgroundColor: theme.tints.default as string } : {}),
    ...(isSelected ? { backgroundColor: theme.colors.default as string } : {}),
    cursor: 'pointer',
  }),
  singleValue: styles => ({
    ...styles,
    color: theme.colors.text as string,
  }),
  input: styles => ({
    ...styles,
    color: theme.colors.text as string,
  }),
  multiValue: styles => ({
    ...styles,
    backgroundColor: theme.getColorAlpha({ color: theme.colors.default }),
  }),
  multiValueLabel: styles => ({
    ...styles,
    fontWeight: 500,
    color: theme.colors.text as string,
  }),
  indicatorSeparator: styles => ({
    ...styles,
    backgroundColor: theme.colors.grays[2] as string,
  }),
  valueContainer: styles => ({ ...styles, cursor: 'text' }),
})
