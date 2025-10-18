import { List, useDynamicRowHeight, type RowComponentProps } from 'react-window'
import { useLorem } from './useLorem'
import { useMemo } from 'react'
import { useProjectApiContentContext } from '../ProjectApiContentContext'
import clsx from 'clsx'
import { createTab } from './const'

const MainRowComponent = (props: RowComponentProps<{}>) => {
  const { style, index, lorem } = props

  const { selectedIds, updateSelectedIds, addTabWithCaseCheck } =
    useProjectApiContentContext()
  // console.log(props)

  // 双击前，会执行2次单击，然后是双击回调函数。我们需要确认如果之前已经打开的tab是固定的话，就不需要再改动了。
  const handleClickRow = (fixed = false) => {
    updateSelectedIds(index)
    addTabWithCaseCheck(
      createTab({
        label: 'ceshi' + index,
        asideMeta: {
          id: String(index),
        },
        fixed,
      }),
    )
  }

  return (
    <div
      style={style}
      className={clsx(
        selectedIds.includes(String(index)) && 'bg-neutral-100',
        'cursor-pointer hover:bg-neutral-100',
      )}
      onClick={() => handleClickRow()}
      onDoubleClick={() => handleClickRow(true)}
    >
      Row
    </div>
  )
}

const Tree = (props: { filterValue?: string }) => {
  const { filterValue } = props

  const lorem = useLorem(filterValue)

  const oper = useMemo(() => {
    return {}
  }, [])

  const rowHeight = useDynamicRowHeight({
    defaultRowHeight: 50,
  })

  return (
    <List
      rowComponent={MainRowComponent}
      rowCount={lorem.length}
      rowHeight={rowHeight}
      rowProps={{ lorem }}
    />
  )
}

export { Tree }
