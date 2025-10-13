import { useNavigate } from 'react-router'
import { useAuthStore } from '../../modules/auth'
import { Button } from '@shilong/react'

export default function LoginPage() {
  const nav = useNavigate()
  const updateToken = useAuthStore((state) => state.updateToken)

  const handleLogin = () => {
    updateToken('abc')
    nav('/dashboard')
  }

  return (
    <div className="">
      <h1>Login Page</h1>
      <Button onClick={handleLogin} type="button">
        login
      </Button>
    </div>
  )
}
