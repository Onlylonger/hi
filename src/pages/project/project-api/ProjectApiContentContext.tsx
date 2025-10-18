import { createContext, useContext, useMemo, useState } from 'react'

const ProjectApiContentContext = createContext<{
  selectedIds: string[]
  addSelectAndTab: (index: number) => void
} | null>(null)

// TODO: 需要调整为 单击侧边栏是 临时状态，双击才是固定该 tab
export const ProjectApiContentContextProvider: React.FC<
  React.PropsWithChildren<{ multi?: boolean }>
> = (props) => {
  const { children, multi = false } = props

  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [tabsList, setTabsList] = useState<any[]>([])
  const [activeTabId, setActiveTabId] = useState<string | null>()

  const contextValue = useMemo(() => {
    const tmp = {
      selectedIds,
      activeTabId,
      tabsList,
      updateSelectedIds(ids: string[]) {
        setSelectedIds(ids)
      },
      updateActiveTabId(id: string) {
        setActiveTabId(id)
      },
      addTab(id: string) {
        if (tabsList.find((tab) => tab.id === id)) {
          tmp.updateActiveTabId(id)
          return
        }

        setTabsList((pre) => [...pre, id])
      },
      addSelectAndTab(index: number) {
        const strIndex = String(index)
        if (selectedIds.includes(strIndex)) return

        setSelectedIds((pre) => (multi ? [...pre, strIndex] : [strIndex]))
        //
      },
      addNewModule() {
        // TODO: 新增模块
      },
      addFolder() {
        // TODO: 新增目录
      },
      addEndpoint() {
        // TODO: 新增接口
      },
    }

    return tmp
  }, [selectedIds, multi])

  return (
    <ProjectApiContentContext.Provider value={contextValue}>
      {children}
    </ProjectApiContentContext.Provider>
  )
}

export const useProjectApiContentContext = () => {
  const val = useContext(ProjectApiContentContext)

  if (!val)
    throw new Error(
      'useProjectApiContentContext must be used within ProjectApiContentContext.Provider',
    )

  return val
}
