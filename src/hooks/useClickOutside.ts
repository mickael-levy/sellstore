import { useEffect, RefObject } from 'react'

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  closeMenu: () => void
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return
      }
      closeMenu()
    }

    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, closeMenu])
}
