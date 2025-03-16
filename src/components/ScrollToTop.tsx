'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import useViewportWidth from '@/hooks/useViewportWidth'

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false)
  const { isMobile } = useViewportWidth()

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Only show button if screen width is >= 768px and should show based on scroll position
  return (!isMobile && showButton) ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-neutral-700 text-orange-400 p-3 rounded-full shadow-sm shadow-neutral-700 transition-all duration-300 z-50 opacity-50 hover:opacity-100"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  ) : null
}
