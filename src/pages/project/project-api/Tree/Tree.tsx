import { List, useDynamicRowHeight, type RowComponentProps } from 'react-window'
import { useLorem } from './useLorem'
import { useMemo } from 'react'
import { useProjectApiContentContext } from '../ProjectApiContentContext'
import clsx from 'clsx'

const MainRowComponent = (props: RowComponentProps<{}>) => {
  const { style, index } = props

  const projectApiContentContext = useProjectApiContentContext()
  console.log(props)

  const handleClickRow = () => {
    projectApiContentContext.addSelectAndTab(index)
  }

  return (
    <div
      style={style}
      className={clsx(
        projectApiContentContext.selectedIds.includes(String(index)) &&
          'bg-neutral-100',
        'cursor-pointer hover:bg-neutral-100',
      )}
      onClick={() => handleClickRow()}
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
      rowProps={{ demo: 1 }}
    />
  )
}

export { Tree }
