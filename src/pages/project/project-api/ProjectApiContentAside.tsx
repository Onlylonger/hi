import { HorizontalDragBlock } from '../HorizontalDragBlock'
import { Button, Input, Popover } from '@shilong/react'
import { useProjectContentConfigStore } from '../project-content-config-store'
import { Tree } from './Tree/Tree'
import { useDeferredValue, useState } from 'react'
import { Plus } from 'lucide-react'

export const ProjectApiContentAside = () => {
  const sideWidth = useProjectContentConfigStore((state) => state.sideWidth)
  const updateSideWidth = useProjectContentConfigStore(
    (state) => state.updateSideWidth,
  )
  const [searchValue, setSearchValue] = useState('')

  const deferSearchValue = useDeferredValue(searchValue)

  return (
    <div
      className="relative h-full min-h-0 shrink-0 overflow-hidden"
      style={{ width: `${sideWidth}px` }}
    >
      <div className="flex h-full flex-col px-2 py-1">
        <div className="flex h-[100px] shrink-0 justify-between gap-2">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Popover
            trigger={
              <Button variant="outline">
                <Plus />
              </Button>
            }
            hover
            offsetHeight={5}
            placement="bottom-end"
          >
            <div className="w-[270px] rounded-md border border-neutral-100 bg-white p-1 shadow-md">
              <Button className="w-full" variant="ghost" onClick={() => {}}>
                <Plus /> <span>New Module</span>
              </Button>
            </div>
          </Popover>
        </div>
        <div className="flex-1 overflow-y-auto pb-5">
          <Tree filterValue={deferSearchValue} />
        </div>
      </div>
      <HorizontalDragBlock
        className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize border-r border-r-neutral-200 bg-transparent hover:border-r-neutral-500"
        targetWidth={sideWidth}
        targetMinWidth={1}
        targetMaxWidth={500}
        onTargetWidthChange={(val) => {
          updateSideWidth(val)
        }}
      />
    </div>
  )
}
