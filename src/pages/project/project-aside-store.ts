import { create } from 'zustand'

export const ProjectMenuType = {
  Api: 'api',
  Test: 'test',
  Setting: 'setting',
} as const

type ProjectMenuType = (typeof ProjectMenuType)[keyof typeof ProjectMenuType]

const getDefaultValue = () => {
  return {
    current: ProjectMenuType.Api,
    menuList: [
      {
        label: 'APIs',
        key: ProjectMenuType.Api,
        icon: 'api',
      },
      {
        label: 'Tests',
        key: ProjectMenuType.Test,
        icon: 'test',
      },
      {
        label: 'Setting',
        key: ProjectMenuType.Setting,
        icon: 'setting',
      },
    ],
  }
}

interface ProjectAsideState {
  current: ProjectMenuType
  menuList: ReturnType<typeof getDefaultValue>['menuList']

  reset: () => void
  updateCurrent: (value: ProjectMenuType) => void
  updateMenuList: (value: any[]) => void
}

export const useProjectAsideStore = create<ProjectAsideState>()((set) => ({
  ...getDefaultValue(),

  reset() {
    set({
      ...getDefaultValue(),
    })
  },

  updateCurrent(value) {
    set({
      current: value,
    })
  },

  updateMenuList(value) {
    set({
      menuList: value,
    })
  },
}))
