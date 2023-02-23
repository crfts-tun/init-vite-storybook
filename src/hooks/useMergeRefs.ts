import React, { MutableRefObject, LegacyRef, RefCallback } from 'react'

const useMergeRefs = <T = any>(refs: Array<LegacyRef<T> | MutableRefObject<T>>): RefCallback<T> => {
  return (value) => {
    refs?.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ;(ref as MutableRefObject<T | null>).current = value
      }
    })
  }
}

export default useMergeRefs
