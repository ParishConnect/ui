import { useTheme } from '@emotion/core'
import React from 'react'
import Select, { Props } from 'react-select'
import { ResponsiveValue } from 'styled-system'
import { styles, selectComponents } from './shared'

export type Autocomplete<Options> = Props<Options> & {
  height?: ResponsiveValue<number>
  width?: ResponsiveValue<number>
}

export function Autocomplete<Options = { label: string; value: string }>({
  width,
  height,
  ...props
}: Autocomplete<Options>) {
  const theme = useTheme()

  return (
    <Select<Options>
      components={selectComponents}
      width={width}
      height={height}
      styles={styles(theme)}
      {...props}
    />
  )
}

Autocomplete.defaultProps = {
  width: 35,
  height: 4,
}
