import React, { useCallback, useLayoutEffect, useRef } from 'react'

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
  const intersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].intersectionRatio === 1) {
        onScrollNearEndOfTheContainer()
      }
    },
    [onScrollNearEndOfTheContainer],
  )
  useLayoutEffect(() => {
    interceptorObserverRef.current = new IntersectionObserver(
      intersectionObserverCallback,
      {
        root: null,
        rootMargin: '300px',
        threshold: 1,
      },
    )
    if (interceptorObserverRef.current && targetRef.current) {
      interceptorObserverRef.current.observe(targetRef.current)
    }
    return () => {
      interceptorObserverRef.current?.disconnect()
    }
  }, [intersectionObserverCallback])
  return (
    <div className={className}>
      {children}
      <div ref={targetRef}>Target</div>
    </div>
  )
}
