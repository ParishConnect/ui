import React, { ReactNode, useEffect, useRef } from 'react'
import { Pane } from '../Box'

const KeyCodes = {
  ArrowUp: 38,
  ArrowDown: 40,
  Home: 36,
  End: 35,
}

export function Menu({ children }: { children?: ReactNode }) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const menuItems = Array.from(
      menuRef.current.querySelectorAll<HTMLInputElement>(
        '[role="menuitemradio"], [role="menuitem"]',
      ),
    )

    if (menuItems.length === 0) {
      throw new Error('The menu has no menu items')
    }

    const firstItem = menuItems[0]
    const lastItem = menuItems[menuItems.length - 1]

    const focusNext = (currentItem: HTMLInputElement, startItem: HTMLInputElement) => {
      // Determine which item is the startItem (first or last)
      const goingDown = startItem === firstItem

      // Helper function for getting next legitimate element
      const move = (elem: HTMLInputElement) => {
        const indexOfItem = menuItems.indexOf(elem)

        if (goingDown) {
          if (indexOfItem < menuItems.length - 1) {
            return menuItems[indexOfItem + 1]
          }

          return startItem
        }

        if (indexOfItem - 1 > -1) {
          return menuItems[indexOfItem - 1]
        }

        return startItem
      }

      // Make first move
      let nextItem = move(currentItem)

      // If the menuitem is disabled move on
      while (nextItem.disabled) {
        nextItem = move(nextItem)
      }

      // Focus the first one that's not disabled
      nextItem.focus()
    }

    menuItems.forEach(menuItem => {
      // Handle key presses for menuItem
      menuItem.addEventListener('keydown', e => {
        // Go to next/previous item if it exists
        // or loop around

        if (e.keyCode === KeyCodes.ArrowDown) {
          e.preventDefault()
          focusNext(menuItem, firstItem)
        }

        if (e.keyCode === KeyCodes.ArrowUp) {
          e.preventDefault()
          focusNext(menuItem, lastItem)
        }

        if (e.keyCode === KeyCodes.Home) {
          e.preventDefault()
          firstItem.focus()
        }

        if (e.keyCode === KeyCodes.End) {
          e.preventDefault()
          lastItem.focus()
        }
      })
    })
  }, [])

  return (
    <Pane as="nav" role="menu" outline="none" ref={menuRef}>
      {children}
    </Pane>
  )
}
