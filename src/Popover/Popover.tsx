import { useTheme } from '@emotion/core'
import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useEffect } from 'react'
import { ToggleLayer, useHover } from 'react-laag'
import { AnchorEnum } from 'react-laag/dist/ToggleLayer/types'
import ResizeObserver from 'resize-observer-polyfill'
import { Box, Pane, Card } from '../Box'
import { Portal } from '../LayoutComponents/Portal'
import { Stack } from '../LayoutComponents/Stack'
import { Paragraph } from '../Text'
import { useFocusInside } from '../utils/useFocusInside'

export type PopoverProps = Box & {
  content: ((props: { close: () => void; isOpen: boolean }) => ReactNode) | ReactNode
  position?: AnchorEnum
  children:
    | ((props: { close: () => void; open: () => void; isOpen: boolean }) => ReactNode)
    | ReactNode
  showDelay?: number
  hideDelay?: number
  targetOffset?: number
  bodyOffset?: number
}

export const Popover = ({
  children,
  content,
  position,
  showDelay,
  hideDelay,
  targetOffset,
  bodyOffset,
  ...props
}: PopoverProps) => {
  const theme = useTheme()

  return (
    <ToggleLayer
      ResizeObserver={ResizeObserver}
      closeOnDisappear="full"
      closeOnOutsideClick
      fixed
      placement={{
        anchor: position,
        autoAdjust: true,
        triggerOffset: targetOffset,
        scrollOffset: bodyOffset,
      }}
      renderLayer={({ isOpen, layerProps, layerSide, close }) => (
        <Stack value={theme.stackingOrder.positioner}>
          {zIndex => (
            <Portal>
              <AnimatePresence>
                {isOpen ? (
                  <Card
                    {...props}
                    {...(layerProps as any)}
                    backgroundColor="background"
                    elevation={2}
                    overflow="hidden"
                    minWidth={25}
                    role="dialog"
                    borderRadius={6}
                    as={motion.div}
                    initial={{
                      opacity: 0,
                      y: layerSide === 'top' ? targetOffset : -targetOffset,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: layerSide === 'top' ? targetOffset : -targetOffset,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 800,
                      damping: 25,
                      opacity: { type: 'tween', duration: 0.1 },
                    }}
                    zIndex={zIndex}
                  >
                    {typeof content === 'string' ? (
                      <Paragraph>{content}</Paragraph>
                    ) : typeof content === 'function' ? (
                      content({ close, isOpen })
                    ) : (
                      content
                    )}
                  </Card>
                ) : null}
              </AnimatePresence>
            </Portal>
          )}
        </Stack>
      )}
    >
      {({ triggerRef, close, open, toggle, isOpen }) => (
        <Box
          as="span"
          css={{
            display: 'inline-flex',
            '>': {
              flex: 1,
            },
          }}
          ref={triggerRef}
          onClick={toggle}
        >
          {typeof children === 'function' ? children({ close, open, isOpen }) : children}
        </Box>
      )}
    </ToggleLayer>
  )
}

Popover.defaultProps = {
  isShown: true,
  position: 'BOTTOM_CENTER',
  showDelay: 0,
  hideDelay: 125,
  targetOffset: 8,
  bodyOffset: 12,
}
