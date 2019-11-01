import { ThemeProvider } from 'emotion-theming'
import React, { ReactNode } from 'react'
import theme from '../theme'

const ThemeDecorator = (storyFn: () => ReactNode) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
