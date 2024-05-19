import { useRef } from 'react'
import { Badge, ColumnContainer, ColumnTitle } from '../styles'
import { addTask, useAppState } from '../state'
import { isDraggedItem, useColumnDrop, useItemDrag } from '../utils'
import { CancelButton } from './CancelButton'
import { Card } from './Card'
import { AddItem } from './AddItem'

type ColumnProps = {
  id: string
  text: string
  isPreview?: boolean
}

export const Column = ({ id, text, isPreview }: ColumnProps) => {
  const { getTasksByListId, dispatch, draggedItem } = useAppState()
  const { drag } = useItemDrag({ type: 'COLUMN', id, text })
  const { drop } = useColumnDrop({ type: 'COLUMN', id, text })

  const ref = useRef<HTMLDivElement>(null)

  const tasks = getTasksByListId(id)

  const handleAdd = (text: string) => {
    dispatch(addTask(text, id))
  }

  const handleCancel = () => {}

  drag(drop(ref))

  return (
    <ColumnContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isDraggedItem(draggedItem, 'COLUMN', id) && !isPreview}>
      <ColumnTitle>
        {text} <Badge>{id}</Badge> <CancelButton onCancel={handleCancel} />
      </ColumnTitle>
      {tasks.map(task => (
        <Card key={task.id} id={task.id} text={task.text} columnId={id} />
      ))}
      <AddItem dark={true} text={'Add another item'} onAdd={handleAdd} />
    </ColumnContainer>
  )
}

Column.displayName = 'Column'
