import React, { FC } from 'react'
import { Theme } from '.'
import { Global } from '@emotion/core'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/core'
import css from '@styled-system/css'

export const ThemeProvider: FC<{ theme: Theme }> = ({ theme, children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <Global
        styles={css({
          ':root': {
            fontFamily: 'ui',
            color: 'text',
            backgroundColor: 'background',
            fontSize: 2,
          },
        })}
      />
      {children}
    </EmotionThemeProvider>
  )
}
