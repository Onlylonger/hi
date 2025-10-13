import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  token: string
  updateToken: (value: string) => void
  removeToken: () => void
}

const name = 'auth'

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: '',

      updateToken(value) {
        set({
          token: value,
        })
      },
      removeToken() {
        const { updateToken } = get()

        updateToken('')
      },
    }),
    {
      name,
    },
  ),
)
