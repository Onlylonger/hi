import type { ListState } from './Example'

// <begin>

import { type RowComponentProps } from 'react-window'
import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'

function RowComponent({
  index,
  listState,
  style,
}: RowComponentProps<{
  listState: ListState
}>) {
  const isCollapsed = listState.isRowCollapsed(index)
  const text = listState.getText(index)

  return (
    <div
      className={clsx('cursor-pointer p-2 hover:bg-neutral-400', {
        'bg-white/10': index % 2 === 0,
        truncate: isCollapsed,
      })}
      onClick={() => listState.toggleRow(index)}
      style={style}
    >
      <ToggleIcon isCollapsed={isCollapsed} /> {index}: {text}
    </div>
  )
}

// <end>

export { RowComponent }

function ToggleIcon({ isCollapsed }: { isCollapsed: boolean }) {
  const Icon = isCollapsed ? Plus : Minus
  return <Icon className="inline-block size-4" />
}
