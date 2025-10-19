import { useProjectApiContentContext } from './ProjectApiContentContext'
import { useMemo } from 'react'

export const ProjectApiContentMain = () => {
  const { tabsList, activeTabId } = useProjectApiContentContext()

  const currentActiveTab = useMemo(() => {
    return tabsList.find((tab) => tab.id === activeTabId)
  }, [tabsList, activeTabId])

  if (!currentActiveTab) return '404'

  return <div>{currentActiveTab.label}</div>
}
