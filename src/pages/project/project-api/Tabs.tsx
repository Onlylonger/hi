import { Button } from '@shilong/react'
import {
  useProjectApiContentContext,
  type TabItem,
} from './ProjectApiContentContext'
import clsx from 'clsx'

const Tabs = () => {
  const { tabsList, activeTabId, updateActiveTabId, updateSelectedIds } =
    useProjectApiContentContext()

  const handleSelectTab = (tab: TabItem) => {
    updateActiveTabId(tab.id)
    if (tab.asideMeta?.id) updateSelectedIds(tab.asideMeta.id)
  }

  return (
    <div className="flex">
      {tabsList.map((tab) => (
        <Button
          variant={activeTabId === tab.id ? 'outline' : 'ghost'}
          className={clsx(!tab.fixed && '!italic')}
          key={tab.id}
          onClick={() => handleSelectTab(tab)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  )
}

export { Tabs }
