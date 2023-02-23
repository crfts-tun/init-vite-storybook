/** libs */
import React, { useEffect, useCallback, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

const useClickOutside = (refs: RefObject<Element | null>[], handler: (event: Event) => void): void => {
  const listener = useCallback(
    (event: Event) => {
      const results: boolean[] = refs.map((ref) => {
        const el = ref?.current
        return !el || el.contains(event.target as Node) ? true : false
      })

      if (results.includes(true)) return

      /** Call the handler only if the click is outside of the element passed. */
      handler(event)
    },
    [handler, refs],
  )

  useEffect(() => {
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [listener])
}

export default useClickOutside
