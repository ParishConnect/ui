import { useTheme } from '@emotion/core'
import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useEffect } from 'react'
import { ToggleLayer, useHover } from 'react-laag'
import { AnchorEnum } from 'react-laag/dist/ToggleLayer/types'
import ResizeObserver from 'resize-observer-polyfill'
import { Box } from '../Box'
import { Portal } from '../LayoutComponents/Portal'
import { Stack } from '../LayoutComponents/Stack'
import { Paragraph } from '../Text'

export type TooltipProps = Box & {
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

export const Tooltip = ({
  children,
  content,
  position,
  showDelay,
  hideDelay,
  targetOffset,
  bodyOffset,
  ...props
}: TooltipProps) => {
  const [isOpen, hoverProps] = useHover({
    hideOnScroll: false,
    delayEnter: showDelay,
    delayLeave: hideDelay,
  })

  const theme = useTheme()

  return (
    <ToggleLayer
      ResizeObserver={ResizeObserver}
      isOpen={isOpen}
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
                  <Box
                    {...props}
                    {...(layerProps as any)}
                    backgroundColor="text"
                    color="background"
                    borderRadius={3}
                    paddingX={1}
                    paddingY={0.5}
                    as={motion.div}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: layerSide === 'top' ? 8 : -8,
                    }}
                    maxWidth={30}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: layerSide === 'top' ? 8 : -8,
                    }}
                    transition={{
                      type: 'tween',
                      ease: 'backOut',
                      duration: 0.15,
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
                  </Box>
                ) : null}
              </AnimatePresence>
            </Portal>
          )}
        </Stack>
      )}
    >
      {({ triggerRef, close, open, isOpen }) => (
        <Box
          as="span"
          css={{
            display: 'inline-flex',
            '>': {
              flex: 1,
            },
          }}
          ref={triggerRef}
          {...hoverProps}
        >
          {typeof children === 'function' ? children({ close, open, isOpen }) : children}
        </Box>
      )}
    </ToggleLayer>
  )
}

Tooltip.defaultProps = {
  isShown: true,
  position: 'TOP_CENTER',
  showDelay: 0,
  hideDelay: 125,
  targetOffset: 8,
  bodyOffset: 12,
}
