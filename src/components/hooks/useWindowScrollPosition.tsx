import  React, { useState, useEffect } from "react"
const isWindowAvailable = typeof window !== "undefined"

const getPosition = () => isWindowAvailable ? window.pageYOffset : 0

const useWindowScrollPosition = () => {

  const [scrollPosition, setScrollPosition] = useState(getPosition())

  useEffect(() => {
   
    if (!isWindowAvailable) {
      return 
    }
    const handleScroll = () => {
      setScrollPosition(getPosition())
    }
     
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollPosition
}

export default useWindowScrollPosition