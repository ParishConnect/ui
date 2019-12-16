import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/core'
import css from '@styled-system/css'
import React, { FC, useEffect, useState } from 'react'
import { Theme } from '.'
import { ColorMode, ThemeColor } from './theme'

export const ThemeProvider: FC<{ colorMode: ColorMode; color: ThemeColor }> = ({
  colorMode,
  color,
  children,
}) => {
  const [mode, setMode] = useState<ColorMode>('light')

  useEffect(() => {
    if (colorMode !== mode) {
      setMode(colorMode)
    }
  }, [colorMode])

  const theme = new Theme({ mode, color })

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
