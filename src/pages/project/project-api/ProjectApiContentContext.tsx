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

  const contextValue = useMemo(() => {
    return {
      selectedIds,
      addSelectAndTab(index: number) {
        const strIndex = String(index)
        if (selectedIds.includes(strIndex)) return

        setSelectedIds((pre) => (multi ? [...pre, strIndex] : [strIndex]))
        //
      },
    }
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
