import { useTheme } from '@emotion/core'
import { AnimatePresence, motion } from 'framer-motion'
import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Box } from '../Box'
import { Portal } from '../LayoutComponents/Portal'
import { Stack } from '../LayoutComponents/Stack'
import { Intent } from '../theme'
import { Toast } from './Toast'

export const ToasterContext = createContext<{
  add: (toast: ToastConfig) => void
  remove: (id: ToastConfig['id']) => void
  closeAll: () => void
  toasts: ToastConfig[]
}>(null)

export type ToasterProps = {
  children?: ReactNode
  position?: 'left' | 'center' | 'right'
}

export type ToastConfig = {
  /**
   * Set a custom ID on a toast if you want to make sure to avoid duplicates
   */
  id?: string | number
  title: string
  description?: string
  intent?: Intent
  isShown?: boolean
}

/**
 * The Context Provider for toasts
 */
export function Toaster({ children, position = 'left' }: ToasterProps) {
  const [toasts, setToasts] = useState<ToastConfig[]>([])
  const theme = useTheme()

  const add = (toast: ToastConfig) => {
    if (toast.id) {
      if (toasts.find(t => t.id === toast.id)) {
        return
      }
    } else {
      toast.id = +new Date()
    }

    toast.isShown = true

    setToasts([...toasts, toast])
  }

  const remove = (id: ToastConfig['id']) => {
    setToasts(toasts.filter(t => t.id !== id))
  }

  // Close toast first so it will be removed when the animation ends
  const close = (id: ToastConfig['id']) => {
    setToasts(toasts.map(t => (t.id === id ? { ...t, isShown: false } : t)))
  }

  const closeAll = () => {
    setToasts([])
  }

  const positionProps = {
    left: { css: { left: 2, alignItems: 'flex-start' } },
    right: { css: { right: 2, alignItems: 'flex-end' } },
    center: { css: { transform: 'translateX(-50%)', left: '50%', alignItems: 'center' } },
  }

  const motionProps = {
    left: {
      exit: { x: '-100%', opacity: 0 },
      initial: { x: '-100%' },
      animate: { x: '0%' },
    },
    right: {
      exit: { x: '100%', opacity: 0 },
      initial: { x: '100%' },
      animate: { x: '0%' },
    },
    center: {
      exit: { scale: 0.75, opacity: 0 },
      initial: { y: '-100%' },
      animate: { y: '0%' },
    },
  }

  const onRemove = (id: ToastConfig['id']) => () => {
    close(id)
    remove(id)
  }

  return (
    <ToasterContext.Provider value={{ add, remove, closeAll, toasts }}>
      {children}
      <Stack value={theme.stackingOrder.toaster}>
        {zIndex => (
          <Portal>
            <Box
              position="fixed"
              display="flex"
              flexDirection="column"
              height={0}
              top={2}
              zIndex={zIndex}
              {...positionProps[position]}
            >
              <AnimatePresence initial={false}>
                {toasts.map(({ id, description, ...toast }) =>
                  toast.isShown ? (
                    <Toast
                      positionTransition={{
                        type: 'spring',
                        damping: 10,
                        stiffness: 100,
                      }}
                      as={motion.div}
                      {...motionProps[position]}
                      key={id}
                      marginBottom={1}
                      {...toast}
                      onRemove={onRemove(id)}
                    >
                      {description}
                    </Toast>
                  ) : null,
                )}
              </AnimatePresence>
            </Box>
          </Portal>
        )}
      </Stack>
    </ToasterContext.Provider>
  )
}

export const useToaster = () => useContext(ToasterContext)
