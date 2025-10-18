import { cloneDeep } from 'lodash-es'
import { createContext, useContext, useMemo, useState } from 'react'
import type { createTab } from './Tree/const'

type TabItem = ReturnType<typeof createTab>

type ContextState = {
  selectedIds: string[]
  activeTabId: string | null
  tabsList: TabItem[]
  updateSelectedIds: (index: number) => void
  addTab: (item: TabItem) => void
  addTabWithCaseCheck: (item: TabItem) => void
  updateActiveTabId: (id: string) => void
  getMatchAsideTab: (asideId?: string) => TabItem | undefined
  updateTab: (id: string, item: TabItem) => void
  removeTab: (id: string) => void
}

const ProjectApiContentContext = createContext<ContextState | null>(null)

export const ProjectApiContentContextProvider: React.FC<
  React.PropsWithChildren<{ multi?: boolean }>
> = (props) => {
  const { children, multi = false } = props

  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [tabsList, setTabsList] = useState<ContextState['tabsList']>([])
  const [activeTabId, setActiveTabId] = useState<string | null>(null)

  const contextValue = useMemo(() => {
    const tmp: ContextState = {
      selectedIds,
      activeTabId,
      tabsList,
      updateSelectedIds(index) {
        const strIndex = String(index)
        if (selectedIds.includes(strIndex)) return

        setSelectedIds((pre) => (multi ? [...pre, strIndex] : [strIndex]))
      },
      updateActiveTabId(id) {
        setActiveTabId(id)
      },
      /** 是否有匹配侧边栏节点的 tab */
      getMatchAsideTab(asideId) {
        if (asideId === null || asideId === undefined) return
        return tabsList.find((tab) => String(tab.asideMeta?.id) === asideId)
      },
      addTab(item) {
        if (tabsList.find((tab) => tab.id === item.id)) {
          tmp.updateActiveTabId(item.id)
          return
        }

        setTabsList((pre) => [...pre, item])
        tmp.updateActiveTabId(item.id)
      },
      addTabWithCaseCheck(item) {
        const matchAsideItem = tmp.getMatchAsideTab(item.asideMeta?.id)
        if (!matchAsideItem) {
          tmp.addTab(item)
        } else {
          tmp.updateActiveTabId(matchAsideItem.id)
          tmp.updateTab(matchAsideItem.id, {
            ...matchAsideItem,
            fixed: matchAsideItem.fixed ? matchAsideItem.fixed : item.fixed,
          })
        }
      },
      updateTab(id: string, item: any) {
        const newTabsList = cloneDeep(tabsList)
        const updateTabIndex = newTabsList.findIndex((tab) => tab.id === id)
        newTabsList[updateTabIndex] = item
        setTabsList(newTabsList)
      },
      removeTab(id: string) {
        const removeTabIndex = tabsList.findIndex((tab) => tab.id === id)
        if (removeTabIndex > -1) {
          const newTabList = [...tabsList]
          newTabList.splice(removeTabIndex, 1)
          setTabsList(newTabList)
          // TODO: 这里需要判断删除的 Tab 是不是当前选择的，如果是需要决定是否自动移动到下一个 tab
          // tmp.updateActiveTabId(id)
        }
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
  }, [selectedIds, activeTabId, multi, tabsList])

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
