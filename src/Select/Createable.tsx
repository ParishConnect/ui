import { useTheme } from '@emotion/core'
import React from 'react'
import ReactCreateable, { Props } from 'react-select/creatable'
import { ResponsiveValue } from 'styled-system'
import { styles, selectComponents } from './shared'

export type Createable<Options> = Props<Options> & {
  height?: ResponsiveValue<number>
  width?: ResponsiveValue<number>
}

export function Createable<Options = { label: string; value: string }>({
  width,
  height,
  ...props
}: Createable<Options>) {
  const theme = useTheme()

  return (
    <ReactCreateable<Options>
      width={width}
      height={height}
      components={selectComponents}
      styles={styles(theme)}
      {...props}
    />
  )
}

Createable.defaultProps = {
  width: 35,
  height: 4,
}
