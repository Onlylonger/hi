import { List, useDynamicRowHeight, type RowComponentProps } from 'react-window'
import { useLorem } from './useLorem'
import { useProjectApiContentContext } from '../ProjectApiContentContext'
import clsx from 'clsx'
import { createTab } from './const'

const MainRowComponent = (props: RowComponentProps<{}>) => {
  const { style, index, lorem } = props

  const {
    selectedIds,
    updateSelectedIds,
    addTabWithCaseCheck,
    updateTab,
    getMatchAsideTab,
  } = useProjectApiContentContext()
  // console.log(props)

  // TODO: 这里还需要在自动 定位到 tab 的横向滚动条那里
  const handleClickRow = () => {
    updateSelectedIds(String(index))
    addTabWithCaseCheck(
      createTab({
        label: 'ceshi' + index,
        asideMeta: {
          id: String(index),
        },
        fixed: false,
      }),
    )
  }

  const handleDoubleClickRow = () => {
    const matchTab = getMatchAsideTab(String(index))
    if (matchTab) {
      updateTab(matchTab.id, {
        ...matchTab,
        fixed: true,
      })
    }
  }

  return (
    <div
      style={style}
      className={clsx(
        selectedIds.includes(String(index)) && 'bg-neutral-100',
        'cursor-pointer hover:bg-neutral-100',
      )}
      onClick={() => handleClickRow()}
      onDoubleClick={() => handleDoubleClickRow()}
    >
      Row
    </div>
  )
}

const Tree = (props: { filterValue?: string }) => {
  const { filterValue } = props

  const { reactWindowSetList } = useProjectApiContentContext()

  const lorem = useLorem(filterValue)

  const rowHeight = useDynamicRowHeight({
    defaultRowHeight: 50,
  })

  return (
    <List
      listRef={reactWindowSetList}
      rowComponent={MainRowComponent}
      rowCount={lorem.length}
      rowHeight={rowHeight}
      rowProps={{ lorem }}
    />
  )
}

export { Tree }
