import { useContext } from 'react'
import { themeContext } from './themeContext'

export function useTheme() {
  return useContext(themeContext)
}
