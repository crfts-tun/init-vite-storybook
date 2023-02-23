import React, { useEffect, useState } from 'react'

const useIsClient = (): boolean => {
  const [isClient, setClient] = useState<boolean>(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return isClient
}

export default useIsClient
