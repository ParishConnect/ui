import { css, useTheme } from '@emotion/core'
import Color from 'color'
import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { Box } from '../Box'
import { Theme } from '../theme'
import { useLockBodyScroll } from '../utils/useLockBodyScroll'
import { Portal } from './Portal'
import { Stack } from './Stack'

export type OverlayProps = {
  /**
   * Control whether overlay should be shown. Will have to
   */
  isShown?: boolean
  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnClick?: boolean
  /**
   * Boolean indicating if pressing escape should close the overlay.
   */
  shouldCloseOnEscapePress?: boolean
  /**
   * Boolean indicating whether to prevent scrolling beneath the overlay
   */
  preventBodyScroll?: boolean
  /**
   * Called when overlay is hidden
   */
  onHide?: (overlayRef?: HTMLDivElement) => void
  /**
   * Called when overlay is shown
   */
  onShow?: (overlayRef?: HTMLDivElement) => void
  children?: ((close?: () => void) => ReactNode) | ReactNode
  containerProps?: Box
}

export function Overlay({
  isShown: initShown,
  onShow,
  onHide,
  shouldCloseOnClick,
  shouldCloseOnEscapePress,
  children,
  containerProps,
  preventBodyScroll,
}: OverlayProps) {
  const theme = useTheme()
  const [isShown, setShown] = useState(initShown)
  const overlayRef = useRef<HTMLDivElement>(null)

  useLockBodyScroll(preventBodyScroll)

  useEffect(() => {
    setShown(initShown)
  }, [initShown])

  useEffect(() => {
    if (isShown) {
      document.body.addEventListener('keydown', onEscape, false)
      onShow(overlayRef.current)
    } else {
      document.body.removeEventListener('keydown', onEscape, false)
      onHide(overlayRef.current)
    }
  }, [isShown])

  const onEscape = (e: KeyboardEvent) => {
    if (e.keyCode === 27 && shouldCloseOnEscapePress) {
      close()
    }
  }
  const close = () => {
    onHide(overlayRef.current)
    setShown(false)
  }

  return (
    <AnimatePresence onExitComplete={() => onHide(overlayRef.current)}>
      {isShown && (
        <Stack value={theme.stackingOrder.overlay}>
          {zIndex => (
            <Portal>
              <Box
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: theme.transitions.default }}
                as={motion.div}
                onClick={e => {
                  if (e.target !== e.currentTarget || !shouldCloseOnClick) {
                    return
                  }
                  close()
                }}
                ref={overlayRef}
                top={0}
                left={0}
                right={0}
                bottom={0}
                position="fixed"
                {...containerProps}
                zIndex={zIndex}
                css={{
                  '&::before': {
                    backgroundColor: (t: Theme) =>
                      Color(t.tints.default)
                        .desaturate(0.9)
                        .darken(0.75)
                        .alpha(0.85)
                        .toString(),
                    left: 0,
                    top: 0,
                    position: 'fixed',
                    display: 'block',
                    width: `100%`,
                    height: '100%',
                    content: '" "',
                  },
                  ...css,
                }}
              >
                {typeof children === 'function' ? children(close) : children}
              </Box>
            </Portal>
          )}
        </Stack>
      )}
    </AnimatePresence>
  )
}

Overlay.defaultProps = {
  shouldCloseOnClick: true,
  shouldCloseOnEscapePress: true,
  onShow: () => {},
  onHide: () => {},
  preventBodyScroll: true,
  isShown: false,
}
