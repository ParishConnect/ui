import { useTheme } from '@emotion/core'
import React, { useEffect, useRef } from 'react'
import { Alert, AlertProps } from '../Alert/Alert'

export type ToastProps = AlertProps & {}

export function Toast({ children, ...props }: ToastProps) {
  const timer = useRef<NodeJS.Timeout>(null)
  const theme = useTheme()

  useEffect(() => {
    timer.current = setTimeout(() => {
      props.onRemove()
    }, theme.toastDuration)

    return () => {
      clearTimeout(timer.current)
    }
  })

  return <Alert children={children} {...props} />
}

Toast.defaultProps = {
  isRemoveable: true,
  boxShadow: 2,
  borderRadius: 6,
  intent: 'info',
  pointerEvents: 'all',
  flexShrink: 0,
}
