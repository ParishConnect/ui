import { useTheme } from '@emotion/core'
import { Variants, useAnimation, AnimationControls } from 'framer-motion'
import React, { ReactNode, RefObject, useEffect, useRef, useState } from 'react'
import { Box } from '../Box'
import getFittedPosition from './getPosition'
import { Portal } from './Portal'
import { Stack } from './Stack'

export enum Position {
  TOP = 'top',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  LEFT = 'left',
  RIGHT = 'right',
}

export type PositionerProps = {
  /**
   * The position the element that is being positioned is on.
   * Smart positioning might override this.
   */
  position?: Position

  /**
   * When true, show the element being positioned.
   */
  isShown: boolean

  /**
   * Function that returns the element being positioned.
   */
  children: (props: {
    animate: AnimationControls
    zIndex: number
    transformOrigin: string
    isShown: boolean
    ref: RefObject<HTMLElement>
  }) => ReactNode

  /**
   * The minimum distance from the body to the element being positioned.
   */
  bodyOffset: number

  /**
   * The minimum distance from the target to the element being positioned.
   */
  targetOffset: number

  /**
   * The action that should show the content
   */
  action?: 'click' | 'hover'

  /**
   * Function that should return a node for the target.
   * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
   */
  target: (props: { getRef: (ref: HTMLElement) => void; isShown?: boolean }) => ReactNode
}

const initState: { left: number; top: number; transformOrigin: string } = {
  left: null,
  top: null,
  transformOrigin: null,
}

const targetVariants: Variants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
}

export const Positioner = ({
  target,
  isShown: initShown,
  children,
  targetOffset,
  bodyOffset,
  action = 'click',
  position,
}: PositionerProps) => {
  const theme = useTheme()
  const targetRef = useRef<HTMLDivElement>()
  const contentRef = useRef<HTMLUnknownElement>()
  const lastAnimationFrame = useRef<any>(null)
  const [isShown, setShown] = useState(initShown)
  const animate = useAnimation()

  const [{ left, top, transformOrigin }, setPositionState] = useState(initState)

  useEffect(() => {
    animate.start({ x: left, y: top })
  }, [left, top])

  const update = (prevHeight = 0, prevWidth = 0) => {
    if (!isShown || !targetRef || !contentRef) return

    const targetRect = targetRef.current.getBoundingClientRect()
    const viewPortHeight = document.documentElement.clientHeight
    const viewPortWidth = document.documentElement.clientWidth

    let height: number
    let width: number

    const contentRect = contentRef.current.getBoundingClientRect()

    height = Math.round(contentRect.height)
    width = Math.round(contentRect.width)

    const { rect, transformOrigin } = getFittedPosition({
      position,
      targetRect,
      targetOffset,
      dimensions: {
        width,
        height,
      },
      viewport: {
        width: viewPortWidth,
        height: viewPortHeight,
      },
      viewportOffset: bodyOffset,
    })

    setPositionState({ left: rect.left, top: rect.top, transformOrigin })

    lastAnimationFrame.current = requestAnimationFrame(() => {
      update(height, width)
    })
  }

  useEffect(() => {
    update()

    return () => cancelAnimationFrame(lastAnimationFrame.current)
  })

  useEffect(() => {
    if (isShown) {
      ;(targetRef.current.firstElementChild as HTMLElement)?.focus()
    } else {
      ;(targetRef.current.firstElementChild as HTMLElement)?.blur()
    }
  }, [isShown])

  const renderTarget = () => {
    return (
      <Box
        onPointerEnter={() => action === 'hover' && setShown(true)}
        onPointerLeave={() => action === 'hover' && setShown(false)}
        onClick={() => action === 'click' && setShown(!isShown)}
        id="target"
        ref={targetRef}
      >
        {target}
      </Box>
    )
  }

  useEffect(() => {
    console.log(targetRef.current)
    console.log(contentRef.current)
  }, [targetRef, contentRef])

  return (
    <Stack value={theme.stackingOrder.positioner}>
      {zIndex => {
        return (
          <React.Fragment>
            {renderTarget()}
            <Portal>
              {children({ animate, transformOrigin, zIndex, isShown, ref: contentRef })}
            </Portal>
          </React.Fragment>
        )
      }}
    </Stack>
  )
}

Positioner.defaultProps = {
  position: Position.BOTTOM,
  bodyOffset: 6,
  targetOffset: 6,
  onOpenComplete: () => {},
  onCloseComplete: () => {},
}
