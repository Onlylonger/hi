import { useEffect, useRef, useState, type RefObject } from 'react'

// TODO: need to optimize
// 当鼠标移动的时候，鼠标会闪烁于 正常按钮和 cursor-col-resize 之间
export const HorizontalDragBlock = (props: {
  onTargetWidthChange?: (deltaX: number) => void
  className?: string
  targetWidth: number
  targetMinWidth: number
  targetMaxWidth: number
}) => {
  const {
    onTargetWidthChange,
    className,
    targetWidth,
    targetMinWidth,
    targetMaxWidth,
  } = props
  const initialWidthRef = useRef(targetWidth)

  const dom = useRef<HTMLDivElement>(null)
  const deltaX = useMouseDrag(dom)

  useEffect(() => {
    if (deltaX === 0) {
      initialWidthRef.current = targetWidth
    }

    if (typeof onTargetWidthChange === 'function') {
      onTargetWidthChange(
        clampWidth(
          targetMinWidth,
          targetMaxWidth,
          initialWidthRef.current + deltaX,
        ),
      )
    }
  }, [
    onTargetWidthChange,
    deltaX,
    targetWidth,
    initialWidthRef,
    targetMinWidth,
    targetMaxWidth,
  ])

  return <div ref={dom} className={className}></div>
}

function useMouseDrag(
  domRef?: RefObject<HTMLElement | null>,
  className?: string,
) {
  const drag = useRef(false)
  const startX = useRef(0)
  const [deltaX, setDeltaX] = useState(0)

  useEffect(() => {
    if (!isHTMLElement(domRef?.current)) return
    if (typeof window === 'undefined') return

    const domElement = domRef.current

    const handleMouseDown = (e: MouseEvent) => {
      drag.current = true
      startX.current = e.clientX

      if (className) {
        domElement.classList.add(className)
      }

      e.preventDefault()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!drag.current) return

      drag.current = true
      setDeltaX(e.clientX - startX.current)
    }

    const handleMouseUp = (e: MouseEvent) => {
      if (!drag.current) return

      drag.current = false
      setDeltaX(0)

      if (className) {
        domElement.classList.remove(className)
      }
    }

    domElement.addEventListener('mousedown', handleMouseDown)
    window.document.addEventListener('mousemove', handleMouseMove)
    window.document.addEventListener('mouseup', handleMouseUp)

    return () => {
      domElement.removeEventListener('mousedown', handleMouseDown)
      window.document.removeEventListener('mousemove', handleMouseMove)
      window.document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [domRef?.current, className])

  return deltaX
}

function clampWidth(leftMin: number, rightMax: number, value: number) {
  if (leftMin > rightMax)
    throw new Error('clampWidth: Min should be less than Max')

  return Math.max(
    Math.min(leftMin, rightMax),
    Math.min(Math.max(leftMin, rightMax), value),
  )
}

function isHTMLElement(obj: unknown) {
  return obj instanceof HTMLElement
}
