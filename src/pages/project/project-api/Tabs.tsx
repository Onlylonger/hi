import { Button } from '@shilong/react'
import {
  useProjectApiContentContext,
  type TabItem,
} from './ProjectApiContentContext'
import clsx from 'clsx'

const Tabs = () => {
  const {
    tabsList,
    activeTabId,
    updateActiveTabId,
    updateSelectedIds,
    updateTab,
    reactWindowList,
  } = useProjectApiContentContext()

  const handleSelectTab = (tab: TabItem) => {
    updateActiveTabId(tab.id)
    if (tab.asideMeta?.id) {
      updateSelectedIds(tab.asideMeta.id)
      reactWindowList?.scrollToRow({
        align: 'center', // optional
        behavior: 'auto', // optional
        index: Number(tab.asideMeta.id),
      })
    }
  }

  const handleFixedTab = (tab: TabItem) => {
    if (!tab.fixed)
      updateTab(tab.id, {
        ...tab,
        fixed: true,
      })
  }

  return (
    <div className="flex w-full overflow-x-auto">
      {tabsList.map((tab) => (
        <Button
          variant={activeTabId === tab.id ? 'outline' : 'ghost'}
          className={clsx(!tab.fixed && '!italic')}
          key={tab.id}
          onClick={() => handleSelectTab(tab)}
          onDoubleClick={() => handleFixedTab(tab)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  )
}

export { Tabs }
