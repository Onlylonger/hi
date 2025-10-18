import { HorizontalDragBlock } from '../HorizontalDragBlock'
import { Input } from '@shilong/react'
import { useProjectContentConfigStore } from '../project-content-config-store'
import { Tree } from './Tree/Tree'
import { useDeferredValue, useState } from 'react'

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
        <div className="h-[100px] shrink-0">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
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
