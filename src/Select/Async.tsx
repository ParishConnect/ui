import { useTheme } from '@emotion/core'
import React from 'react'
import ReactAsync, { Props } from 'react-select/async-creatable'
import { ResponsiveValue } from 'styled-system'
import { styles, selectComponents } from './shared'

export type Async<Options> = Props<Options> & {
  height?: ResponsiveValue<number>
  width?: ResponsiveValue<number>
}

export function Async<Options = { label: string; value: string }>({
  width,
  height,
  ...props
}: Async<Options>) {
  const theme = useTheme()

  return (
    <ReactAsync<Options>
      width={width}
      height={height}
      components={selectComponents}
      styles={styles(theme)}
      {...props}
    />
  )
}

Async.defaultProps = {
  width: 35,
  height: 4,
}
