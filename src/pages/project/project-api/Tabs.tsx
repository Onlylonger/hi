import { Button } from '@shilong/react'
import { useProjectApiContentContext } from './ProjectApiContentContext'
import clsx from 'clsx'

const Tabs = () => {
  const { tabsList, activeTabId } = useProjectApiContentContext()

  return (
    <div className="flex">
      {tabsList.map((tab) => (
        <Button
          variant={activeTabId === tab.id ? 'outline' : 'ghost'}
          className={clsx(!tab.fixed && '!italic')}
          key={tab.id}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  )
}

export { Tabs }
