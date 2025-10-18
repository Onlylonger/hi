import { Button } from '@shilong/react'
import { useProjectApiContentContext } from './ProjectApiContentContext'

const Tabs = () => {
  const { selectedIds } = useProjectApiContentContext()

  return (
    <div className="flex">
      {selectedIds.map((id) => (
        <Button
          variant={selectedIds.includes(id) ? 'default' : 'ghost'}
          key={id}
        >
          Tab {id}
        </Button>
      ))}
    </div>
  )
}

export { Tabs }
