import { useEffect } from 'react'

export function useFocusInside(ref: HTMLElement, isShown: boolean) {
  useEffect(() => {
    requestAnimationFrame(() => {
      if (ref == null || document.activeElement == null || !isShown) return

      const isFocusOutside = !ref.contains(document.activeElement)
      if (isFocusOutside) {
        const autofocusElement = ref.querySelector<HTMLElement>('[autofocus]')
        const wrapperElement = ref.querySelector<HTMLElement>('[tabindex]')
        const buttonElement = ref.querySelector('button')

        if (autofocusElement) {
          autofocusElement.focus()
        } else if (wrapperElement) {
          wrapperElement.focus()
        } else if (buttonElement) {
          buttonElement.focus()
        }
      }
    })
  }, [ref, isShown])
}
