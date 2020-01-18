import { useTheme } from '@emotion/core'
import { motion, PanInfo } from 'framer-motion'
import React from 'react'
import { ResponsiveValue } from 'styled-system'
import { Box, Card, Pane } from '../Box'
import { Button } from '../Button'
import { CloseIcon } from '../Icon'
import { Overlay, OverlayProps } from '../LayoutComponents'
import { Text } from '../Text'
import { Heading } from '../Text/Heading'
import { Intent } from '../theme'

export type DialogProps = Box &
  Omit<OverlayProps, 'onHide' | 'onShow'> & {
    onOpen?: (close: () => void) => void
    onCancel?: (close: () => void) => void
    overlayProps?: Box
    sideOffset?: ResponsiveValue<string | number>
    topOffset?: ResponsiveValue<string | number>
    minHeightContent?: ResponsiveValue<string | number>
    contentContainerProps?: Box
    hasHeader?: boolean
    hasClose?: boolean
    hasCancel?: boolean
    hasFooter?: boolean
    loading?: boolean
    disabled?: boolean
    cancelLabel?: string
    confirmLabel?: string
    intent?: Intent
  }

export function Dialog({
  onCancel,
  onOpen,
  isShown,
  shouldCloseOnClick,
  shouldCloseOnEscapePress,
  overlayProps,
  preventBodyScroll,
  width,
  minHeightContent,
  containerProps,
  sideOffset,
  topOffset,
  contentContainerProps,
  children,
  hasHeader,
  hasClose,
  hasCancel,
  hasFooter,
  cancelLabel,
  loading,
  disabled,
  confirmLabel,
  title,
  intent,
  onConfirm,
  icon: ConfirmIcon,
}: DialogProps) {
  const theme = useTheme()

  const sideOffsetMargin = theme.safeLoop(sideOffset, offset =>
    Number.isInteger(offset) ? `${sideOffset}px` : sideOffset,
  )
  const maxWidth = theme.safeLoop(sideOffsetMargin, offset => `calc(100% - ${offset} * 2)`)
  const maxHeight = theme.safeLoop(topOffset, offset => `calc(100% - ${offset} * 2)`)

  return (
    <Overlay
      onHide={onCancel as any}
      onShow={onOpen as any}
      shouldCloseOnClick={shouldCloseOnClick}
      shouldCloseOnEscapePress={shouldCloseOnEscapePress}
      isShown={isShown}
      preventBodyScroll={preventBodyScroll}
      containerProps={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        ...overlayProps,
      }}
    >
      {close => (
        <Card
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={(_: PointerEvent, info: PanInfo) => {
            if (info.velocity.y > 50) {
              close()
            }
          }}
          as={motion.div}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          exit={{ y: 50 }}
          transition={{
            type: 'spring',
            damping: 12,
            stiffness: 100,
          }}
          role="dialog"
          backgroundColor="background"
          elevation={4}
          flexDirection="column"
          display="flex"
          maxWidth={['100%', maxWidth]}
          alignSelf={['flex-end', 'initial']}
          maxHeight={maxHeight}
          marginTop={topOffset}
          marginBottom={[1, 0]}
          marginX={[0, sideOffsetMargin]}
          width={width}
          zIndex="inherit"
          borderRadius={10}
          {...containerProps}
        >
          {hasHeader && (
            <Pane
              padding={2}
              flexShrink={0}
              borderBottom="muted"
              display="flex"
              alignItems="center"
            >
              <Heading level={600} flex="1">
                {title}
              </Heading>
              {hasClose && (
                <Button
                  appearance="minimal"
                  icon={CloseIcon}
                  fontSize={1}
                  iconSize={1.75}
                  onClick={() => onCancel(close)}
                />
              )}
            </Pane>
          )}
          <Box
            display="flex"
            overflow="auto"
            padding={2}
            flexDirection="column"
            minHeight={minHeightContent}
            {...(contentContainerProps as any)}
          >
            <Box>
              {typeof children === 'function' ? (
                children(close)
              ) : typeof children === 'string' ? (
                <Text>{children}</Text>
              ) : (
                children
              )}
            </Box>
          </Box>
          {hasFooter && (
            <Pane borderTop="muted">
              <Pane padding={2} textAlign="right">
                {/* Cancel should be first to make sure focus gets on it first. */}
                {hasCancel && (
                  <Button autoFocus tabIndex={0} onClick={() => onCancel(close)}>
                    {cancelLabel}
                  </Button>
                )}

                <Button
                  tabIndex={0}
                  marginLeft={1}
                  appearance="primary"
                  loading={loading}
                  disabled={disabled}
                  onClick={() => onConfirm(close)}
                  intent={intent}
                  iconBefore={ConfirmIcon}
                >
                  {confirmLabel}
                </Button>
              </Pane>
            </Pane>
          )}
        </Card>
      )}
    </Overlay>
  )
}

Dialog.defaultProps = {
  isShown: false,
  hasHeader: true,
  hasClose: true,
  hasFooter: true,
  hasCancel: true,
  intent: 'default',
  width: 70,
  topOffset: '12vmin',
  sideOffset: '16px',
  minHeightContent: 10,
  confirmLabel: 'Confirm',
  isConfirmLoading: false,
  isConfirmDisabled: false,
  cancelLabel: 'Cancel',
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  onCancel: (close: () => void) => close(),
  onConfirm: (close: () => void) => close(),
  preventBodyScrolling: false,
  overlayProps: {},
}
