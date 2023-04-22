import React, { useEffect, useRef } from 'react'

interface IScrollContainerProps {
  onScrollNearEndOfTheContainer: () => void
  className?: string
  children?: React.ReactNode
}

export const ScrollContainer: React.FC<IScrollContainerProps> = ({
  onScrollNearEndOfTheContainer,
  className,
  children,
}: IScrollContainerProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const interceptorObserverRef = useRef<IntersectionObserver | null>(null)
  useEffect(() => {
    interceptorObserverRef.current = new IntersectionObserver(
      onScrollNearEndOfTheContainer,
      {
        root: null,
        rootMargin: '500px',
        threshold: 1,
      },
    )
    if (interceptorObserverRef.current && targetRef.current) {
      console.log('Start observing')
      interceptorObserverRef.current.observe(targetRef.current)
    }
    return () => {
      interceptorObserverRef.current?.disconnect()
    }
  }, [])
  return (
    <div className={className}>
      {children}
      <div ref={targetRef}>Target</div>
    </div>
  )
}
