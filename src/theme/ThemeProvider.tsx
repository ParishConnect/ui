import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/core'
import css from '@styled-system/css'
import React, { FC } from 'react'
import { Theme } from '.'
import { ColorMode } from './theme'

export const ThemeProvider: FC<{ colorMode: ColorMode }> = ({ colorMode, children }) => {
  return (
    <EmotionThemeProvider theme={new Theme({ mode: colorMode })}>
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
