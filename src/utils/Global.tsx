import React from 'react'
import { Global } from '@emotion/core'
import { useTheme } from '../theme/useTheme'
import { useMedia } from './useMedia'

export function GlobalStyles() {
  const theme = useTheme()
  const dark = theme.mode === 'detect' ? useMedia('(prefers-color-scheme: dark)') : theme.mode
  const { fonts, colors, background } = theme.modes[dark ? 'dark' : 'light']

  return (
    <Global
      styles={{
        html: {
          fontFamily: fonts.display,
          color: colors.text,
          backgroundColor: background,
        },
      }}
    />
  )
}
