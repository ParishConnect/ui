import { ThemeProvider } from '@emotion/core'
import React, { ReactNode } from 'react'
import { Theme } from '../theme'

const ThemeDecorator = (storyFn: () => ReactNode) => (
  <ThemeProvider theme={new Theme()}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
