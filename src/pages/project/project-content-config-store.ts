import { create } from 'zustand'

const getDefaultValue = () => {
  return {
    sideWidth: 200,
  }
}

interface ProjectContentConfigState {
  sideWidth: number

  reset: () => void
  updateSideWidth: (value: number) => void
}

export const useProjectContentConfigStore = create<ProjectContentConfigState>()(
  (set) => ({
    ...getDefaultValue(),

    reset() {
      set({
        ...getDefaultValue(),
      })
    },

    updateSideWidth(value) {
      set({
        sideWidth: value,
      })
    },
  }),
)
