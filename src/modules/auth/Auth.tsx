import type { ReactNode } from 'react'
import { useAuthStore } from './store'

interface AuthProps {
  fallback?: ReactNode
  children: ReactNode
}

export default function Auth(props: AuthProps) {
  const { fallback, children } = props

  const token = useAuthStore((state) => state.token)

  if (!token) return fallback || '403'

  return children
}
