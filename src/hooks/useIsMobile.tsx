import { useEffect, useState } from 'react'
import useMediaQuery from './useMediaQuery'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuety = useMediaQuery('(max-width: 768px)')
    setIsMobile(mediaQuety)
  }, [])

  return isMobile
}

export default useIsMobile
