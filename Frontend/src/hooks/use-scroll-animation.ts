"use client"

import { useEffect, useRef, useState, type RefObject } from "react"

export function useScrollAnimation<T extends HTMLElement>(): [
  RefObject<T>,
  boolean
] {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return;

    // Ensure this runs only on the client
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(element)
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      )

      observer.observe(element)

      return () => {
        if (element) {
          observer.unobserve(element)
        }
      }
    } else {
        // Fallback for SSR or older browsers
        setIsVisible(true);
    }
  }, [])

  return [ref, isVisible]
}
